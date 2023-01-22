//Build a stack using a linked list
//Include methods to push, pop and peek

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  //peek is just to see the very top item on the stack
  peek() {
    return this.top;
  }

  push(data) {
    const newNode = new Node(data);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingPointer;
  }
}

const myStack = new Stack();
console.log(myStack.peek());
console.log(myStack.push('google'));
console.log(myStack.push('udemy'));
console.log(myStack.push('discord'));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack);
