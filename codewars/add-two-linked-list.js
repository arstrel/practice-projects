// https://leetcode.com/problems/add-two-numbers/
// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 
// itself.

// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


function ListNode(val) {
    this.val = val;
     this.next = null;
 }

var addTwoNumbers = function(l1, l2) {
       let node = null
    const carry = arguments[2]
    if (l1 || l2) {
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0
        const next1 = l1 ? l1.next : null
        const next2 = l2 ? l2.next : null
        const val = carry ? val1 + val2 + 1 : val1 + val2
        node = new ListNode(val % 10)
        node.next = addTwoNumbers(next1, next2, val >= 10)  
    } else if (carry) {
        node = new ListNode(1)
        node.next = null
    }
    return node
};



let link1 = new ListNode(2)
link1.next = new ListNode(4);
link1.next.next = new ListNode(3)
console.log(link1)

let link2 = new ListNode(5)
link2.next = new ListNode(6);
link2.next.next = new ListNode(4)
console.log(link2)

addTwoNumbers(link1, link2)