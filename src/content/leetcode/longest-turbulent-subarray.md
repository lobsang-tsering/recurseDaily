---
title: "Longest Turbulent Subarray"
pubDate: "May 15 2025"
heroImage: "/blog-placeholder-3.jpg"
difficulty: "Easy"
description: ""
topics: ["array", "two pointers", "kadan's Algorithm", "sliding window"]
---

```java
class Solution {
    public int maxTurbulenceSize(int[] arr) {
        int n = arr.length;
        if (n < 2)
            return n;

        int maxLen = 1, curLen = 1;
        int prevCmp = 0;

        for (int i = 1; i < n; i++) {
            int cmp = Integer.compare(arr[i - 1], arr[i]);

            if (cmp == 0)
                curLen = 1; // equal values break turbulence
            else if (prevCmp * cmp == -1)
                // if direction alternates: +1 → -1 or -1 → +1
                curLen += 1;
            else
                // new turbulent sequence starting at i-1
                curLen = 2;

            maxLen = Math.max(maxLen, curLen);
            prevCmp = cmp;
        }

        return maxLen;
    }
}
```
