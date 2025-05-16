---
title: "Move Zeroes"
pubDate: "May 16 2025"
heroImage: "/blog-placeholder-3.jpg"
difficulty: "Easy"
description: ""
topics: ["array", "two pointers", "slow fast"]
---

```java
class Solution {
    public void moveZeroes(int[] nums) {
        int c=0;
        for(int i=0; i<nums.length; i++) {
            if(nums[i] == 0) c++;
            else {
                nums[i-c] = nums[i];
                if(c > 0) nums[i] = 0;
            }
        }
    }
}
```
