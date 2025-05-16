---
title: "Remove element"
pubDate: "May 16 2025"
heroImage: "/blog-placeholder-3.jpg"
difficulty: "Easy"
description: ""
topics: ["array", "two pointers", "fast slow"]
---

```java
class Solution {
    public int removeElement(int[] nums, int val) {
       int k = 0;
       for(int i=0; i<nums.length; i++) {
          if(nums[i] != val) {
            nums[k++] = nums[i];
          }
       }
       return k;
    }
}
```
