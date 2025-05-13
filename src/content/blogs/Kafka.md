---
title: "Kafka"
pubDate: "Jul 08 2022"
heroImage: "/blog-placeholder-3.jpg"
difficulty: "Kafka"
description: "data structure store"
topics: ["Kafka", "streaming", "distributed system"]
---

# Kafka: A Distributed Messaging System for Log Processing

## Mind Map: Mastering Kafka

### 1. **Purpose & Use Case**

- **Definition**: Distributed messaging system for collecting, processing, and delivering large-scale log data.
- **Use Case**: Centralized log processing for web activities, metrics, event streams (e.g., website tracking, monitoring).
- **Key Goal**: High throughput, scalability, fault tolerance, durability.

### 2. **Core Components**

- **Topics**
  - Logical channels for messages (e.g., "user-clicks").
  - Divided into partitions for parallel processing.
- **Partitions**
  - Ordered, immutable sequence of messages (logical log).
  - Distributed across brokers for scalability.
- **Brokers**
  - Servers in a Kafka cluster.
  - Store partitions, handle producer/consumer requests.
- **Producers**
  - Publish messages to topics/partitions.
- **Consumers**
  - Subscribe to topics, read messages from partitions.
  - Organized into consumer groups for load balancing.
- **Zookeeper**
  - Manages cluster metadata, leader election, configuration.

### 3. **Storage Design**

- **Logical Log**
  - Each partition is a logical log (ordered, immutable message sequence).
- **Segment Files**
  - Physical storage: Logs split into segment files (~1GB each).
  - Active segment: Last file where new messages are appended.
  - Older segments: Read-only, deleted based on retention (time/size).
- **Page Cache**
  - Messages buffered in OS page cache (RAM) before flushing to disk.
  - Avoids double buffering (no app-level cache in JVM).
  - Benefits:
    - Retains warm cache after broker restarts.
    - Simplifies memory management (low GC overhead).
- **Flushing**
  - Messages flushed to disk after configurable triggers (e.g., message count, time).
  - Only flushed messages visible to consumers (ensures durability).

### 4. **Performance Optimizations**

- **Sequential I/O**
  - Producers: Append messages sequentially to active segment.
  - Consumers: Read messages sequentially from logs.
  - Consumer lag: Often read recently written data (in page cache).
- **OS Caching Heuristics**
  - **Write-through caching**: Buffers writes in page cache for fast, durable writes.
  - **Read-ahead**: Preloads sequential data into page cache for fast reads.
  - Result: Minimizes disk I/O, high throughput.
- **Zero-Copy I/O**
  - Transfers data directly from page cache to network (e.g., using `sendfile`).
  - Avoids copying data into Kafka process memory.
- **Linear Scalability**
  - Consistent performance scales linearly with data size (up to terabytes).
  - Sequential I/O and caching avoid bottlenecks.

### 5. **Distributed System Features**

- **Replication**
  - Each partition has replicas (leader + followers) across brokers.
  - Leader handles reads/writes; followers replicate for fault tolerance.
  - Ensures durability and availability.
- **Fault Tolerance**
  - Tolerates broker failures via replication.
  - Leader election (via Zookeeper) reassigns leadership if leader fails.
- **Scalability**
  - Partitions distributed across brokers for parallel processing.
  - Add brokers/partitions to scale horizontally.
- **Consumer Groups**
  - Consumers in a group share partitions for load balancing.
  - Enables parallel consumption within a group.

### 6. **Key Benefits**

- **High Throughput**: Sequential I/O, OS caching, zero-copy I/O.
- **Scalability**: Partitioned, distributed architecture.
- **Durability**: Replication, flushed messages.
- **Simplicity**: Relies on OS page cache, minimal app-level memory management.
- **Flexibility**: Supports batch and real-time processing.

### 7. **Key Design Choices**

- **Log-based Storage**: Append-only, immutable logs for simplicity and performance.
- **No App-level Caching**: Uses OS page cache to avoid double buffering, simplify GC.
- **Sequential Access**: Optimizes for producer/consumer patterns with small consumer lag.
- **Distributed Architecture**: Replication and partitioning for fault tolerance and scalability.

## Summary

Kafka is a distributed messaging system optimized for log processing, offering high throughput, scalability, and durability. Its log-based storage (partitions as logical logs, segment files), reliance on OS page cache, sequential I/O, and distributed features (replication, consumer groups) make it efficient for large-scale data streaming. This mind map organizes the paper’s key ideas to help you master Kafka’s architecture and design principles.
