'use strict';

function sum(...args) {
    let current = args.reduce((acc, num) => acc + num, 0);
    function inner(...innerArgs) {
       for(let i of innerArgs) {
        current += i;
       }
       return inner;
    }
    inner.toString = function() {
        return current;
    };
    return inner;
    
}

alert(sum(2, 8)(3, 6, 0)(123, 8));
