// WRITE A FUNCTION THAT SEARCHES FOR AN ELEMENT in an array

const array = [4, 2, 6, 9, 1, 89];
// const searchElement = 9;

const findElement = (array, searchElement) => {
    // console.log(array);
    // console.log(searchElement)
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i])
        if (searchElement == array[i]) {
            return i;
        }
        // if (i === array.length - 1) {
        //     return -1;
        // }
    }

    // because in previous if return is not executed means element is not found
    return -1;

}

// console.log(findElement(array, 89));



// *******************************************************

// 

const array2 = [2, -9, 17, 0, -1, -10, -4, 8];

function countNegatives(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}

// console.log(countNegatives(array2));

// *******************************************************

// FINd LARGEST NO IN AN ARRAY

const array3 = [3, 50, 7, 200, 8, 6];

function findLargestNumber(array) {
    // console.log('hello')
    if (array.length == 0) return null;
    let largestNumber = array[0];
    // let largestNumber = -Infinity; also a possible solution

    for (let i = 1; i < array.length; i++) {
        if (array[i] > largestNumber) {
            largestNumber = array[i];
        }
    }

    return largestNumber;
}

// console.log(findLargestNumber(array3));

// **************************************************

// FINd smallest NO IN AN ARRAY
const array4 = [3, 50, -2, 200, 1, 6];

function findSmallestNumber(array) {
    // console.log('hello')
    if (array.length == 0) return null;
    // let largestNumber = array[0];
    let largestNumber = Infinity;
    //  also a possible solution

    for (let i = 0; i < array.length; i++) {
        if (array[i] < largestNumber) {
            largestNumber = array[i];
        }
    }

    return largestNumber;
}

// console.log(findSmallestNumber(array4));

// *********************************************************


