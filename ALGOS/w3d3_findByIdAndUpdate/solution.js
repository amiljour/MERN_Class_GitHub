function findByIdAndUpdate(id, updatedVals, collection) {
    let found = false; //this bool will keep track of whether we find a matching object to our search id
    let index = 0; //here we will store the index of our found object

    for (let i = 0; i < collection.length; i++) { //iterate through collection
        let item = collection[i]; // item from collection to consider
        if (item.id == id) { // if current item's id is the one we're looking for
            found = true; // set found to true
            index = i; // store the index of this object
            break; // break, no need to search further
        }
    }

    if (found) { // if we have a match
        let updating = collection[index]; //our match!
        for (let key in updatedVals) { //iterate through updatedVals obj
            if (updating.hasOwnProperty(key)) { // if the object we're updating has the same key as updatedVals
                updating[key] = updatedVals[key]; // update its value to the value in our updatedVals obj
            }
        }
    }

    return found ? collection[index] : null; // did we find a match? Return the updated match if so. If not, return null.
}

// ---- alt ?? ----
function findByIdAndUpate(id, object, collection) {
    change = Object.keys(object);
    for (obj of collection) {
        if (obj["id"] == id) {
            for (i = 0; i < change.length; i++) {
                obj[change[i]] = object[change[i]];
            }
            console.log("New: ", collection);
        }
    }
}

id = "4";
object = { "k1": "Glee" };
collection = [
    { "id": "1", "k1": "po", "k2": "g" },
    { "id": "2", "k1": "po", "k2": "g" },
    { "id": "3", "k1": "po", "k2": "g" },
    { "id": "4", "k1": "po", "k2": "g" },
];
findByIdAndUpate(id, object, collection);

function findByIdAndUpdate(id, updatedVals, collection) {
    // iterate through each object
    for (let eachElement of collection) {
        // check if object's id is equal to target id
        if (eachElement["id"] == id) {
            // update key logic   
            for (const key in updatedVals) {
                if (eachElement.hasOwnProperty(key)) {
                    eachElement[key] = updatedVals[key];
                }
            }
            return eachElement;
        }
    }
    return {};
}

function findByIdAndUpdate(id, updatedVals, collection) {
    for (var i = 0; i < collection.length; i++) {
        // find by id, if object not found then return null
        if (collection[i].id === id) {
            // find by key
            for (let key in updatedVals) {
                if (collection[i].hasOwnProperty(key)) {
                    // set new key value pair
                    collection[i][key] = updatedVals[key];
                }
            }
            return collection[i];
        }
    }
    return null;
}

function findByIdAndUpdate(id, updatedVals, collection) {
    for (const object of collection) {
        // loop through our collection
        if (object['id'] === id) {
            // check if we found the object we want
            for (const key in updatedVals) {
                // loop through each key in our updated values array
                if (object.hasOwnProperty(key)) {
                    // if the updated value key exists in our our old object
                    object[key] = updatedVals[key];
                    // update the old object
                }
            }
            return object;
            // after we've updated all the values, return the updated object
        }
    }
    return 'error. object not found in collection';
    // if we loop through the entire collection without finding our object, return an error message
}

const findByIdAndUpdate = (id, updatedValues, collection) => {
    if (Object.keys(updatedValues).length === 0) {
        return null; // return null if the updateValues object is empty
    }

    for (obj of collection) {
        // loop through the collection and see if any id in the collection matches our given id
        if (obj["id"] === id) {
            for (key in updatedValues) {
                // if match is found, replaces the values in the matched object with the values in the updatedValues object
                if (obj.hasOwnProperty(key)) {
                    obj[key] = updatedValues[key];
                }
            }
            return obj; // return updated obj
        }
    }
    return null; // return null if no match was found
};

function findByIdAndUpdate(id, updatedValues, collection) {
    for (let item of collection) {  //loop through array of objects
        if (item.id === id) {    //check id values for match to queried id
            for (let key in updatedValues) {  //if id match found, loop through array item 
                if (item.hasOwnProperty(key)) {  //if key in update object matches key in item from array...
                    item[key] = updatedValues[key];  // ...update that key
                }
            }
            return item;//return item within if statement
        }
    }
    return null;//null if no id matches found
}

// -------------
function findByIdAndUpdate(id, updatedValues, collection) {
    // create a for loop to go over each object in the collection
    for (let i = 0; i < collection.length; i++) {
        // if the key in the object matches the key in updatedValues change the value in the object to match the key
        if (id === collection[i].id) {
            // created a for in loop to get the keys from updateValues
            for (const keyOfUpdatedValues in updatedValues) {
                // this checks to make sure that collection[i] has the key of keyOfUpdatedValues
                if (Object.hasOwn(collection[i], keyOfUpdatedValues)) {
                    // if the if check is true then change the collection[i][keyOfUpdatedValues] to the updatedValues[keyOfUpdatedValues]
                    collection[i][keyOfUpdatedValues] = updatedValues[keyOfUpdatedValues];
                }
            }
            // return new object
            return collection[i];
        }
    }
    // if false return null
    return null;
}

console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue" }, students));
console.log(findByIdAndUpdate(5, {}, students));


// -----------------
