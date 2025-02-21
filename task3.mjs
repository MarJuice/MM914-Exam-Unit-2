// Function tests:

import node from "./nodes.json" with { type: "json" };

console.log(sum(node));

//#region TASK: Left and right up and down, away we go

function sum(node) {
    let sum = 0;
    let deepest = 0;
    let nodes = 0;

    // Report the deepest level
    function check(node, level) {
        if (level > deepest) {
            deepest = level;
        }

        // Calculate the sum
        sum += node.value;
        nodes++;

        // Count the number of nodes
        if (node.left) {
            check(node.left, level + 1);
        }

        if (node.right) {
            check(node.right, level + 1);
        }
    }

    check(node, 0);

    return { sum, deepest, nodes };
}

//#endregion
