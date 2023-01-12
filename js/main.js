"use strict";

// Методы массивов 
// LearnJS HW

// Task12

function unique(arr) {
    let arrSorted = [];
    for (let value of arr) {
        if (!arrSorted.includes(value)) arrSorted.push(value);
        }
        return arrSorted;
    }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  console.log( unique(strings) ); // кришна, харе, :-O