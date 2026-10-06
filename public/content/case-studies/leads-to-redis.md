---
id: leads-to-redis
title: "Moving 45,000 Live Leads from Memory to Redis"
tagline: "Making a ping/post lead service stateless so Kubernetes could scale it out"
type: case-study
tags:
  - Node.js
  - Redis
  - Kubernetes
  - Ping/Post
  - Horizontal Scaling
---

The lead service kept every active lead in its own memory. That was fast, and it meant we could only ever run one copy of it. This is how the leads moved to Redis and the service became something Kubernetes could scale.

## Problem

In a ping/post system a lead is short-lived and busy. It arrives, buyers are pinged, bids come back, the winner gets the post. While that happens, everything about the lead is read and written constantly. Keeping leads in a map inside the Node.js process was the natural first design: no network hop, no serialization.

With more than 45,000 leads live in memory, that design had three costs.

- **One replica, no more.** A second pod would hold its own, different set of leads. A ping could land on one pod and the post on another that had never heard of the lead.
- **Every restart lost state.** A deploy or a crash emptied the map, and the leads in flight went with it.
- **Scaling meant a bigger machine.** More load could only be met with more memory and CPU on one box, and a larger heap means longer garbage collection pauses.

## Before and after

| | Before | After |
|---|---|---|
| **Lead state** | A map in the Node.js process | Redis, shared by every pod |
| **Replicas** | One, fixed | Set by Kubernetes from load |
| **Deploy or crash** | Live leads are lost | Pods roll, leads stay |
| **More load** | A bigger machine | More pods |
| **Reading a lead** | A lookup in memory | One network round trip |

## Technical Decisions

### Lead state lives in Redis, not in the pod

- **Context:** the leads needed one home that every replica could reach, fast enough to sit on the hot path.
- **Decision:** every live lead is stored in Redis under its id. A pod keeps nothing between requests.
- **Trade-off:** a network round trip and a serialization step replace a pointer lookup. Redis becomes the one thing that cannot go down.

### Atomic updates replace the safety of a single process

- **Context:** in one Node.js process the event loop keeps two handlers from touching a lead at the same instant. With several pods, nothing does.
- **Decision:** each state change on a lead is a single atomic Redis operation, so two pods can never both win the same lead.
- **Trade-off:** race conditions that could not exist before now have to be designed out, and tested with more than one replica running.

### Kubernetes decides how many pods run

- **Context:** lead volume is not flat through the day. A fixed size is either wasteful at night or too small at the peak.
- **Decision:** with no state in the pods, the service runs with dynamic replicas. Kubernetes adds pods as load rises and removes them as it falls.
- **Trade-off:** pods can disappear at any moment, so each one has to finish its in-flight requests and exit cleanly when asked to stop.

## Result

The service now runs as stateless pods. More than 45,000 live leads sit in one place every pod can see, deploys roll through without dropping a lead, and capacity follows load instead of being guessed in advance.

The price was a network hop on every lead read and a hard dependency on Redis. For a system that has to grow sideways, both were worth paying.
