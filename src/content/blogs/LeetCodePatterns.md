---
title: "Leed Code Problem Patterns"
pubDate: "Jul 08 2022"
heroImage: "/blog-placeholder-3.jpg"
difficulty: "Easy"
description: "This document lists ~25 commonly recognized patterns for solving LeetCode problems, sorted by fundamentality (how essential they are to algorithmic thinking), level (Beginner, Intermediate, Advanced), and dependencies (patterns that rely on others). The patterns are organized to ensure dependencies are introduced before dependent patterns. A dependency tree is included at the end to visualize relationships between patterns."
topics: ["Patterns", "leetcode"]
---

# LeetCode Problem-Solving Patterns

This document lists ~25 commonly recognized patterns for solving LeetCode problems, sorted by fundamentality (how essential they are to algorithmic thinking), level (Beginner, Intermediate, Advanced), and dependencies (patterns that rely on others). The patterns are organized to ensure dependencies are introduced before dependent patterns. A dependency tree is included at the end to visualize relationships between patterns.

## Beginner Level (Fundamental, Core Concepts)

1. **Hashing**

   - **Level**: Beginner
   - **Fundamentality**: Extremely fundamental; using hash maps/sets for fast lookups is a core concept.
   - **Dependencies**: None
   - **Description**: Solves problems requiring frequency counting or quick lookups (e.g., Two Sum).

2. **Recursion**

   - **Level**: Beginner
   - **Fundamentality**: Core to algorithmic thinking, especially for tree/graph problems.
   - **Dependencies**: None
   - **Description**: Solves problems by breaking them into smaller instances (e.g., factorial, tree traversals).

3. **Stack**

   - **Level**: Beginner
   - **Fundamentality**: Basic data structure for handling nested or LIFO problems.
   - **Dependencies**: None
   - **Description**: Used for problems like valid parentheses or expression evaluation.

4. **Queue**

   - **Level**: Beginner
   - **Fundamentality**: Basic for FIFO processing.
   - **Dependencies**: None
   - **Description**: Used in BFS or sliding window problems.

5. **Two Pointers**

   - **Level**: Beginner
   - **Fundamentality**: Fundamental for array/list traversal.
   - **Dependencies**: None
   - **Description**: Uses two pointers to traverse arrays (e.g., remove duplicates from sorted array).

6. **Fast and Slow Pointers**
   - **Level**: Beginner
   - **Fundamentality**: Slightly less fundamental than Two Pointers but still basic.
   - **Dependencies**: Two Pointers
   - **Description**: Used in linked lists or cycle detection (e.g., detect cycle in linked list).

## Intermediate Level (Build on Fundamentals, Moderate Complexity)

7. **Binary Search**

   - **Level**: Intermediate
   - **Fundamentality**: Fundamental for search problems but requires understanding recursion or iteration.
   - **Dependencies**: Recursion
   - **Description**: Divides search space in half (e.g., search in sorted array).

8. **Sliding Window**

   - **Level**: Intermediate
   - **Fundamentality**: Builds on array traversal concepts.
   - **Dependencies**: Two Pointers
   - **Description**: Maintains a dynamic window for subarray/substring problems (e.g., longest substring without repeating characters).

9. **Depth-First Search (DFS)**

   - **Level**: Intermediate
   - **Fundamentality**: Core for graph/tree problems.
   - **Dependencies**: Recursion
   - **Description**: Explores branches fully before backtracking (e.g., number of islands).

10. **Breadth-First Search (BFS)**

    - **Level**: Intermediate
    - **Fundamentality**: Complements DFS for graph problems.
    - **Dependencies**: Queue
    - **Description**: Explores level by level (e.g., shortest path in unweighted graph).

11. **Greedy**

    - **Level**: Intermediate
    - **Fundamentality**: Conceptually simple but requires intuition.
    - **Dependencies**: None
    - **Description**: Makes locally optimal choices (e.g., activity selection).

12. **Prefix Sum**

    - **Level**: Intermediate
    - **Fundamentality**: Useful for array problems but less universal.
    - **Dependencies**: None
    - **Description**: Precomputes cumulative sums (e.g., range sum query).

13. **Heap/Priority Queue**

    - **Level**: Intermediate
    - **Fundamentality**: Important for optimization problems.
    - **Dependencies**: None
    - **Description**: Maintains min/max elements (e.g., top K frequent elements).

14. **Matrix Traversal**

    - **Level**: Intermediate
    - **Fundamentality**: Specific but common in 2D problems.
    - **Dependencies**: Recursion or DFS
    - **Description**: Traverses 2D arrays (e.g., spiral matrix).

