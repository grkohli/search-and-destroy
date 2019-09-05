'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    let isLink = true;
    let currNode = linkedlist.head;
    // console.log('Head', linkedlist.head)

    while(isLink) {
        let nextNode = currNode.next;

        if(nextNode.previous === currNode) {
            isLink = true;
            currNode = currNode.next;
        } else {
            isLink = false;
        } 
        
        if(currNode === linkedlist.tail) {
            break;
        }
    }

    return !isLink;
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop