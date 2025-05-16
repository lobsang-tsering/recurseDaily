---
title: "container-with-most-water"
pubDate: "May 16 2025"
heroImage: "/blog-placeholder-3.jpg"
difficulty: "Easy"
description: ""
topics: ["array", "two pointers", "left-right"]
---

```java
class Solution {
    public int maxArea(int[] height) {
        int x = height.length - 1;

        int L = 0, R = height.length - 1;
        int curr_capacity = 0;
        int max = 0;
        while (L < R) {
            if (height[L] > height[R]) {
                curr_capacity = height[R--] * x--;
            } else {
                curr_capacity = height[L++] * x--;
            }
            max = Math.max(max, curr_capacity);
        }
        return max;
    }
}
```
