// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call mergeSortedArrays(arr1, arr2)

var testArr = [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12]     99, 111, 9, 15, 49
// 88, 22
// 88

// main recursive function that will be passed in mergeSortedArrays(left, right)
// create a new sorted arr based on the given arr being recursively split and merged.
function mergeSort(arr) {
  // recursive function
  // (recursive) split arrays down to 1 element
  // then call the helper function to merge them back
  //  mergeSortedArrays(leftArr, rightArr)

  // return arrays of single values
  if (arr.length < 2) {
    return arr;
  }

  // get the middle index, floor it to prevent floats
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // mergeSortedArray called on the result of mergeSort left and right
  //                              v
  //                              88                22
  return mergeSortedArrays(mergeSort(left), mergeSort(right)); // A function call is equal to what that function returns
}



// helper function
// 👉 try solving this first! 
// return a new sorted array with all of the values of arr1 and arr2
var mergeArr2 = [55, 66];
var mergeArr1 = [33, 44];

var mergeArrA = [33, 44, 55];
var mergeArrB = [11, 66];

var arrLeft = [22];
var arrRight = [11, 33];
//                      arrLeft, arrRight
function mergeSortedArrays(arr1, arr2) {
  // setup
  let sortedArr = [];
  let leftIdx = 0;
  let rightIdx = 0;

  // check lengths of arrays
  // push to sorted array
  // return the array
  // -----------------------
  let sort = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      // shift pops from the front, not ideal.
      sort.push(arr1.shift());
    } else {
      sort.push(arr2.shift());
    }
  }

  // takes remainders and squashes them together in cases with one array
  return sort.concat(arr1.slice().concat(arr2.slice()));
}

// //steps:
//     1. create a merge function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to use a new array
//     2. create merge sort function to sort the provided array
//       - split the array into half and recursively merge the halves (run mergeSort on those 2 halves)
//       - splitting of arrays stops when array can no longer be split
//       - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array



//   useful methods
//   - var x = arr1.concat(array2, array3)
//     - combines array arg(s) with the array that concat is called on
//     - returns new arr w/o mutating originals


//   - arr.slice([begin[, end]])
//     - returns a COPY of the specified portion of the array
//     - end is exclusive
//       - if omitted, slices from provided 'begin' to end of array

// var arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
// var m = Math.floor(arr.length / 2)
// var l = arr.slice(0, m);
// var r = arr.slice(m, arr.length);



