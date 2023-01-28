class Node {
  constructor(data) {
    this.data = data;
    this.right = null; // Pointer to right side of the tree
    this.left = null; // Pointer to left side of the tree
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        console.log('currentNode at start', currentNode);
        if (data < currentNode.data) {
          // Go left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
          console.log('currentNode with left', currentNode);
        } else {
          // GO right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
          console.log('currentNode with right', currentNode);
        }
      }
    }
  }
  lookup(data) {}
}

const myTree = new BinarySearchTree();

function traverse(node) {
  const tree = { value: node.data };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

myTree.insert(9);
myTree.insert(4);
myTree.insert(6);
myTree.insert(20);
myTree.insert(170);
myTree.insert(15);
myTree.insert(1);
console.log(JSON.stringify(traverse(myTree.root)));
