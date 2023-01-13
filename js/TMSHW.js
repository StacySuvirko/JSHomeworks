'use strict';

//### 1
//Написать ф-цию, которая принимает массив объектов типа {name: 'Jonh', age: 20} и возвращает массив значений лежащих в поле age

function getAges(array) {
    return array.map(obj => obj.age);
}

console.log(
    getAges([
        { name: 'Sergey', age: 33 },
        { name: 'Daria', age: 33 },
    ])
); // => [33, 33]

//### 2
//Написать ф-цию, которая принимает массив объектов типа {name: 'Jonh', age: 20} и вторым параметром ключ, по которому надо собрать массив

function getValues(array, key) {
    return array.map(obj => obj[key]);
}

let arr1 = [
        { name: 'Sergey', age: 33 },
        { name: 'Daria', age: 33 },
    ];

console.log(getValues(arr1, 'name'));
console.log(getValues(arr1, 'age'));


//### 3
// Написать ф-цию, которая принимает объект и меняет местами ключи и значения

function convertObject(obj) {
    let newObj = {};
    for(let key in obj) {
        newObj[obj[key]] = key;
    }
    return newObj;
}

console.log(convertObject({ a: 'b', c: 'd' })); // => { b: 'a', d: 'c' }

//### 4
//Написать ф-цию, которая принимает объект, где в качестве значений - числа. Ф-ция должна проверить, есть ли среди значений четные числа и вернуть true/false

function isEvenValue(obj) {
    for (let key in obj) {
        if(obj[key] % 2 === 0) return true;
        }
    return false;
    }

console.log(isEvenValue({ x: 1, y: 2 })); // => true
console.log(isEvenValue({ x: 1, y: 1 })); // => false

//### 5
//Написать ф-цию, которая принимает массив из чисел, где есть повторяющиеся элементы, и возвращает новый массив, в котором будут только уникальные элементы.

function removeDuplicates(array) {
    let sortedArr = [];
    for(let num of array) {
        if(!sortedArr.includes(num)) sortedArr.push(num);
    }
    return sortedArr;
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 3]));
// => [1, 2, 3]



//### 6
//Написать ф-цию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, 0, null.

function clearArray(array) {
    return array.filter(elem => elem);
}

let arr = [1, false, 2, undefined, 3, '', 4, 0, 5, null]
clearArray(arr)
console.log(arr);
// => [1, 2, 3, 4, 5]



//### 7
//Написать ф-цию, которая принимает массив объектов. Значения этих объектов - числа. Вернуть объект с суммами ключей

function calculate(array) {
    return array.reduce((resultObj, currentObj) => {
        for(let key in currentObj) {

            if(!(key in resultObj)) {
               resultObj[key] = currentObj[key];
            } else {
               resultObj[key] += currentObj[key];
            }
        }
        return resultObj;
    },{})
}

let arr2 = [
    { x: 1, z: 2, y: 3 },
    { x: 10, z: 21, y: 4 },
    { x: 2, z: 3, y: 4 },
    { a: 1, b: 2 },
];

console.log(calculate(arr2));
// => { x: 13, z: 26, y: 11, a: 1, b: 2 }