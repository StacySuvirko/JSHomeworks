"use strict";

// Методы массивов 
// LearnJS HW

// Task3

let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {

    for (let elem of arr) {
        if (a > elem || elem > b) {
            let index = arr.indexOf(elem)
            arr.splice(index, 1);
        }
    }
}

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr ); // [3, 1]