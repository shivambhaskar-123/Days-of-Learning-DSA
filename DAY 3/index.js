// START PATTERN

function printStarPattern(rows) {

    for (let i = 0; i < rows; i++) {
        let starRow = '';
        for (let j = 0; j < rows; j++) {
            starRow = starRow + '*';
        }
        console.log(starRow);
    }
}

printStarPattern(4);


/**
 * 
 Print this second pattern
---------
*
* *
* * *
* * * *
----------
 */

function secondStarPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        // for(let j=0;j < i+1;j++) or
        for (let j = 0; j <= i; j++) {
            row = row + '*';
        }
        console.log(row);

    }
}

secondStarPattern(4);

// ******************************************************


/**
 * 
 Print this third pattern
---------
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
----------
 */

function printThirdPattern(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            console.log(j + 1)
            // NOTE this is wrong will not make the above pattern
        }
    }
}

// printThirdPattern(4);

function printThirdPatternCorrect(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j <= i; j++) {
            row = row + (j + 1);
        }
        console.log(row);
    }
}

// printThirdPatternCorrect(4);

// ******************************************************


/**
 * 
 Print this fourth pattern
---------
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
----------
 */

function printFourthPatternCorrect(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j <= i; j++) {
            row = row + (i + 1);
        }
        console.log(row);
    }

    // or

    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row = row + i;
        }
        console.log(row);
    }
}

// printFourthPatternCorrect(5);

// ******************************************************


/**
 * 
 Print this fift pattern
---------
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
----------
 */

function printFifthPatternCorrect(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < (n - i); j++) {
            row = row + (j + 1);
        }
        console.log(row);
    }

    // or

    for (let i = n; i > 0; i--) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row = row + (j + 1);
        }
        console.log(row);
    }
}

// printFifthPatternCorrect(5);

// ******************************************************


/**
 * 
 Print this sixth pattern
---------
* * * * *
* * * * 
* * * 
* * 
*
----------
 */

function printSixthPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < (n - i); j++) {
            row = row + '*';
        }
        console.log(row);
    }

    // or

    for (let i = n; i > 0; i--) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row = row + '*';
        }
        console.log(row);
    }
}

// printSixthPattern(5);


// ******************************************************


/**
 * 
 Print this sixth pattern
---------
        *
      * *
    * * * 
  * * * * 
* * * * * 
----------
 */
console.log('_______________________')
function reverseStarPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            if (j > (n - i)) {
                // console.log('j=', j)
                row = row + '*'
            } else {
                row = row + ' ';
            }
        }
        console.log(row);
    }
}

reverseStarPattern(5);