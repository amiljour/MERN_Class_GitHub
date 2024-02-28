/* 
 ██╗ ██╗ 
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝ 
         
    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 '#' character means a 'backspace' character.
    i.e., after processing the backspaces, are the two strings equal?
    return true or false
    Ninja Bonus: solve in O(n) time
*/

// ad#clp
// aclp

//          v
const S1 = "ab#c";
// a -> ab -> a -> ac
//          v
const T1 = "ad#c";
// a -> ad -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

//             v
const S2 = "ab##";
// ["a", "b"]
// "str1"
// a -> ab -> a -> ""

const T2 = "c#d#";
// []
// "str2"
// c -> "" -> d -> "" 
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
// a -> "" -> "" -> c
const T3 = "#a#c";
// "" -> a -> "" -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
// a -> "" -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".


// onsite-
function backSpace(s1, s2) {
    i = 0;
    j = 0;
    while (i < s1 & j < s2) {
        if (s1[i] == "#") {
            s1.slice(i - 1, i);
        }
        if (s2[i] == "#") {
            s1.slice(i - 1, i);
        }
    }
    return s1 === s2;
}
s11 = "a3jjd#fe#";
s21 = "a3jjd##fe#";
console.log(backSpace(s11, s21));

function backspaceStringCompare(S, T) {

    const backspacedStack1 = [];
    const backspacedStack2 = [];

    for (const char of S) {
        if (char !== "#") {
            backspacedStack1.push(char);
        } else if (backspacedStack1.length > 0) {
            backspacedStack1.pop();
        }
    }

    for (const char of T) {
        if (char !== "#") {
            backspacedStack2.push(char);
        } else if (backspacedStack2.length > 0) {
            backspacedStack2.pop();
        }
    }

    if (backspacedStack1.length !== backspacedStack2.length) {
        return false;
    }

    for (let i = 0; i < backspacedStack1.length; i++) {
        if (backspacedStack1[i] !== backspacedStack2[i]) {
            return false;
        }
    }
    return true;
}

//--------- D ------------
function backspaceStringCompare2(S, T) {
    return removeBackspace(S) == removeBackspace(T);
}

function removeBackspace(str) {
    let output = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "#") {
            output = output.substring(0, output.length - 1);
        } else {
            output += str[i];
        }
    }
    return output;
}
//   ---------------- TA -------------
function backspaceStringCompare3(S, T) {
    return parseBackSpace(S) == parseBackSpace(T); // return simple comparison call to our helper function
}

function parseBackSpace(string) { //helper function -- Where the logic lives!
    let skip = 0; // count of how many characters to skip
    let parsed = "";
    for (let i = string.length - 1; i >= 0; i--) { //iterate BACKWARDS through string
        if (string[i] == "#") { // if current letter is a backspace, increase number of letters to skip
            skip++;
        } else { //if current letter is NOT a backspace
            if (skip == 0) { //if we don't need to skip any letters
                parsed = string[i] + parsed; //add current letter to parsed string (in reverse order)
            } else if (skip > 0) { //if we need to skip any, 
                skip--; //decrement skip and do nothing else
            }
        }
    }
    return parsed;
}
// -------------MA--------------
function backspaceStringCompare4(S, T) {
    let newS = [];
    let newT = [];
    let i = 0;
    while (i < S.length || i < T.length) {
        (S[i] !== "#") ? newS.push(S[i]) : newS.pop();
        (T[i] !== "#") ? newT.push(T[i]) : newT.pop();
        i++;
    }
    let output = (JSON.stringify(newS) === JSON.stringify(newT)) ? true : false;
    return output;
}
// ---------------------------

function backspaceStringCompare5(S, T) {

    for (let i = 0; i < T.length; i++) {
        if (T[i] === '#') {
            tArr.pop();
        } else {
            tArr.push(T[i]);
        }
    }

    // sArr = sArr.join('');
    // tArr = tArr.join('');
    sArr = sArr.toString();
    tArr = tArr.toString();

    console.log(sArr);
    console.log(tArr);
    return tArr === sArr;
}
// -------------------

console.log(backspaceStringCompare(S1, T1));
console.log(backspaceStringCompare(S2, T2));
console.log(backspaceStringCompare(S3, T3));
console.log(backspaceStringCompare(S4, T4));

// ===========
function backspaceStringCompare(S, T) {
    const stringS = [];
    const stringT = [];
    for (const char of S) {
        if (char !== "#") {
            stringS.push(char);
        } else {
            stringS.pop();
        }
    }
    for (const char of T) {
        if (char !== "#") {
            stringT.push(char);
        } else {
            stringT.pop();
        }
    }
    return stackS.join("") === stackT.join("");
}

// =========
function backspaceStringCompare(S, T) {
    let string1 = [];
    let string2 = [];

    for (let i = 0; i < S.length; i++) {
        if (S[i] == "#") {
            string1.pop();
        } else {
            string1.push(S[i]);
        }
    }

    for (let j = 0; j < T.length; j++) {
        if (T[j] == "#") {
            string2.pop();
        } else {
            string2.push(T[j]);
        }
    }

    return string1.join("") === string2.join("");
}
// ==== 1 for loop ====
function backspaceStringCompare(S, T) {
    let tempT = [];
    let tempS = [];
    for (let i = 0; i < T.length || i < S.length; i++) {
        if (T[i] != "#" && i < T.length) {
            tempT.push(T[i]);
        }
        else if (tempT.length > 0 && T[i] == "#") {
            tempT.pop();
        }
        if (S[i] != "#" && i < S.length) {
            tempS.push(S[i]);
        }
        else if (tempS.length > 0 && S[i] == "#") {
            tempS.pop();
        }
        console.log(i, "idxxxxxxxxxxxx");
    }
    console.log(tempT, tempS);
    if (tempT.toString() == tempS.toString()) {
        return true;
    }
    return false;
}


