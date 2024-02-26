/* 
Recreate Object.entries() method
Given an object,
return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/
// pseudo code
// 1. loop over obj
// 2. get the keys and values from obj
// 3. 

const obj1 = {
    name: "Pizza",
    calories: 9001,
};
const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
];

const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
};
const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
];

obj1.__proto__ = obj2;

function entries(obj) {
    let entries = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) { //this check stops us from pushing any keys that come from a prototype
            entries.push([key, obj[key]]);
        }
    }
    return entries;
}

console.log(entries(obj1));
console.log(entries(obj2));

// ==================================================

/* 
  Given a table name string and an object whose key value pairs represent column names and values for the columns
  return a SQL insert statement string
  Tip: string interpolation (using back ticks, the key to the left of num 1 key)
  Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expectedA =
    "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
const expectedB =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

function insert(tableName, columnValuePairs) {
    let entries = Object.entries(columnValuePairs);

    let string = `INSERT into ${tableName} (`;
    let keyString = "";
    let valString = "";
    for (let i = 0; i < entries.length; i++) { // loop through entries
        let key = entries[i][0]; //current key
        let val = entries[i][1]; //current val

        //building key string
        keyString += key;
        if (i != entries.length - 1) { //if we're not on the last key, add a comma and a space
            keyString += ", ";
        }

        //building val string
        if (typeof val !== "string") { //if type isn't string
            valString += val; //directly add value
        } else { //if it IS a string, we want our single quotes around value
            valString += `'${val}'`;
        }
        if (i != entries.length - 1) { // if we're not at the end,
            valString += ", "; // separate values with a comma and space
        }
    }

    return string + keyString + ") VALUES (" + valString + ");";
}
console.log(insert(table, insertData1));
console.log(insert(table, insertData2));
console.log(insert2(table, insertData1));
console.log(insert2(table, insertData2));

// -------------------------------------------------
/* 
Recreate Object.entries() method
Given an object,
return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
};
const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
];

const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
};
const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
];

obj1.__proto__ = obj2;
//   obj1.firstName = 'Jon';

function entries(obj) {
    let output = [];

    for (let key in obj) {
        //   console.log(key);
        if (obj.hasOwnProperty(key)) {
            output.push([key, obj[key]]);
        }
    }
    return output;
}

//   console.log(entries(obj1));
//   console.log(entries(obj2));

// ==================================================

/* 
  Given a table name string and an object whose key value pairs represent column names and values for the columns
  return a SQL insert statement string
  Tip: string interpolation (using back ticks, the key to the left of num 1 key)
  Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expectedA =
    "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

//   // Bonus:
const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
const expectedB =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";

function insert(tableName, columnValuePairs) {
    let output = 'INSERT INTO ' + tableName + ' (';
    let values = '';

    for (let key in columnValuePairs) {
        // console.log(key);
        output += key + ', ';
        values += JSON.stringify(columnValuePairs[key]) + ', ';
    }

    output = output.substring(0, output.length - 2) + ') VALUES (' + values.substring(0, values.length - 2) + ');';

    return output;

}

console.log(insert(table, insertData1));
console.log(insert(table, insertData2));


// -------------------------
/**
 * Generates a SQL insert statement from the inputs
 * - Time: O(n) linear, n = num of keys in columnValuePairs.
 * - Space: O(n) linear.
 * @param {string} tableName
 * @param {Object} columnValuePairs
 * @returns {string} A string formatted as a SQL insert statement where the
 *    columns and values are extracted from columnValuePairs.
 */
function insert(tableName, columnValuePairs) {
    let columns = "";
    let values = "";

    for (const colName in columnValuePairs) {
        if (columnValuePairs.hasOwnProperty(colName)) {
            let val = columnValuePairs[colName];

            if (typeof val === "string") {
                val = `'${val}'`;
            }

            // prepend a comma and space if it's not the first column added to string
            if (columns === "") {
                columns += colName;
            } else {
                columns += `, ${colName}`;
            }

            if (values === "") {
                values += val;
            } else {
                values += `, ${val}`;
            }
        }
    }
    return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`;
}

/**
 * - Time: O(5n) -> O(n) linear,
 *    .keys .join .values .map .join = 5 non-nested loops
 * - Space: O(n) linear.
 */
function insertFunctional(tableName, columnValuePairs) {
    const columns = Object.keys(columnValuePairs).join(", ");

    const values = Object.values(columnValuePairs)
        .map((val) => (typeof val === "string" ? `'${val}'` : val))
        .join(", ");

    return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`;
}

// =========================
function insert(tableName, columnValuePairs) {
    //loop over object
    let result = '';
    let str = Object.values(columnValuePairs).map(value => {
        return typeof value === 'string' ? `"${value}"` : value;
    });
    result = `INSERT INTO ${tableName} (${Object.keys(columnValuePairs).join(', ')}) VALUES (${str.join(', ')})`;

    return result;

}

//   ==================
function insert(tableName, columnValuePairs) {
    // extract column names from columnValuePairs into an array
    // extract values from columnValuePairs into an array
    const columns = Object.keys(columnValuePairs).join(", ");
    let values = Object.values(columnValuePairs);

    // map over the values, and convert each value based on what type each element in the array is
    values = values
        .map(
            (val) =>
                typeof val === "string"
                    ? `'${val}'` // just add quotes
                    : val === false // if it is false, convert to -1
                        ? (val = -1)
                        : val === true // if it is true, convert to 1
                            ? 1
                            : val // if its anything else, leave it as is.
        )
        .join(", "); // join them all into one string

    // Return the SQL query, but insert the table name, the columns, and the values
    return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`;
}

// ===================
function insert(tableName, columnValuePairs) {

    let keys = Object.keys(columnValuePairs).toString();
    let values = Object.values(columnValuePairs);
    let str = "";

    for (element of values) {
        switch (typeof element) {
            case ("string"): {
                str += `'${element}'`;
                if (values.indexOf(element) != values.length - 1)
                    str += ",";
                break;
            }
            case ("number"): {
                str += element.toString();
                if (values.indexOf(element) != values.length - 1)
                    str += ",";
                break;
            }
            case ("boolean"): {
                if (element == false) {
                    str += "-1";
                }
                else if (element == true) {
                    str += "1";
                }
                if (values.indexOf(element) != values.length - 1)
                    str += ",";
                break;
            }
        }
    }

    return "INSERT INTO " + tableName + " (" + keys + ") VALUES (" + str + ")";

}

// -----------------
const sqlQuery = (table, data) => {
    const query = `INSERT INTO ${table} (${Object.keys(data)}) VALUES (${Object.values(data).map(item => `'${item}'`)});`;
    return query;
};

console.log(sqlQuery(table, insertData1));