"use strict";

// Методы массивов 
// LearnJS HW

// Task9

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

function sortByAge(users) {
    users.sort((user1, user2) => user1.age - user2.age);
}
sortByAge(arr);

console.log(arr);