// ==============
function backspaceStringCompare(S, T) {
    let stringS = [];
    let stringT = [];
    var j = 0;
    var i = 0;
    while (i < S.length || j < T.length) {
        if (i < S.length && S[i] === "#") {
            stringS.pop();
            i++;
        } else if (j < T.length && T[j] === "#") {
            stringT.pop();
            j++;
        } else {
            if (i < S.length) {
                stringS.push(S[i]);
            }
            if (j < T.length) {
                stringT.push(T[j]);
            }
            i++;
            j++;
        }
    }
    return JSON.stringify(stringT) === JSON.stringify(stringS);
}

//---------------------

console.log(backspaceStringCompare(S1, T1));
console.log(backspaceStringCompare(S2, T2));
console.log(backspaceStringCompare(S3, T3));
console.log(backspaceStringCompare(S4, T4));

// =================
function rehashString(S) {
    let i = 0;
    while (S[i] != undefined) {
        if (S[i] === '#') {
            if (S[i - 1] == undefined) {
                S = S.substr(i + 1);
            } else {
                S = S.substr(0, i - 1) + S.substr(i + 1);
                i--;
            }
        } else {
            i++;
        }
    }
    return S;
}

function backspaceStringCompare(S, T) {
    return rehashString(S) === rehashString(T);
}

// ===== ta ========
function backspaceStringCompare(S, T) {
    // create an empty array for each string
    sArr = [];
    tArr = [];

    // determine which string is longer, for the for loop
    let loopLen = S.length > T.length ? S.length : T.length;

    // for loop over both strings simultaneously
    for (let i = 0; i < loopLen; i++) {
        // if the current value is a "#", remove the last element in the array
        if (S[i]) {
            if (S[i] === '#') {
                sArr.pop();
            } else if (S[i].match(/[a-z]/)) {
                // if the value is a letter, push it into the array
                sArr.push(S[i]);
            }
        }

        // if the current value is a "#", remove the last element in the array
        if (T[i]) {
            if (T[i] === '#') {
                tArr.pop();
            } else if (T[i].match(/[a-z]/)) {
                // if the value is a letter, push it into the array
                tArr.push(T[i]);
            }
        }
    }

    // compare the two arrays
    loopLen = sArr.length > tArr.length ? sArr.length : tArr.length;

    for (let i = 0; i < loopLen; i++) {
        if (sArr[i] !== tArr[i]) {
            // if a mismatch is found, return false
            return false;
        }
    }

    // if no mismatches were found, return true
    return true;
}

// ===========
function backspaceStringCompare(S, T) {
    const arr1 = [];
    const arr2 = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] != "#") {
            arr1.push(S[i]);
        } else {
            arr1.pop();
        }
    }
    for (let j = 0; j < T.length; j++) {
        if (T[j] != "#") {
            arr2.push(T[j]);
        } else {
            arr2.pop();
        }
    }
    return arr2.toString() == arr1.toString();
}

// ------- 🐀 --------
function characterCount(str) {
    const hashMap = {};

    for (const char of str) {
        hashMap.hasOwnProperty(char) ? hashMap[char]++ : (hashMap[char] = 1);
    }
    return hashMap;
}

function oddElementTest(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) count++;
    }
    return count;
}

function canBecomePalindrome(str) {
    if (!str.length) return false; //* edge case for empty string

    characterMap = characterCount(str); //* (helper function) generate hashMap of occurence of each character

    const oddCount = oddElementTest(Object.values(characterMap)); //* (helper function) find number of odd values in a hashMap

    //* return based on # of odd values
    if (str.length % 2 === 0) {
        return oddCount > 0 ? false : true;
    }
    return oddCount === 1;
}

// -----------------------
function backspaceStringCompare(S, T) {
    let temp = "";
    let temp2 = "";
    for (letter of S) {
        if (letter == "#") {
            temp = temp.slice(0, temp.length - 1);
        }
        else {
            temp = temp.concat(letter);
        }
    }
    for (letter of T) {
        if (letter == "#") {
            temp2 = temp2.slice(0, temp2.length - 1);
        }
        else {
            temp2 = temp2.concat(letter);
        }
    }
    return (temp === temp2);
}

function gigaBrainBackspaceStringCompare(S, T) {
    let temp = [];
    let temp2 = [];
    let something = S.split("");
    let something2 = T.split("");
    for (letter of something) {
        if (letter == "#") {
            temp.pop();
        } else {
            temp.push(letter);
        }
    }
    for (letter of something2) {
        if (letter == "#") {
            temp2.pop();
        } else {
            temp2.push(letter);
        }
    }
    return (temp.toString() === temp2.toString());
}

function compare(str) {
    // Create an empty array variable
    const emptyArr = [];

    //create a for of loop to iterate over each character in the string
    for (const char of str) {

        //Create an if statement saying if the character in the string is equal to # and the emptyarr length is more the zero, pop the character
        if (char === "#" && emptyArr.length > 0) {
            emptyArr.pop();

            // Create an else if statement saying that if the character in the string is not equal to # push that character into the empty array variable
        } else if (char !== "#") {
            emptyArr.push(char);
        }
    }

    // return the empty array variable and use the .join method to return combine the character and return the array as a string
    return emptyArr.join("");
}

// Compare the first string to the second string
return compare(S) === compare(T);