// Rotate the array to the right by k times - k must be a postive integer

const arr1 = [1, 2, 3, 4, 5];

//Brute force method - Because the unshift method is O(n) which is nested in the for loop we get RTC O(n^2)
const rotateArray = (nums, k) => {
  k = k % nums.length;
  console.log('5 % 2: ', 5.3 % 2);
  console.log('k: ', k);
  for (let i = 0; i < k; i++) {
    const back = nums.pop();
    nums.unshift(back);
  }
  return nums;
};


//This solution uses an extra array so the SC is linear O(n) and the RTC is also O(n)
const rotateArray1 = (nums, k) => {
  k = k % nums.length;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr[(i + k) % nums.length] = nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = arr[i];  //We want to mutate the original array so we run a second loop
  }
  return nums;
};


//Looks complicated but it's not bad
const rotateArray2 = (nums, k) => { 
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);  //Step 1 - Reverse whole array
  console.log('reverse 1: ', nums);
  reverse(nums, 0, k - 1);
  console.log('reverse 2: ', nums); //Step 2 - reverse from 0 to k-1
  reverse(nums, k, nums.length - 1);
  console.log('reverse 3: ', nums); //Step 3 - Reverse from k to nums.length - 1 (Other part of the array)
  return nums;

  function reverse(nums, start, end) {
    while (start < end) {
      let temporary = nums[start];
      nums[start] = nums[end];
      nums[end] = temporary;
      start++;
      end--;
    }
    return nums;
  }
};

console.log(rotateArray2(arr1, 2));
