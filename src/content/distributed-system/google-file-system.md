---
title: "Google File System Note"
difficulty: "Medium"
heroImage: "/blog-placeholder-3.jpg"
pubDate: 2025-04-20
description: "Reversing a linked list was tough but rewarding. I used an iterative approach with three pointers to reverse the list in place."
topics: ["big data", "gfs", "distributed system"]
---

## 🔥MOTIVATION?

- component failures are the norm rather than the exception.
  - The system is built from many inexpensive commodity
    components that often fail. It must constantly monitor
    itself and detect, tolerate, and recover promptly from
    component failures on a routine basis.
  - ## 🐞 ROOT CAUSE?
    - operating system bugs
    - application bugs
    - memory
    - connectors
    - networking
    - power supply
    - disk failure
  - ## 🧠 SOLUTION
    - constant monitoring
    - error detection
    - fault tolerance
    - automatic recovery
