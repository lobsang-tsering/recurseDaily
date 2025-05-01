---
title: "Reverse Linked List: A Tricky Iteration"
difficulty: "Medium"
heroImage: "/blog-placeholder-3.jpg"
pubDate: 2025-04-20
description: "Reversing a linked list was tough but rewarding. I used an iterative approach with three pointers to reverse the list in place."
topics: ["linked-list"]
---

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseList(head: ListNode) -> ListNode:
    prev = None
    curr = head
    while curr:
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    return prev
```
