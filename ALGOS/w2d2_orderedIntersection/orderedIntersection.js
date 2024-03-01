/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/
//! do not use Set()

const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
  //! write the PSEUDOCODE first!
  // learning to write good
  // pseudocode is just as
  // important as learning to write
  // actual code, even if it might
  // feel like an unnecessary step at
  // times
}

orderedIntersection(arrA1, arrB1);



/**
 * this is a cool function!
 * @param {String} name 
 * @returns String
 */
function doStuff(name) {
  return "hello " + name;
}














// ===================================
function orderedIntersection(sortedA, sortedB) {
  // the 2 arrays are sorted!
  //  create indexA and indexB for each array
  //  start them at 0
  // ...

}

orderedIntersection(arrA1, arrB1);






























/**
 * hey check this function out!!! 👀
 * 
 * @param {String} name 
 * @returns string
 * @date 2023-05-09
 * @author Bob
 * 
 */
function hello(name) {
  return "hello " + name;
}

/**
 * this is a var!!!
 */
const x = 3;