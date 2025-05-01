---
title: "Two Sum"
pubDate: "Jul 08 2022"
heroImage: "/blog-placeholder-3.jpg"
difficulty: "Easy"
description: "The Two Sum problem was my first LeetCode challenge. Given an array of integers and a target sum, find two numbers that add up to the target. I used a hash map for an O(n) solution."
topics: ["array", "hash-map"]
---

```java
import java.util.HashMap;
import java.util.Map;

public class TwoSumSolution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>(); // stores number -> index

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }

            map.put(nums[i], i);
        }

        // In case there's no solution
        throw new IllegalArgumentException("No two sum solution");
    }
}
```
