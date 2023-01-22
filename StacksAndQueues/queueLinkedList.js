//Build a stack using a linked list
//Include methods to push, pop and peek

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.last = null;
    this.length = 0;
  }

  //returns the item at the front of the queue
  peek() {
    return this.front;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (!this.front) {
      this.front = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.front) {
      return null;
    }
    if (this.front === this.last) {
      this.last = null;
    }
    const holdingPointer = this.front;
    this.front = this.front.next;
    this.length--;
    return holdingPointer;
  }
}

const myQ = new Queue();

console.log(myQ.enqueue('Google'));
console.log(myQ.enqueue('Udemy'));
console.log(myQ.peek());
console.log(myQ.enqueue('reddit'));
console.log(myQ.dequeue());
console.log(myQ);
