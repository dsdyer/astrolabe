// Instructions:
// You are given two sorted arrays that contain only integers. Your task is to find a way to merge them into a single one, sorted in ascending order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// For Funsies:
// This is an 8kyu problem, and the 1 line answer is pretty obviously return arr1.concat(arr2).sort();
// I decided to do it without using built-in array methods, cause I wanted to play with TypeScript

function orderedIndexFactory(arr: Array<number>) {
  // takes a sorted array, returns a function that takes an index
  // and returns that element from start of arr if arr is sorted
  // ascending, otherwise returns that element from the end
  if (arr[0] <= arr[arr.length-1]) {
    return index => arr[index]; 
  } else return index => arr[arr.length - 1 - index]; 
}

function orderedSliceFactory(arr: Array<number>) {
  // takes a sorted array, returns a function that takes an index
  // and slices arr normally if arr is sorted
  // ascending, otherwise slices arr backwards
  if (arr[0] <= arr[arr.length-1]) {
    return index => {
      const sliced = [];
      while (index < arr.length) {
        sliced.push(arr[index]);
        index++;
      }
      return sliced;
    }
  } else return index => {
    const sliced = [];
    while (arr.length - 1 - index >= 0) {
      sliced.push(arr[arr.length - 1 - index]);
      index++;
    }
    return sliced;
  };
}

function mergeArrays(arr1: Array<number>, arr2: Array<number>): Array<number> {
  const sorted: Array<number> = [];
  
  let index: number = 0;
  let p1: number = 0;
  let p2: number = 0;

  const arr1AtIndex = orderedIndexFactory(arr1);
  const arr2AtIndex = orderedIndexFactory(arr2);

  const arr1orderedSlice = orderedSliceFactory(arr1);
  const arr2orderedSlice = orderedSliceFactory(arr2);

  while(p1 < arr1.length && p2 < arr2.length) {
    if (arr1AtIndex(p1) <= arr2AtIndex(p2)) {
      sorted[index] = arr1AtIndex(p1);
      p1++;
    } else {
        sorted[index] = arr2AtIndex(p2);
        p2++;
    }
    index++;
  }

  const unsorted = arr1orderedSlice(p1).concat(arr2orderedSlice(p2));
  sorted.splice(index, 0, ...unsorted);
  return Array.from(new Set(sorted));
}