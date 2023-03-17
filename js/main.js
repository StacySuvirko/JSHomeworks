'use strict';

function getBillionNumber(pow) {

    let str = (2 ** pow).toString();
    let arr = Array.from(str);
    let index = -3;
    for(let i = 1; i < (arr.length / 3); i++) {
        arr.splice(index, 0, '.');
        let predIndex = (arr.findIndex(symb => symb === '.') - 3);
        if( predIndex > -1) {
            index = predIndex;
        } else {
            break;
        }
    }
    let PointIndex = arr.findIndex(symb => symb === '.');
    let pointNumber = getPointCount(arr);
    
    switch (pointNumber) {
        case 2:
            arr.splice(PointIndex, 1, ' million and ' );
            break;
        case 3: 
            arr.splice(PointIndex, 1, ' billion and ' );
            break;
        case 4:
            arr.splice(PointIndex, 1, ' trillion and ' );
            break;
        case 5:
            arr.splice(PointIndex, 1, ' quadrillion and ' );
            break;
        case 6:
            arr.splice(PointIndex, 1, ' quintillion and ' );
            break;
        default:
            console.log('very big number!');
    }

        if(arr[++PointIndex] === '0') {
            arr.splice(PointIndex, 1 );
        }
    
    let newStr = arr.join('');
    return console.log(newStr);
}

function getPointCount(arr) {
    let counter = 0;
    for(let symb of arr) {
        if(symb === '.') {
            counter++;
        }
    }
    return counter;
}

getBillionNumber(30);
getBillionNumber(40);
getBillionNumber(50);
getBillionNumber(60);