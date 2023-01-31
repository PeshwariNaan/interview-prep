//Create a recursive algorithm to calculate the factorial of a number(n)
// RTC of recursive solution - O(n)

function facRec(num) {
  if(num === 2){
    return 2
  }

  return num * facRec(num -1)
}

//Create a iterative algorithm to calculate the factorial of a number(n)
// RTC of iterative solution - O(n)

function facIt(num) {
  let answer = 1;
  if (num === 2) {
    answer = 2;
  }
  for (i = 2; i <= num; i++) {
    answer = answer * i;
  }
  return answer;
}

console.log(facRec(5));
