// SECOND LARGEST NUMBER

const array5 = [4, 9, 8, 2, 8, 47, 1];


// belo is the practice code i have made it to the third largest.
function findSecondLargestTesting(array) {
    let largest = -Infinity;
    let sl = -Infinity;
    let tl = -Infinity;


    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            sl = largest;
            largest = array[i];

        } else if (sl < array[i]) {
            tl = array[i];
            // largest = array[i];

        }
        else if (largest !== sl && array[i] > sl) {
            sl = array[i];
        }
        else if (largest !== sl && sl !== tl && array[i] > tl) {
            tl = array[i];
        }
    }
    console.log(largest)
    console.log('sl', sl)
    console.log('tl', tl)
    return sl;
}

// console.log(findSecondLargestTesting(array5))


// Updated better solution.

function findSecondLargest(array) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    if (array.length < 2) return null;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            secondLargest = largest;
            largest = array[i];
        } else if (array[i] > secondLargest && array[i] !== largest) {
            secondLargest = array[i];
        }
    }

    return secondLargest;
}

console.log(findSecondLargest(array5))
