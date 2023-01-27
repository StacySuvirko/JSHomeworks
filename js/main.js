"use strict";

// const arr1 = [1, 5, 7, 'ddd', 'uyg', 'nnnnn', true, false, 99, null];
// console.log(arr1);
// Умножить на 2 все-все элементы массива:

const multidimArr = [1, 2, [3, 4, 5, [6, 7, [8, 9, 10]]]];
console.log(JSON.stringify(multidimArr));

function doubble() {
 return function(x) {
     if(!Array.isArray(x)) {
        return x * 2;
     } else {
        return x.map(doubble());
     }
 }
}

let d = multidimArr.map(doubble());
console.log(JSON.stringify(d));