
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let indexOfMin = i;
  
      for (let j = i+1; j < arr.length; j++) {
        if (arr[j] < arr[indexOfMin]) {
          indexOfMin = j;
        }
      }
  
      if (indexOfMin !== i) {
        let lesser = arr[indexOfMin];
        arr[indexOfMin] = arr[i];
        arr[i] = lesser;
      }
    }
  
    return arr;
  }

  selectionSort(numbers)
  console.log(numbers);