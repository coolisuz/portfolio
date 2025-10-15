---
id: trading-platform
title: "Uzbekistan's First Stock Trading Platform"
tagline: "Building reliable trading backend at national scale"
type: case-study
tags:
  - Microservices
  - Kafka
  - PostgreSQL
  - Redis
  - AWS
  - Node.js
metrics:
  - 150K+ active users
  - 1M+ monthly transactions
  - 99.9% uptime
  - <100ms latency
---

## Problem

Built a national-scale stock trading platform from scratch to serve 150K+ active users with real-time trading capabilities. System needed to handle high concurrency, ensure transaction consistency, and maintain 99.9% uptime.

## Approach

Designed microservices-based architecture with event-driven communication. Implemented separate services for order processing, market data, user management, and settlements.

## Technical Decisions

- **Apache Kafka** for async event processing and reliable message delivery
- **PostgreSQL** with ACID guarantees for financial transactions
- **Redis** for real-time market data caching and session management
- **Node.js + Docker** for modular, scalable services
- **AWS ECS** with auto-scaling for handling peak trading hours

## Result

Successfully launched platform serving 150K+ users processing 1M+ transactions monthly with 99.9% uptime and sub-100ms order placement latency.

### Key Metrics

- **150K+ active users** - National scale adoption
- **1M+ monthly transactions** - High throughput processing
- **99.9% uptime** - Reliable service delivery
- **<100ms latency** - Fast order execution
