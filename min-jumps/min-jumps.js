'use strict';

// Complete this algo
let counter = 0

const minJumps = arr => {
    if(arr.length <= 1) {
        return counter;
    } if(arr.length === 2) {
        return ++counter;
    } else {
        let currValue = arr[0];
        for(let i = 0; i < arr.length;) {
            let tempArr = arr.slice(i + 1, i + currValue);
            let max = Math.max(tempArr);
            let jumpIndex = arr.indexOf(max)
            currValue = arr[jumpIndex];
            counter++;
            // i +
        }
    }
};

module.exports = minJumps