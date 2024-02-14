// function sayHello() {
//     console.log("hello");
//     sayHello();
// }

// sayHello();

// factorial 
// 5! 5*4*3*2*1
// 3! 3*2*1
// 1! 1
// 4! 4*3*2*1

function factorial(num) {
    // 1. BASE CASE - exit condition
    if (num === 1) {
        return 1;
    }

    // logic
    return num * factorial(num - 1);
}

console.log(
    factorial(4)
);