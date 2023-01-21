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
      //If there is no head then we assign the node to head
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      //If index is 0 then we again assign the node to be the head
      this.head = new Node(data, this.head); // In Node(data, this.head) - the this.head is the current node at head and will now be next for the new node
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast(); //Check if the index is out of bounds and assign to last
    //console.log('previous :', previous);
    //console.log('previous.next :', previous.next);
    const node = new Node(data, previous.next);
    previous.next = node;
    //console.log('previous.next 2 :', previous.next);
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) return;
    previous.next = previous.next.next;
  }

  reverse() {
    if (!this.head) return;
    if (!this.head.next) {
      return this.head;
    }

    let curr = this.head;
    let nxt = curr.next;
    while (nxt) {
      console.log('nxt ::', nxt);
      let temp = nxt.next;
      console.log('temp ::', temp);
      nxt.next = curr;
      console.log('nxt.next ::', nxt.next);
      curr = nxt;
      console.log('curr ::', curr);
      nxt = temp;
      console.log('nxt ::', nxt);
    }
    this.head.next = null;
    this.head = curr;
  }

  reverse1() {
    if (!this.head) return;
    if (!this.head.next) {
      return this.head;
    }

    let nodePrev = null;
    let nodeCurr = this.head;
    let nodeNext = null;
    while (nodeCurr !== null) {
      nodeNext = nodeCurr.next;
      console.log('nodeNext ::', nodeNext);
      nodeCurr.next = nodePrev;
      console.log('nodeCurr.next ::', nodeCurr.next);
      nodePrev = nodeCurr;
      console.log('nodePrev ::', nodePrev);
      nodeCurr = nodeNext;
      console.log('nodeCurr ::', nodeCurr);
    }
    this.head.next = null;
    this.head = nodeCurr;
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

module.exports = { Node, LinkedList };

// const myLinkedList = new LinkedList();
// myLinkedList.insertFirst(4);
// myLinkedList.insertFirst(3);
// myLinkedList.insertFirst(2);
// myLinkedList.insertFirst(1);
// console.log(myLinkedList.printList());
// myLinkedList.reverse();
// console.log(myLinkedList.printList());
// console.log('getAt(5) :', myLinkedList.getAt(5));
// console.log('getAt(0) :', myLinkedList.getAt(0));
