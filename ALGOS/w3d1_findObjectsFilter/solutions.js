// findObjectsFilter(searchFor, itemsArr)

// given a {search for} object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

// db.ninjas.find({firstName: "Bob"})
const searchFor1 = {
    firstName: "Bob",
    age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    // { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

// ---------------------------------------

// == test ==
function findObjectsFilter(searchObj, items) {
    outputArr = [];
    for (let item of items) {
        let flag = true;
        // console.log(item)
        for (let key in searchObj) {
            if (Object.hasOwn(item, key) == true) {
                if (item[key] != searchObj[key]) {
                    flag = false;
                    break;
                }
            }
        }
        if (flag == true) {
            outputArr.push(item);
        }
    }
    console.log(outputArr);
    return outputArr;
}

findObjectsFilter(searchFor1, items);
// == test ==

function findObjectsFilter(searchObj, items) {
    let filtered = [];  // arr to return
    for (let obj of items) { //loop over all objects in items
        let match = true; // assume object matches until we know it doesn't
        for (let key in searchObj) { //for each key in our search object
            if (searchObj[key] != obj[key]) { //see if the current obj has the same value as the searchObj at that key
                match = false; // if not, not a match
                break; // no need to check further keys if any key isn't a match
            }
        }
        if (match) filtered.push(obj); // if current obj is a match, push it to our return arr
    }
    return filtered;
}

function findObjectsFilter(searchObj, items) {
    // put all the keys for the search object into an array
    const searchKeysArr = Object.keys(searchObj);

    // filter the items
    let x = items.filter(item => {
        // for each item in items
        // for every key in searchKeysArr
        for (const key of searchKeysArr) {
            // if the key doesn't exist
            if (!item.hasOwnProperty(key) || item[key] !== searchObj[key]) {
                return false;
            }
        }
        // if the for loop returns no false, return true
        return true;
    });
    return x;
}

items.filter(item => Object.keys(searchObj).every(key => item[key] === searchObj[key]));

function findObjects(criteria, collection) {
    const foundDocuments = [];

    for (const item of collection) {
        let isMatch = true;

        for (const searchKey in criteria) {
            const searchVal = criteria[searchKey];

            if (item.hasOwnProperty(searchKey) === false ||
                item[searchKey] !== searchVal) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            foundDocuments.push(item);
        }
    }
    return foundDocuments;
}

const findObjectsFunctional2 = (criteria, collection) =>
    collection.filter((item) => Object.keys(criteria).every((key) => item[key] === criteria[key])
    );



console.log(findObjectsFilter(searchFor1, items));
console.log(findObjectsFilter(searchFor1, items).toString() == output1.toString());
console.log(findObjectsFilter(searchFor2, items));

// ------- without a flag
function findObjectsFilter(searchObj, items) {
    const results = [];

    // loop through each object in the items array
    for (let object of items) {
        let matches = [];

        // loop through each key in the object
        for (let key in object) {

            // if the values of each object match, push into the matches array
            if (object[key] == searchObj[key]) {
                matches.push(object[key]);
            }
        }

        // if the matches array length = the values array of the searchObj length, that object matches the filter
        if (matches.length == Object.values(searchObj).length) {
            results.push(object);
        }
    }
    return results;
}


function findObjectsFilter(searchObj, items) {
    //create var for new array
    let arr = [];
    //iterate through items for each object
    for (let i = 0; i < items.length; i++) {
        let flag = true;
        for (let key in searchObj) {
            if (items[i][key] != searchObj[key]) {
                flag = false;
                break;
            }
        }
        if (flag == true) {
            arr.push(items[i]);
        }
    }
    return arr;
}
console.log(findObjectsFilter(searchFor1, items));
console.log(findObjectsFilter(searchFor2, items));

function findObjectsFilter(searchObj, items) {
    let answers = [];
    for (const person of items) {
        let found = true;
        for (key in searchObj) {
            if (person[key] != searchObj[key]) {
                found = false;
            }
        }
        if (found === true) {
            answers.push(person);
        }
    }
    return answers;
}


function findObjectsFilter(searchObj, items) {
    return items.filter(item => { // return the filtered items
        for (var key in searchObj) { // loop through each key in searchObj
            if (item[key] !== searchObj[key]) { // if value of key doesn't match searchObj's value
                return false; // filter doesn't include keys that don't match
            }
        }
        return true; // filter includes the rest of the keys (that do match)
    });
}

function findObjectsFilter(searchObj, items) {
    const result = []; //initialize an empty array to store the matching objects

    //iterate through each item in the "items" array
    for (const item of items) {
        //assume that the item matches the search object to begin with
        let isMatch = true;
        //iterate through each key in the searchObj
        for (const key in searchObj) {
            //check if the item has the same key and the same value as in the searchobj
            if (item[key] !== searchObj[key]) {
                // if any key-value pair doesn't match, set isMatch to false and break loop
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            //if this is still true, then all key-value pairs matched - push to results
            result.push(item);
        }
    }
    //return the array of matching objects 
    return result;
}

function entries(obj) {
    let entries = new Array();
    let extra = obj.__proto__;

    for (let someKey in obj) {
        entries.push([someKey, obj[someKey]]);
    }

    for (let key in extra) {
        entries.pop();
    }
    return entries;
}

function entries(obj) {
    let output = [];
    for (eachKey in obj) {
        if (obj.hasOwnProperty(eachKey)) {
            output.push([eachKey, obj[eachKey]]);
        }
    }
    return output;
}

console.log(entries(obj1));
console.log(entries(obj2));

// -----------------
function findObjectsFilter(searchObj, items) {
    let answerArr = [];
    for (let i = 0; i < items.length; i++) {
        flag = 1;
        for (let key in searchObj) {
            if (!(key in items[i]) || items[i][key] !== searchObj[key]) {
                flag = 0;
            }
        }
        if (flag == 1) {
            answerArr.push(items[i]);
        }
    }
    return answerArr;
}

// ---------------
function findObjectsFilter(searchObj, items) {
    // creating empty result array
    const filteredItems = [];
    // looping over items list to find each obj
    for (let item of items) {
        let isMatch = true; //flag
        // looping over searchObj
        for (let key in searchObj) {
            // conditional to check if the obj were looping over is not equal
            // to the searchObj
            if (item[key] !== searchObj[key]) {
                isMatch = false;
                break;
            }
        }
        // if there is a match isMatch wouldnt have been set to false
        // so we push that item into our filteredItems array
        if (isMatch) {
            filteredItems.push(item);
        }
    }
    return filteredItems;
}

// -------------
function findObjectsFilter(searchObj, items) {
    let answerArr = new Array();
    const searchObjLen = Object.keys(searchObj).length;
    for (let item of items) {
        let count = 0;
        for (let key in searchObj) {
            if (searchObj[key] === item[key])
                count++;
        }
        if (count == searchObjLen)
            answerArr.push(item);
    }
    return answerArr;
}

// -------------

const tempFun = (items, searchObj) => {
    return items.filter((item) => {
        for (const key in searchObj) {
            if (searchObj[key] !== item[key]) {
                return false;
            }
        }
        return true;
    });
};