15. **Bit Manipulation**
    - **Level**: Intermediate
    - **Fundamentality**: Niche but useful for optimization.
    - **Dependencies**: None
    - **Description**: Uses bitwise operations (e.g., single number).

## Advanced Level (Complex, Specialized, or Multi-Pattern Dependencies)

16. **Dynamic Programming (DP)**

    - **Level**: Advanced
    - **Fundamentality**: Powerful but complex.
    - **Dependencies**: Recursion, Hashing
    - **Description**: Solves problems with overlapping subproblems (e.g., longest palindromic substring).

17. **Backtracking**

    - **Level**: Advanced
    - **Fundamentality**: Specialized for combinatorial problems.
    - **Dependencies**: Recursion, DFS
    - **Description**: Explores all possibilities with pruning (e.g., N-Queens).

18. **Divide and Conquer**

    - **Level**: Advanced
    - **Fundamentality**: General strategy but less common in LeetCode.
    - **Dependencies**: Recursion
    - **Description**: Splits problems into subproblems (e.g., merge sort).

19. **Union-Find (Disjoint Set)**

    - **Level**: Advanced
    - **Fundamentality**: Specialized for graph problems.
    - **Dependencies**: None
    - **Description**: Manages connected components (e.g., number of provinces).

20. **Topological Sort**

    - **Level**: Advanced
    - **Fundamentality**: Specific to DAGs.
    - **Dependencies**: DFS or BFS
    - **Description**: Orders vertices by dependencies (e.g., course schedule).

21. **Trie**

    - **Level**: Advanced
    - **Fundamentality**: Niche for string problems.
    - **Dependencies**: None
    - **Description**: Used for prefix-based string problems (e.g., word search II).

22. **Monotonic Stack/Queue**

    - **Level**: Advanced
    - **Fundamentality**: Specialized for optimization.
    - **Dependencies**: Stack or Queue
    - **Description**: Maintains elements in order (e.g., next greater element).

23. **Interval**

    - **Level**: Advanced
    - **Fundamentality**: Specific to scheduling problems.
    - **Dependencies**: None
    - **Description**: Handles overlapping intervals (e.g., merge intervals).

24. **Meet in the Middle**

    - **Level**: Advanced
    - **Fundamentality**: Rare but powerful.
    - **Dependencies**: Recursion, Divide and Conquer
    - **Description**: Splits problems into two halves (e.g., subset sum).

25. **Reservoir Sampling**
    - **Level**: Advanced
    - **Fundamentality**: Very niche for streaming data.
    - **Dependencies**: None
    - **Description**: Randomly selects items from a stream (e.g., random pick index).

## Notes

- **Fundamentality**: Beginner patterns are foundational, introducing core data structures. Intermediate patterns add complexity, and Advanced patterns are specialized or combine multiple concepts.
- **Level**: Beginner (minimal experience), Intermediate (basic data structure knowledge), Advanced (deep intuition or specific techniques).
- **Dependencies**: Patterns like Binary Search require Recursion, and Topological Sort relies on DFS/BFS. Some patterns (e.g., Hashing) have no strict dependencies.
- **Learning Path**: Start with Hashing, Recursion, Stack, Queue, Two Pointers; then Binary Search, Sliding Window, DFS, BFS; finally, DP, Backtracking, Trie, and niche patterns like Reservoir Sampling.

## Dependency Tree

Below is a text-based dependency tree showing how patterns rely on each other. Patterns with no dependencies are at the root level, and dependent patterns are indented under their prerequisites. Arrows (`->`) indicate dependency relationships.

```
- Hashing
- Recursion
  -> Binary Search
  -> Depth-First Search (DFS)
     -> Backtracking
     -> Topological Sort
  -> Dynamic Programming (DP)
  -> Divide and Conquer
     -> Meet in the Middle
  -> Matrix Traversal
- Stack
  -> Monotonic Stack/Queue
- Queue
  -> Breadth-First Search (BFS)
     -> Topological Sort
  -> Monotonic Stack/Queue
- Two Pointers
  -> Fast and Slow Pointers
  -> Sliding Window
- Greedy
- Prefix Sum
- Heap/Priority Queue
- Bit Manipulation
- Union-Find (Disjoint Set)
- Trie
- Interval
- Reservoir Sampling
```

**Notes on the Tree**:

- Patterns like `Hashing`, `Recursion`, `Stack`, `Queue`, and `Two Pointers` are root nodes (no dependencies).
- `Dynamic Programming` depends on both `Recursion` and `Hashing`, but is shown under `Recursion` for simplicity (assume `Hashing` is known).
- `Matrix Traversal` can depend on `Recursion` or `DFS`; it’s placed under `Recursion` for generality.
- `Topological Sort` can use `DFS` or `BFS`, so it’s shown under both, but listed once in the main hierarchy.
