//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.
numbers = [1, 3, 5, 7, 4, 8];

var twoSum = function (nums, target) {
  //This solution has a high RTC of O(n^2)
  // Loop through the numbers
  for (let i = 0; i < nums.length; i++) {
    // Determine the complement (required number) for the current number
    const complement = target - nums[i];

    // Loop through the array again
    for (let j = 0; j < nums.length; j++) {
      // Check if the current number is the first number's complement (and is not the same as the first number)
      if (j != i && nums[j] == complement) {
        // Return both indicies
        return [i, j];
      }
    }
  }
};

//Solution using map
var twoSum2 = function (nums, target) {
  const myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let valueToTarget = target - nums[i];
    console.log('valueToTarget', valueToTarget);
    if (myMap.has(nums[i])) {
      console.log('myMap', myMap);
      //If 
      return [myMap.get(nums[i]), i];
    } else {
      console.log('items put into myMap', valueToTarget, i);
      myMap.set(valueToTarget, i);
    }
  }
};

//Solution using hashmaps
var twoSum3 = function (nums, target) {
  // Initialise a map to store the first run of numbers
  const hash = {};

  // Loop through the numbers
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement required for the current number
    const complement = target - nums[i];

    // Check if the complement exists in the hash
    if (hash.hasOwnProperty(complement)) {
      // If so, return the current number and its complement
      return [i, hash[complement]];
    } else {
      // Otherwise, add the current number to the hash
      hash[nums[i]] = i;
    }
  }
};

console.log(twoSum2(numbers, 12));
