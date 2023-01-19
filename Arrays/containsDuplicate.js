const numArr = [1, 2, 4, 6, 7, 9];
const numArr1 = [1, 3, 8, 5, 6, 7, 3];

//Brute force method
const containsDuplicate = (nums) => {
  for (i = 0; i < nums.length; i++) {
    console.log('i = ', i);
    for (j = i + 1; j < nums.length; j++) {
      console.log('j = ', j);
      console.log('nums[i]', nums[i]);
      console.log('nums[j]', nums[j]);
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

//Better solution with linear RTC O(n) but here we have a SC of O(n) because we are using a map(object)
const containsDuplicate1 = (nums) => {
  obj = {};
  for (i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      return true;
    } else {
      obj[nums[i]] = true;
      console.log(obj);
    }
  }
  return false;
};

console.log(containsDuplicate(numArr1));
