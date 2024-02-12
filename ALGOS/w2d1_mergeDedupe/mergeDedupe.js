// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

var arr1 = [1, 3, 3, 5, 8, 10,];
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];
//output = [1, 3, 5, 8, 10]

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];
//output = [1, 3, 4, 5, 8, 10]

// 1. DRIVER 🚗
// 2. PRESENTER 🧑‍🏫
// 3. NAVIGATOR 🧭

// RIOT

// create a function that takes 2 sorted arrays
function mergeDedupe(arr1, arr2) {
    //! write the pseudocode first!
    //1. create a temp var for our output array
    //2. ....
    //. return the output array
    //! do not use Set()
}

// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]); // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6]); // [1, 2, 3, 4, 5, 6, 8, 10, 12]


















//   a -> 
//     [1, 3, 3, 5, 8, 10]
//   b
//     [1, 3, 4, 5]























// ============================
// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//                              a
var arr1 = [1, 3, 3, 5, 8, 10,];
//                              b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];
// [1, 3, 5, 8, 10]

//                   i
var arrA = [1, 3, 4, 5];
//                   j
var arrB = [1, 3, 3, 5, 8, 10,];
// [1, 3, 4]

// 1. DRIVER 🚗
// 2. PRESENTER 🧑‍🏫
// 3. NAVIGATOR 🧭
function mergeDedupe(arr1, arr2) {
    // pseudocode
}

// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]); // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6]); // [1, 2, 3, 4, 5, 6, 8, 10, 12]

//   a ->
//     [1, 3, 3, 5, 8, 10]
//   b
//     [1, 3, 4, 5]