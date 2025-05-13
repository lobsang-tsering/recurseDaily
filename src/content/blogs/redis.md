---
title: "Redis"
pubDate: "Jul 08 2022"
heroImage: "/blog-placeholder-3.jpg"
difficulty: "redis"
description: "data structure store"
topics: ["redis", "caches"]
---

# Redis Sorted Sets and Hot Key Solutions Mindmap

- **Redis Sorted Sets**

  - **Definition**
    - Collection of unique strings with associated numeric scores
    - Sorted by scores (ascending) or lexicographically for equal scores
    - Ideal for leaderboards, priority queues, rate limiting
  - **Key Features**
    - Unique elements (no duplicates)
    - Floating-point scores (e.g., 1.5, -10.2)
    - Fast operations: O(log N) for add/remove/update
    - Atomic operations for concurrency
  - **Basic Commands**
    - `ZADD key score member`: Add/update elements
      - Example: `ZADD leaderboard 100 "Alice" 200 "Bob"`
    - `ZRANGE key start stop [WITHSCORES]`: Retrieve range by index or score
      - Example: `ZRANGE leaderboard 0 2 WITHSCORES`
    - `ZSCORE key member`: Get score
      - Example: `ZSCORE leaderboard "Bob"` → `"200"`
    - `ZINCRBY key increment member`: Increment score
      - Example: `ZINCRBY leaderboard 50 "Bob"` → `"250"`
    - `ZREM key member`: Remove element
      - Example: `ZREM leaderboard "Charlie"`
    - `ZCARD key`: Count elements
      - Example: `ZCARD leaderboard` → `2`
    - `ZRANK key member`: Get 0-based rank
      - Example: `ZRANK leaderboard "Bob"` → `1`
  - **Use Cases**
    - Leaderboards: Rank players/products by scores
    - Priority Queues: Process tasks by priority
    - Time-based Events: Store events with timestamps
    - Rate Limiting: Track requests in a sliding window

- **API Rate Limiting with Sorted Sets**

  - **Purpose**
    - Restrict API requests (e.g., 5 requests/minute per user)
    - Prevent abuse, ensure fair usage
  - **Sliding Window Approach**
    - **How It Works**
      - Store request timestamps as scores in a Sorted Set
      - Key: `rate_limit:user_id`
      - Element: Unique ID (e.g., UUID), Score: Timestamp
      - Remove old timestamps (`ZREMRANGEBYSCORE`)
      - Count requests in window (`ZCARD`)
    - **Example**
      - Limit: 5 requests in 60 seconds
      - Commands:
        - `ZADD rate_limit:alice timestamp uuid`
        - `ZREMRANGEBYSCORE rate_limit:alice 0 (now - 60s)`
        - `ZCARD rate_limit:alice` → Check if < 5
      - Python Code:
        ```python
        import redis, time, uuid
        r = redis.Redis(decode_responses=True)
        def is_rate_limited(user_id, limit=5, window=60):
            key = f"rate_limit:{user_id}"
            now = int(time.time() * 1000)
            r.zremrangebyscore(key, 0, now - window * 1000)
            count = r.zcard(key)
            if count >= limit:
                return True, count
            r.zadd(key, {str(uuid.uuid4()): now})
            r.expire(key, window)
            return False, count + 1
        ```
    - **Pros**
      - Precise sliding window
      - Flexible window sizes
    - **Cons**
      - Higher memory usage (one entry per request)
      - More complex than Token Bucket
  - **Alternative: Token Bucket**
    - Use counter key with `INCR` and `EXPIRE`
    - Simpler but less precise (fixed window)

- **Hot Key Issue**

  - **Definition**
    - One key (e.g., `item:hot_item`) receives disproportionate traffic
    - Overwhelms the Redis node hosting the key
    - Example: Popular item in e-commerce store matches traffic of all other items
  - **Impact**
    - Node CPU/memory saturation
    - Slow responses or failures
    - Cluster imbalance (other nodes underutilized)
  - **Solutions**
    - **In-Memory Client Cache**
      - **How**
        - Cache data locally in clients (e.g., LRU cache)
        - Check local cache before Redis
        - Example: Python `lru_cache` for item details
      - **Pros**
        - Reduces Redis load (e.g., 90% fewer requests)
        - Fast (local memory access)
        - Simple to implement
      - **Cons**
        - Client memory usage
        - Stale data risk (until TTL expires)
        - Cache invalidation complexity
      - **Example**
        ```python
        from functools import lru_cache
        import redis
        r = redis.Redis(decode_responses=True)
        @lru_cache(maxsize=1000)
        def get_item_details(item_id, cache_buster=time.time() // 60):
            return r.get(f"item:{item_id}")
        ```
    - **Key Replication with Randomization**
      - **How**
        - Store data in multiple keys (e.g., `item:hot_item:1`, `:2`)
        - Randomly select key for reads
        - Write to all keys for updates
      - **Pros**
        - Spreads load across nodes (e.g., 5 replicas → 20% load each)
        - No extra hardware
      - **Cons**
        - Increased write overhead
        - Higher storage (N times per hot item)
        - Complex replica management
      - **Example**
        ```python
        import redis, random
        r = redis.Redis(decode_responses=True)
        NUM_REPLICAS = 5
        def get_item_details(item_id):
            replica = random.randint(1, NUM_REPLICAS)
            return r.get(f"item:{item_id}:{replica}")
        def update_item_details(item_id, data):
            for replica in range(1, NUM_REPLICAS + 1):
                r.set(f"item:{item_id}:{replica}", data)
        ```
    - **Read Replicas with Dynamic Scaling**
      - **How**
        - Use primary-replica setup
        - Route reads to replicas, writes to primary
        - Auto-scale replicas based on load
      - **Pros**
        - Scales read capacity dynamically
        - Consistent data (via replication)
        - Ideal for cloud environments
      - **Cons**
        - Higher cost (more nodes)
        - Replication lag (minor)
        - Setup complexity (load balancer, scaling policies)
      - **Example**
        - Configure Redis Sentinel with 1 primary, 3 replicas
        - Use client-side read/write splitting
        - Auto-scale replicas with AWS ElastiCache
  - **Choosing a Solution**
    - In-Memory Cache: Static data, low complexity
    - Key Replication: Read-heavy, infrequent updates
    - Replicas: Dynamic traffic, cloud deployments

- **Best Practices**

  - **Monitoring**
    - Use `INFO`, `MONITOR`, or Prometheus to detect hot keys
    - Track cache hit/miss rates
  - **Optimization**
    - Use pipelines or Lua scripts for efficiency
    - Configure `maxmemory-policy` (e.g., `volatile-lru`)
  - **Scalability**
    - Use Redis Cluster for sharding
    - Add replicas for read-heavy loads
  - **Testing**
    - Simulate hot keys with `redis-benchmark`
    - Experiment with mitigations locally

- **Resources**
  - Redis Documentation: https://redis.io/commands#sorted_set
  - Redis Cluster Tutorial: https://redis.io/topics/cluster-tutorial
  - System Design Guides: Explore caching, rate limiting, and scaling patterns
