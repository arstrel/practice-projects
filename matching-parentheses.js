/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true


*/


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let arr = s.split('');
    
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == "(" 
          || arr[i] == "["
          || arr[i] == "{") {
           stack.push(arr[i])
           }
        else if(arr[i] == ")") {
            if(stack[stack.length -1] == "(") {
                stack.pop()
            } else {return false}
        }
        else if(arr[i] == "]") {
            if(stack[stack.length-1] == "[") {
                stack.pop()
            } else{ return false}
        }
        else if(arr[i] == "}") {
            if(stack[stack.length-1] == "{") {
                stack.pop()
            } else {return false}
        }
        } //end of for loop
        
        if(stack.length > 0) {
            return false
        } else {
            return true
        }
    }
