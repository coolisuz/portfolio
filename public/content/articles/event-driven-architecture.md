---
id: event-driven-architecture
title: "Building Event-Driven Systems with Kafka"
description: "How we built a scalable event-driven architecture for a stock trading platform serving 150K+ users with 99.9% uptime."
date: "December 10, 2024"
readTime: "10 min read"
type: article
tags:
  - Architecture
  - Kafka
  - Microservices
  - Scalability
---

# Building Event-Driven Systems with Kafka

## Why Event-Driven Architecture?

Traditional request-response systems struggle with scale. Event-driven architecture (EDA) enables loose coupling, scalability, and resilience.

## Our Use Case: Stock Trading Platform

With 150K+ users and 1M+ monthly transactions, we needed:
- **High throughput** - Process thousands of orders per second
- **Reliability** - Zero transaction loss
- **Scalability** - Handle peak trading hours
- **Audit trail** - Complete transaction history

## Architecture Overview

### Event Flow

1. **Order Placement** → Order Service publishes `OrderCreated` event
2. **Kafka** distributes event to consumers
3. **Market Data Service** updates prices
4. **Settlement Service** processes transactions
5. **Notification Service** alerts users

### Key Design Decisions

#### 1. Event Schema Design

```json
{
  "eventId": "uuid-v4",
  "eventType": "OrderCreated",
  "timestamp": "2025-01-15T10:30:00Z",
  "payload": {
    "orderId": "12345",
    "userId": "67890",
    "symbol": "AAPL",
    "quantity": 100,
    "price": 150.25
  },
  "metadata": {
    "version": "1.0",
    "source": "order-service"
  }
}
```

#### 2. Topic Partitioning Strategy

Partition by `userId` to ensure ordering for user-specific events:

```javascript
const partition = hash(userId) % numPartitions;
```

#### 3. Consumer Groups

Separate consumer groups for different processing needs:
- **Critical Path:** Order matching (high priority)
- **Analytics:** Data aggregation (can lag)
- **Notifications:** User alerts (best effort)

## Challenges Solved

### Challenge 1: Exactly-Once Semantics

**Solution:** Idempotent consumers with deduplication using `eventId`

### Challenge 2: Event Ordering

**Solution:** Partition by entity ID (userId, orderId)

### Challenge 3: Dead Letter Queue

**Solution:** Retry mechanism with exponential backoff, DLQ for failed events

## Production Results

- **99.9% uptime** across all services
- **Sub-100ms** event processing latency
- **1M+ events/day** processed reliably
- **Zero data loss** since launch

## Lessons Learned

1. **Design events carefully** - They're your contract
2. **Monitor lag obsessively** - Consumer lag kills performance
3. **Plan for failures** - DLQ and retry logic are essential
4. **Version your events** - Schema evolution is inevitable
