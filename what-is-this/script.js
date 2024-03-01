// console.log(this);
// console.log(global);

// Standalone function
function standaloneFunction() {
    this.name = "bob";
    console.log("Standalone function 'this':", this);
}

// Arrow function
const arrowFunction = () => {
    this.name = "Alice";
    console.log("Arrow function 'this':", this);
};

// Calling standalone function and arrow function directly
// standaloneFunction();
// arrowFunction();

const obj = {
    method1: standaloneFunction,
    method2: arrowFunction
};


// // Calling methods within an object
obj.method1();
obj.method2();