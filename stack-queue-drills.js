/* 1. Create a stack class
Walk through the Stack class in the curriculum and understand it well. Then write a Stack class with its core functions (push, pop) from scratch.

Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.

2. Useful methods for a stack
Using the Stack class above, implement the following helper functions outside of the class:
peek(): allows you to look at the top of the stack without removing it
isEmpty(): allows you to check if the stack is empty or not
display(): to display the stack - what is the 1st item in your stack?
Remove McCoy from your stack and display the stack */
'use strict'

const stack = require('./stack-class')

function peek(stack){
    let node = stack.top;

    if (node){
        return node.data
    }
    else {
        console.log('Stack Empty')
        return false
    }

}

function display(stack){
    console.log(JSON.stringify(stack))
}

function isStackEmpty(s){
    return s.top === null;
}


const starTrek = new stack();
starTrek.push('kirk')
starTrek.push('spock')
starTrek.push('mccoy')
starTrek.push('scotty')
//starTrek.pop()
//starTrek.pop()
peek(starTrek)
display(starTrek)


