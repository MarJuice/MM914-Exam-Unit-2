// Function test:

import arrays from "./arrays.json" with { type: "json" };

console.log(flatten(arrays));

//#region TASK: Flatten those numbers

// A function that returns a flattened version of any array structure
function flatten(array) {
    return array.flat(Infinity);
}

//#endregion