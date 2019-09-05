'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let slicedArray = [];
	let found = false;

	if(array.length === 1) {
		if(target === array[0]) {
			found = true;
		} else {
			found = false;
		}
	} else if(array.length > 1) {
		let midpoint = Math.floor(array.length/2);
		if(target < array[midpoint]) {
			slicedArray = array.slice(0, midpoint);
			found = binarySearch(slicedArray, target);
		} else if(target > array[midpoint]){
			slicedArray = array.slice(midpoint + 1);
			found = binarySearch(slicedArray, target);
		} else if(target === array[midpoint]){
			found = true;
		}
	} 
  return found;
  
	// if(array.includes(target)) {
	// 	return true
	// } else {
	// 	return false
	// }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch