//Doubly linked list

class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
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
      const newNode = new Node(data);
      last.next = newNode;
      // console.log('last.next :', last.next);
      newNode.prev = last;
      //console.log('newNode.prev :', newNode.prev);
      this.last = newNode;
      //console.log('this.last :', this.last);
    } else {
      this.head = new Node(data);
    }
  }

  insertAt(data, index) {
    if (!this.head) {
      //If there is no head then we assign the node to head
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      //If index is 0 then we again assign the node to be the head
      const newNode = new Node(data, this.head);
      if (this.head) {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        return;
      } else {
        this.head = newNode; // In Node(data, this.head) - the this.head is the current node at head and will now be next for the new node
        return;
      }
    }
    const prevNode = this.getAt(index - 1) || this.getLast(); //Check if the index is out of bounds and assign to last
    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
    newNode.prev = prevNode;
    if (newNode.next) {
      const nextNode = newNode.next;
      nextNode.prev = newNode;
      console.log('nextNode.previous: ', nextNode.prevNode);
    }
    //console.log('previous.next 2 :', previous.next);
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      let nextNode = this.head.next;
      this.head = nextNode;
      nextNode.prev = null;
      return;
    }
    const prevNode = this.getAt(index - 1);
    if (!prevNode || !prevNode.next) return;
    prevNode.next = prevNode.next.next;
    prevNode.next.prev = prevNode;
  }

  printList() {
    const array1 = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array1.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return array1;
  }
}

const myLinkedList = new DoublyLinkedList();

myLinkedList.insertLast(5);
myLinkedList.insertLast(90);
myLinkedList.insertFirst(2);
myLinkedList.insertAt(42, 1);
console.log(myLinkedList);
console.log('myLinkedList.getAt(1): ', myLinkedList.getAt(1));
myLinkedList.insertFirst(666);
console.log(myLinkedList);
console.log('myLinkedList.getAt(1): ', myLinkedList.getAt(1));
console.log(myLinkedList.printList());

myLinkedList.removeAt(1);
console.log(myLinkedList.printList());
console.log(myLinkedList);
console.log('myLinkedList.getAt(1): ', myLinkedList.getAt(1));
