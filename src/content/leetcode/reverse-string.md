---
title: "reverse-string"
difficulty: "Easy"
heroImage: "/blog-placeholder-3.jpg"
pubDate: 2025-04-20
description: "You must do this by modifying the input array in-place with O(1) extra memory."
topics: ["linked-list"]
---

```java
class Solution {
    public void reverseString(char[] s) {
        int left = 0, right = s.length - 1;
        while (left < right) {
            char tmp = s[left];
            s[left++] = s[right];
            s[right--] = tmp;
        }
    }
}
```
