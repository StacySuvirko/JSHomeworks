"use strict";

// Методы массивов 
// LearnJS HW

// Task5

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice().sort();
}

console.log(copySorted(arr));
console.log(arr);