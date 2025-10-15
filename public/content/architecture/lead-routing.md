---
id: lead-routing
title: "Real-time Lead Routing System"
description: "Intelligent lead distribution platform with ping/post mechanism serving 15+ partners and $2M+ annual revenue"
type: architecture
technologies:
  - Event-Driven
  - Real-time Processing
  - Express.js
  - Redis
  - Load Balancing
---

# Real-time Lead Routing System

## System Overview

An intelligent, real-time lead distribution system that routes qualified leads to the highest-bidding buyer using a ping/post mechanism, processing 50K+ leads monthly.

## Architecture Components

### Lead Ingestion Layer

- REST API endpoints for lead submission
- Input validation and sanitization
- Rate limiting and DDoS protection

### Scoring Engine

- Real-time lead quality scoring
- Machine learning-based predictions
- Historical conversion data analysis

### Ping/Post Mechanism

1. **Ping Phase:** Send lead summary to all buyers
2. **Bidding:** Buyers respond with price and capacity
3. **Post Phase:** Full lead sent to highest bidder
4. **Fallback:** Cascade to next buyer if primary fails

### Distribution Logic

```javascript
async function routeLead(lead) {
  // Score the lead
  const score = await scoringEngine.evaluate(lead);

  // Ping available buyers
  const bids = await pingBuyers(lead.summary, score);

  // Select winner
  const winner = selectHighestBid(bids);

  // Post full lead
  return await postToWinner(lead, winner);
}
```

## Key Features

### Intelligent Routing
- Quality-based matching
- Buyer capacity monitoring
- Geographic targeting
- Time-based optimization

### Real-time Analytics
- Conversion tracking
- Revenue attribution
- Performance dashboards
- A/B testing framework

### Fault Tolerance
- Automatic failover
- Dead letter queue for failed deliveries
- Retry logic with exponential backoff

## Performance Metrics

- **Response Time:** <200ms for ping/post cycle
- **Availability:** 99.95% uptime
- **Conversion Rate:** 35% (industry average: 25%)
- **Revenue:** $2M+ annually
