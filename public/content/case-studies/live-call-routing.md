---
id: live-call-routing
title: "Routing a Live Phone Call to the Right Contractor"
tagline: "A side project: answer, match and transfer in one call"
type: case-study
tags:
  - NestJS
  - PostgreSQL
  - Redis
  - Telnyx
  - Stripe
  - AWS
---

A homeowner with a dead furnace wants a person now, not a callback. A contractor wants to pay for a real enquiry, not a wrong number. This system sits in the middle of that call.

## Problem

The usual flow is a web form and a callback. The homeowner waits, sometimes gets three calls from three companies, and whoever rings first wins.

This system does it during the call instead. It answers, finds out what is wrong and where, picks one contractor who covers that trade and postal code, and transfers the caller while they are still on the line. The contractor is charged only if the transferred call lasts longer than 60 seconds.

## Life of a call

1. **Telnyx.** The call arrives on a tracking number. Each landing site has its own.
2. **Webhook, NestJS.** Before the agent says a word, the number is mapped to a trade and a brand name, so it greets as the right business.
3. **Voice agent.** An AI voice agent collects the problem and the caller's postal code.
4. **Router, Postgres.** The postal code is looked up in a local table and matched to contractors who opted into that campaign and area and have a funded wallet.
5. **Transfer.** The caller is bridged live to the contractor's phone or to the web portal.
6. **Billing, Stripe.** After hang-up, if the transferred leg ran past 60 seconds, the contractor's prepaid wallet is debited.

## Technical Decisions

### The number dialled decides the trade, not the caller

- **Context:** people describe problems loosely. "My heat is out" can be a furnace or a boiler.
- **Decision:** each brand has its own number. A webhook at call start resolves number, then trade, then business name.
- **Trade-off:** one more number per brand to buy and watch. In return there is no classification step that can be wrong.

### A prepaid wallet instead of invoices

- **Context:** buyers are small contractors paying for single calls. Chasing invoices for those is a second business.
- **Decision:** contractors top up through Stripe. Each billable call debits the wallet. An empty wallet takes them out of routing.
- **Trade-off:** more friction at sign-up, and the debit has to be idempotent. No receivables, ever.

### Postal codes from a local table, not an API

- **Context:** routing happens while a person waits on the line. Every network hop is silence they can hear.
- **Decision:** a lookup table for the launch cities lives in the database. No geocoding call during a live call.
- **Trade-off:** coverage is added by hand, city by city. Lookups never wait on someone else's uptime.

## Status

The system is in production at an early stage. It is too early for numbers worth quoting, so there are none here.

I will add call volume, time to transfer and billing accuracy once there is enough traffic for them to mean something.
