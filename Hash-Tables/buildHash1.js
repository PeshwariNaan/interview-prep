class HashTable {
  constructor(size) {
    this.data = new Array(size);
    // this.data = [];
  }

  _hash(key) {
    //This is a private property to this particular class( Not truly private but it lets us know it should be with the _underscore)
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      //console.log('charCodeAt :', key.charCodeAt(i) * i);
      console.log('hash', hash);
    }
    console.log('final hash', hash);
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    console.log('this.data :', this.data);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    console.log('currentBucket :', currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          //The arrays are just key value pairs with the key being in the [i][0] position
          return currentBucket[i][1]; //This returning the value for the key we inputed
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        console.log(this.data[i][0][0]);
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }

  values() {
    const valuesArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        console.log(this.data[i][0][1]);
        valuesArray.push(this.data[i][0][1]);
      }
    }
    return valuesArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');
myHashTable.set('apples', 9);
//console.log(myHashTable.get('apples'));
//console.log(myHashTable.keys());
console.log(myHashTable.values());
