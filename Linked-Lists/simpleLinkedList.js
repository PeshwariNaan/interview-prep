//Very simple linked list
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
  }

  size() {
    let node = this.head;
    let count = 0;
    while (node) {
      count = count + 1;
      node = node.next;
    }
    return count;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  getLast() {
    return this.getAt(this.size() - 1);
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
}

const myLinkedList = new LinkedList();

console.log('myLinkedList :', myLinkedList);
console.log('last node :', myLinkedList.getLast());
myLinkedList.insertLast(15);
console.log(myLinkedList);
myLinkedList.insertFirst(10);
console.log(myLinkedList);
myLinkedList.insertLast(46);
console.log(myLinkedList);
console.log(myLinkedList.getLast());
myLinkedList.insertLast(52);
myLinkedList.insertLast(31);
myLinkedList.insertLast(90);
console.log('end :', myLinkedList);
console.log(myLinkedList.getLast());
