const array1 = ['a', 's', 'c', 'd'];
const array2 = ['x', 'y', 'z', 's', 'r'];

//Brute force method
const containsCommonItems1 = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
};

const containsCommonItems2 = (arr1, arr2) => {
  //Solution is better than brute force
  //Loop through first array and create object
  //where properties === items in the array
  let map = {}; //Create empty object
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i]; //the value of the array at i - this will be the key in the map
      console.log(item)
      map[item] = true; //setting value to true
      console.log(map[item])
    }
  }
  //loop through second array and check if item in
  //second array exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}; //This solution RTC is O(n) but heavier with space complexity => O(a) because we are creating an object

//Solution using built in methods for better readability
const containsCommonItems3 = (arr1, arr2) => {
  return arr1.some((item) => arr2.includes(item));
};



console.log(containsCommonItems2(array1, array2));
