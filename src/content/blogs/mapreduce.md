---
title: "MapReduce"
pubDate: "Jul 08 2022"
heroImage: "/blog-placeholder-3.jpg"
difficulty: "Kafka"
description: "data structure store"
topics: ["mapreduce", "distributed system"]
---

# MapReduce: Simplified Data Processing on Large Clusters

## 🧠 Deep-Dive Notes

### 📘 Introduction

- **Goal:** Simplify large-scale data processing across thousands of machines.
- **Problem:** Writing distributed programs is hard—needs handling of parallelization, fault-tolerance, data distribution, and load balancing.
- **Solution:** Provide an abstraction—**MapReduce**—inspired by Lisp primitives `map()` and `reduce()`.

### 🧩 Programming Model

- **Map Function:**
  ```python
  map(key1, value1) → list(key2, value2)
  ```
- **Reduce Function:**
  ```python
  reduce(key2, list(value2)) → list(value3)
  ```
- **Example (Word Count):**
  - Map emits (word, 1) for each word.
  - Reduce sums up the counts for each word.

### ⚙️ Execution Overview

1. **Split Input:** Input data is split into **M** splits.
2. **Start Tasks:**
   - **Map Tasks (M):** Process input splits and generate intermediate pairs.
   - **Reduce Tasks (R):** Group intermediate pairs and apply reduce function.
3. **Data Flow:**
   - Intermediate data written to local disk.
   - Master informs reducers where to read from.
   - Reducers fetch data, sort by key, group values, and run reduce.
4. **Output:** Final output is written to distributed file system (e.g., GFS).

### 🧱 Fault Tolerance

- **Task re-execution:** On failure, master reschedules the task on another worker.
- **Data re-processing:** Since the Map/Reduce functions are pure (no side effects), re-execution is safe.
- **Stragglers:** Backup tasks started for slow-running workers to reduce latency.

### 🚀 Optimizations

- **Locality-aware scheduling:** Map tasks prefer data-local blocks.
- **Combiner Functions:** Mini-reduce at map-side to reduce data shuffle volume.
- **Partitioning Function:** Determines which reducer gets which key.

### 📊 Performance

- Google used it to sort **1TB of data in under 900 seconds** on a 1800-machine cluster.
- Highly scalable—used for web indexing, log analysis, machine learning, etc.

### 📦 Real-World Applications at Google

- Indexing web pages
- Extracting data from logs
- Generating reports
- Machine Learning preprocessing

### 🏆 Key Contributions

1. **Simplicity:** Developers only need to define Map and Reduce logic.
2. **Scalability:** Easily scales to petabytes.
3. **Fault Tolerance:** Robust against hardware/software failures.
4. **Reusability:** Adaptable to many problems in distributed computing.

---

## 🧭 Mind Map – MapReduce

```
MapReduce: Simplified Data Processing on Large Clusters
|
├── Concept
|   ├── Inspired by map() and reduce()
|   ├── Abstracts parallel computation
|
├── Programming Model
|   ├── Map(key1, value1) → list(key2, value2)
|   └── Reduce(key2, list(value2)) → list(value3)
|
├── Execution
|   ├── Split input → M map tasks
|   ├── Map phase → intermediate (key, value)
|   ├── Shuffle & sort
|   └── R reduce tasks → final output
|
├── Features
|   ├── Fault tolerance
|   ├── Data locality optimization
|   ├── Backup tasks for stragglers
|   └── Combiner for intermediate aggregation
|
├── Applications
|   ├── Web indexing
|   ├── Log analysis
|   ├── Report generation
|   └── Machine learning preprocessing
|
└── Impact
    ├── Simplified distributed programming
    ├── Inspired Hadoop and Spark
    └── Scalable & robust design
```