// ---------- alternative --------------
/**
 * Merges two already sorted arrays into a new sorted array.
 * - Time: O(n + m) -> O(n) linear n = left.length, m = right.length.
 *    Every item from each array is visited once.
 * - Space: O(n + m) -> O(n) linear.
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  // in case one of the arrays has remaining items due to unequal lengths, all of those can be added
  while (indexLeft < left.length) {
    result.push(left[indexLeft]);
    indexLeft++;
  }

  while (indexRight < right.length) {
    result.push(right[indexRight]);
    indexRight++;
  }

  return result;
  // one liner version of adding in any left over items
  // return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums) {
  if (nums.length === 1) {
    // return once we hit an array with a single item
    return nums;
  }

  const middleIdx = Math.floor(nums.length / 2);
  const left = nums.slice(0, middleIdx);
  const right = nums.slice(middleIdx);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

// ----------------------------

// recursion
// a function call itself 

// function a() {
//     a();
// }

// a();


// 5!
// 5*4*3*2*1

// 4!
// 4*3*2*1

// 3!
// 3*2*1

// function factorial(num) {
//     // 1. create a case base - BREAK POINT / EXIT ASAP
//     if (num === 1) {
//         return 1
//     }

//     // 2. logic
//     // num = num -1;

//     // 3. RECURSION - call the function again
//     return num * factorial(num - 1)
// }

// factorial(4);

// ----------- alt2 --------------
/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left, right) {
  let merged = []; //arr to be returned
  let lindex = 0; // index pointer for left arr
  let rindex = 0; // index pointer for right arr

  while (lindex < left.length && rindex < right.length) { //while both indices are within range of their respective arrs
    if (left[lindex] < right[rindex]) { //compare next values in each array
      merged.push(left[lindex]);  //push the lesser to our return arr
      lindex++; //move pointer down arr
    } else {
      merged.push(right[rindex]);
      rindex++;
    }
  }

  while (lindex < left.length) { //this loop handles left arr having values left over after merge
    merged.push(left[lindex]);
    lindex++;
  }
  while (rindex < right.length) { //this one handles right
    merged.push(right[rindex]);
    rindex++;
  }

  return merged; // all done!1
}
console.log(merge(sortedA1, sortedB1));
console.log(merge(sortedA2, sortedB2));
console.log(merge(sortedA3, sortedB3));
console.log(merge(sortedA4, sortedB4));

// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 8, 4, 3, 7, 10, 1, 8, 11, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums) {
  if (nums.length == 1) { //base case: an array of length 1 is sorted implicitly and can be returned to be merged 
    return nums;
  }
  let mid = Math.floor(nums.length / 2); //find mid point

  //recursive calls
  let left = mergeSort(nums.slice(0, mid)); //slice everything before mid point for left half, recursively sort left half
  let right = mergeSort(nums.slice(mid)); // and now same for the right

  return merge(left, right); //then simply merge and return our recursively sorted halves

}

console.log(mergeSort(numsOrdered));
console.log(mergeSort(numsReversed));
console.log(mergeSort(numsRandomOrder));


// -------------------------
function mergeSortedArrays(arr1, arr2) {
  let sortedArr = [];
  let a = 0;
  let b = 0;

  // while either index is less than its array's length...
  while (a < arr1.length || b < arr2.length) {
    // catches out of bounds
    if (a == arr1.length) {
      sortedArr.push(arr2[b]);
      b++;
      continue;
    } else if (b == arr2.length) {
      sortedArr.push(arr1[a]);
      a++;
      continue;
    }

    // if arr1[a] < arr2[b] push arr1[a] to sortedArr and increment the a index,
    // else do the same, but for arr2 and b index
    arr1[a] < arr2[b]
      ? (sortedArr.push(arr1[a]), a++)
      : (sortedArr.push(arr2[b]), b++);
  }

  return sortedArr;
}

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) {
    return arr;
  }

  // Slice the array in half
  let middleIdx = Math.floor(arr.length / 2);
  let arr1 = arr.slice(0, middleIdx);
  let arr2 = arr.slice(middleIdx);

  return mergeSortedArrays(mergeSort(arr1), mergeSort(arr2));
}

// ==============
function mergeSortedArrays(arr1, arr2) {
  // setup
  let sortedArr = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < arr1.length && rightIdx < arr2.length) {
    if (arr1[leftIdx] <= arr2[rightIdx]) {
      sortedArr.push(arr1[leftIdx]);
      leftIdx++;
    } else {
      sortedArr.push(arr2[rightIdx]);
      rightIdx++;
    }
  }
  while (leftIdx < arr1.length) {
    sortedArr.push(arr1[leftIdx]);
    leftIdx++;
  }
  while (rightIdx < arr2.length) {
    sortedArr.push(arr2[rightIdx]);
    rightIdx++;
  }
  return sortedArr;

}
console.log(mergeSortedArrays(mergeArrA, mergeArrB));

var testArr = [88, 22, 44, 12, 99, 111, 9, 15, 49];

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return mergeSortedArrays(mergeSort(left), mergeSort(right));
}
console.log(mergeSort(testArr));

// ----- succinct ---
function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }
  var midex = Math.floor(arr.length / 2);
  return mergeSortedArrays(mergeSort(arr.slice(0, midex)), mergeSort(arr.slice(midex)));
}

function mergeSortedArrays(left, right) {
  let sortedArr = [];
  while (left.length > 0 && right.length > 0) {
    left[0] < right[0]
      ? sortedArr.push(left.shift())
      : sortedArr.push(right.shift());
  }
  return sortedArr.concat(left).concat(right);
}

// =================
function mergeSortedArrays(arr1, arr2) {
  let sortedArray = [];
  let l = 0;
  let r = 0;

  while (arr1.length > l && arr2.length > r) {
    if (arr1[l] < arr2[r]) {
      sortedArray.push(arr1.shift());
    } else {
      sortedArray.push(arr2.shift());
    };
  };
  return [...sortedArray, ...arr1, ...arr2];
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return mergeSortedArrays(
    mergeSort(left),
    mergeSort(right)
  );
}

console.log(mergeSort(testArr));

// ====================
var testArr = [88, 22, 44, 12, 99, 111, 9, 15, 49];

function mergeSort(arr) {
  // 1, split the array down to 1
  // call the merge mergeSortedArrays(left right)
  if (arr.length === 1) {
    return arr;
  }

  let halfpoint = Math.floor((arr.length) / 2);
  let leftArray = mergeSort(arr.slice(0, halfpoint));


  let rightArray = mergeSort(arr.slice(halfpoint));


  return mergeSortedArrays(leftArray, rightArray);
}
console.log(mergeSort(testArr));



// helper function
// 👉 try solving this first! 
// return a new sorted array with all of the values of arr1 and arr2
var mergeArr2 = [55, 66];
var mergeArr1 = [33, 44];

var mergeArrA = [33, 44, 55];
var mergeArrB = [11, 66];

var arrLeft = [22];
var arrRight = [11, 33];
//                      arrLeft, arrRight
function mergeSortedArrays(arr1, arr2) {

  // setup
  let sortedArray = [];
  let leftIDX = 0;
  let rightIDX = 0;
  let endIDX = arr1.length + arr2.length;
  for (var i = 0; i < endIDX; i++) {

    if (arr1[leftIDX] < arr2[rightIDX]) {
      sortedArray.push(arr1[leftIDX]);
      arr1.shift();
    }
    if (arr2[rightIDX] < arr1[leftIDX]) {
      sortedArray.push(arr2[rightIDX]);
      arr2.shift();
    }
    if (arr1.length < 1) {
      sortedArray.push(...arr2);
      break;
    }
    if (arr2.length < 1) {
      sortedArray.push(...arr1);
      break;
    }
  }
  return sortedArray;
}