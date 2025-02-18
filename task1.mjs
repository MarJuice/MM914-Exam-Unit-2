// Function tests:

console.log("Square of 10: ", square(10));
console.log("10 inches in mm: ", inchToMilimeter(10));
console.log("Root of 10: ", root(10));
console.log("Cube of 10: ", cube(10));
console.log("Circle area with radius of 10: ", area(10));
console.log(greet("Marius"));

//#region TASK: Functions are a popping

// A function that returns the square of a number
function square(num) {
    return num * num;
}

// A function that returns a length in mm assuming it has been given a length in inches.
function inchToMilimeter(num) {
    let ratio = 25.4;
    return num * ratio;
}

// A function that returns the root of a number
function root(num) {
    return num ** 0.5;
}

// A function that returns the cube of a number
function cube(num) {
    return num ** 3;
}

// A function that returns the area of a circle given the radius.
function area(rad) {
    const PI = 3.141592;
    return PI * (rad ** 2);
}

// A function that returns a greeting, given a name.
function greet(name) {
    return "Hello " + name;
}

//#endregion