"use strict";

/**
 * We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers
 * between them.
 *
 * The lowest number will not always come first.
 */

function sumAll(arr) {
    let sum = 0;
    let start = arr.reduce((elem1, elem2) => Math.min(elem1, elem2));
    let end = arr.reduce((elem1, elem2) => Math.max(elem1, elem2));

    for (let i = start; i <= end; i++) sum += i;

    return sum;
}

//console.log(sumAll([1, 4]));

/**
 * Compare two arrays and return a new array with any items only found in one of the two given arrays,
 * but not both. In other words, return the symmetric difference of the two arrays.
 * Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
 * Note
 * You can return the array with its elements in any order.
 */

/**
 * Gets the difference of two arrays
 * @param {Array} arr - the minuend
 * @param {Array} arrToCheck - the subtrahend
 * @returns {Array} difference
 */
function getDifference(arr, arrToCheck) {
    let difference = [];
    for (let i = 0; i < arr.length; i++) {
        if (arrToCheck.indexOf(arr[i]) === -1) difference.push(arr[i]);
    }
    return difference;
}

/**
 * Gets the symmetric difference of two arrays
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array} symmetricDifference
 */
function getSymmetricDifference(arr1, arr2) {
    let symmetricDifference = [];

    symmetricDifference = symmetricDifference.concat(getDifference(arr1, arr2));
    symmetricDifference = symmetricDifference.concat(getDifference(arr2, arr1));
    return symmetricDifference;
}

// console.log(getSymmetricDifference([1, 2, 3, 5], [1, 2, 3, 4, 5]));