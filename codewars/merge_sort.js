// https://www.codewars.com/kata/merge-two-sorted-arrays-into-one/javascript
// Instructions:
// You are given two sorted arrays that contain only integers. Your task is to find a way to merge them into a single one, sorted in ascending order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
// This is an 8-kyu kata, and the 1 line solution is pretty obvious with sort, concat, and Set.
// For Funsies, I decided to do it without using built-in array methods
function orderedIndexFactory(arr) {
    if (arr[0] <= arr[arr.length - 1]) {
        return index => arr[index];
    }
    else
        return index => arr[arr.length - 1 - index];
}
function orderedSliceFactory(arr) {
    if (arr[0] <= arr[arr.length - 1]) {
        return index => {
            const sliced = [];
            while (index < arr.length) {
                sliced[sliced.length] = arr[index];
                index++;
            }
            return sliced;
        };
    }
    else
        return index => {
            const sliced = [];
            while (arr.length - 1 - index >= 0) {
                sliced[sliced.length] = arr[arr.length - 1 - index];
                index++;
            }
            return sliced;
        };
}
function mergeArrays(arr1, arr2) {
    // these are array access methods that index normally if the array is sorted lowest to highest,
    // and index backwards from the end of the array if sorted highest to lowest
    const arr1AtIndex = orderedIndexFactory(arr1), arr2AtIndex = orderedIndexFactory(arr2), arr1orderedSlice = orderedSliceFactory(arr1), arr2orderedSlice = orderedSliceFactory(arr2);
    const sorted = [];
    // current next index in the sorted array,
    // pointers to the next unsorted number in each array
    let index = 0, p1 = 0, p2 = 0;
    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1AtIndex(p1) <= arr2AtIndex(p2)) {
            if (sorted[index - 1] !== arr1AtIndex(p1)) {
                sorted[index] = arr1AtIndex(p1);
                index++;
            }
            ;
            p1++;
        }
        else {
            if (sorted[index - 1] !== arr2AtIndex(p2)) {
                sorted[index] = arr2AtIndex(p2);
                index++;
            }
            ;
            p2++;
        }
    }
    const arr1Unsorted = arr1orderedSlice(p1);
    const arr2Unsorted = arr2orderedSlice(p2);
    for (let num of arr2Unsorted) {
        if (arr1Unsorted[arr1Unsorted.length - 1] !== num)
            arr1Unsorted[arr1Unsorted.length] = num;
    }
    for (let num of arr1Unsorted) {
        if (sorted[sorted.length - 1] !== num)
            sorted[sorted.length] = num;
    }
    return sorted;
}
