//Arrays in js are objects with integer based keys that act as indexes

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItems(index);
    console.log('this is the item',item)
    return item;
  }
  shiftItems(index) {
    //Takes care of the job of shifting items when deleting an item at some index
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]; //Shifts the array items to the left by one
      console.log(this.data)
    }
    console.log(this.data[this.length - 1]); //We still need to get rid of the last item in the array because it still exists
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
console.log('newArray', newArray);

const myArray = new MyArray();
myArray.push('hi');
myArray.push('you');
//myArray.push('!');
//myArray.pop();
//myArray.deleteAtIndex(0);
myArray.push('are');
myArray.push('nice');
console.log('before',myArray);
myArray.shiftItems(0);
console.log('after shift',myArray);
