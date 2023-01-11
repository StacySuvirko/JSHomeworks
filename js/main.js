"use strict";

// Методы массивов 
// LearnJS HW

// Task1

let str = '-webkit-transition';

function camelize(str) {
    // debugger;
    let StrSplitted = str.split('');

    let firstCapLetter = StrSplitted[0].toUpperCase();
    StrSplitted.splice(0, 1, firstCapLetter);
    
    for(let symb of StrSplitted) {

        if(symb === '-') {
            let dashInd = StrSplitted.indexOf(symb);
            let capLetter = StrSplitted[dashInd + 1].toUpperCase();
            StrSplitted.splice(dashInd + 1, 1, capLetter);
            StrSplitted.splice(dashInd, 1);
        }
    }
    return console.log(StrSplitted.join(''));
}

camelize(str);