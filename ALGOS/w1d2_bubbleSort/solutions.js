// bubbleSort()
/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
    -> Assume there are no duplicates
*/

// the following is incorrect way because it is comparing i - outer loop with inner loop
function bubbleSimple(nums) {
    // loop over every element
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                var temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
}

const nums1 = [5, 3, 4, 2, 1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(nums) {
    let isSorted = false; // flag to check if things are sorted or not.

    while (isSorted === false) { // we want to run the bubble sorting as long as our flag says the array is not yet sorted
        isSorted = true; // we'll flip the flag to true, as default 

        for (let i = 0; i < nums.length - 1; i++) { // length - 1 bc we set j to i+1
            const j = i + 1; // check value at the current index with the value at the next index

            if (nums[i] > nums[j]) { // if the current index's value is ( > ) greater than the next value
                isSorted = false; // flip the flag
                // swap
                const temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    console.log(nums);
    return nums; // by this time it's sorted
}

function bubbleSort2(arr) {
    var len = arr.length; // fix the length
    for (var i = 0; i < len; i++) { // loop over every element
        for (var j = 0; j < len - i - 1; j++) { // go no further than length -i
            // compare and classic swap
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
    // return the given array
    return arr;
}

function bubbleSort3(nums) {
    let isSorted = false; //assume array isn't sorted to start
    let stop = 0; // this will keep track of how many values we have floated to the end
    while (!isSorted) { // if our array isn't sorted, start bubbling
        isSorted = true; // will stay true if we don't do any swaps
        for (let i = 0; i < nums.length - 1 - stop; i++) { // iterate through the array
            if (nums[i] > nums[i + 1]) { // if the next value is smaller than the current value
                isSorted = false; // flag that we are still floating values, and therefore not done sorting
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]; // perform swap
            }
        }
        stop++; // increase stop amount because we floated one value to it's correct position
    }

    return nums;
}

// call the function and pass nums1, nums2, nums3
bubbleSort(nums2);


function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sorted = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                sorted = true;
            }
        }
        console.log(arr);
        if (!sorted) break;
    }
    console.log(arr);
    return arr;
}
bubbleSort([5, 3, 4, 2, 1]);

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("i-loop--------------- i:", i, "arr[i]:", arr[i]);
        for (let j = 0; j < arr.length; j++) {
            console.log("j-loop: j:", j, "j+1:", arr[j + 1]);
            //compare next value with current value
            if (arr[j] > arr[j + 1]) {
                //if current val greater, swap with next 
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
        console.log(arr);
    }
    console.log(arr);
    return arr;
}
bubbleSort([5, 3, 4, 2, 1]);

// clever, but technically incorrect as we are not utilizing a double loop for this solution
function bubble(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            i -= 2;
        } else {
            continue;
        }
    }
    console.log(arr);
    return arr;
}

bubble([5, 3, 4, 2, 1]);

// functional way
function builtInSort(numbers) {
    return numbers.sort((a, b) => a - b);
}
console.log(
    builtInSort([5, 3, 4, 2, 1])
);

const bubbleSort = (nums) => {
    var i, j, temp; // variables for loop
    for (i = 0; i < nums.length; i++) { // loop through every element in the array 
        for (j = 0; j < nums.length - i - 1; j++) { // for every one element loop through the array 
            if (nums[j] > nums[j + 1]) { //if value at nums[j] is greater than the value +1
                temp = nums[j]; //we assign the temp variable to the value of nums[j]
                nums[j] = nums[j + 1]; // nums[j] now becomes the value of the next value in the array
                nums[j + 1] = temp; //resetting the temp value to the value of the next number in the array 
            }
        }
    }
    return nums; //return the sorted array
};


function bubblesort(array) {
    let length = array.length - 1;
    let swapped;

    do {
        swapped = false;
        for (let j = 0; j < length; j++) {
            if (array[j] > [array[j + 1]]) {
                swap(array, j);
                swapped = true;
            }
        }
    } while (swapped);

    return array;
}

function swap(array, index) {
    const temp = array[index];
    array[index] = array[index + 1];
    array[index + 1] = temp;
}


// solution 1
function bubbleSort(nums) {
    // temp variable to hold a number during a swap
    let tempVar;
    let swapCount = 0;
    // first loop with goes through entire array
    for (let i = 0; i < nums.length - 1; i++) {
        // first loop with goes through entire array
        for (let j = 0; j < nums.length - 1; j++) {
            // if curr char is larger than char to right then swap them
            if (nums[j] > nums[j + 1]) {
                tempVar = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = tempVar;
                swapCount++;
            }
        }
    }
    console.log(swapCount);
    return nums;
}

// solution 2
function bubbleSort(nums) {
    let tempVar;
    // declare a boolean that checks if swaps are needed, incase the array is already sorted
    let swapped;
    do {
        swapped = false;
        for (let j = 0; j < nums.length - 1; j++) {
            // if curr char is larger than char to right then swap them
            if (nums[j] > nums[j + 1]) {
                tempVar = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = tempVar;
                // if no swap is done then swapped will be false and the loop wont run again
                swapped = true;
            }
        }
    } while (swapped);
    //   if array is sorted we stop iterating
    return nums;
}



function bubbleSort(nums) {
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    return nums;
}
console.log(
    bubbleSort([5, 3, 4, 2, 1])
);