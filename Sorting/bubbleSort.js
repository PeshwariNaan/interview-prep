// Implement a bubble sort

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(arr) {
    // Implement bubblesort
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < (arr.length - i - 1); j++) {
        if (arr[j] > arr[j+1]) {
          const lesser = arr[j+1];
          arr[j+1] = arr[j];
          arr[j] = lesser;
        }
      }
    }
  
    // return the sorted array
    return arr;
  }

bubbleSort(numbers);
console.log(numbers);