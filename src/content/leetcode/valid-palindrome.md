---
title: "Valid Palindrome"
pubDate: "May 16 2025"
heroImage: "/blog-placeholder-3.jpg"
difficulty: "Easy"
description: ""
topics: ["array", "two pointers", "left-right"]
---

```java
class Solution {
    public boolean isPalindrome(String s) {

        if(s == null) return true;
        s = cleanString(s);
        int L = 0, R = s.length() - 1;

        while(L < R) {
            if(s.charAt(L++) != s.charAt(R--)) return false;
        }

        return true;
    }

    public static String cleanString(String input) {
        return input.toLowerCase().replaceAll("[^a-z0-9]", "");
    }
}
```
