---
title: "container-with-most-water"
pubDate: "May 16 2025"
heroImage: "/blog-placeholder-3.jpg"
difficulty: "Easy"
description: ""
topics: ["array", "two pointers", "kadan's algorithm", "Old and new state"]
---

```java
class Solution {
    public int maxSubarraySumCircular(int[] nums) {
        int curMax = 0, curMin = 0, maxSum = nums[0], minSum = nums[0], totalSum = 0;

        for (int num: nums) {
            // Normal Kadane's
            curMax = Math.max(curMax, 0) + num;
            maxSum = Math.max(maxSum, curMax);

            // Kadane's but with min to find minimum subarray
            curMin = Math.min(curMin, 0) + num;
            minSum = Math.min(minSum, curMin);

            totalSum += num;
        }

        if (totalSum == minSum) {
            return maxSum;
        }

        return Math.max(maxSum, totalSum - minSum);
    }
}
```
