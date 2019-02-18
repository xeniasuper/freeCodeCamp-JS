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

/**
 * You will be provided with an initial array (the first argument in the destroyer function),
 * followed by one or more arguments. Remove all elements from the initial array that are
 * of the same value as these arguments.
 * Note
 * You have to use the arguments object.
 */


/**
 * Removes all elements from the array that are of the same value as arguments of the function,
 * that are provided after the array. Does not mutate the initial array.
 * @param {Array} arr
 * @return {Array} destroyed
 */
function destroyer(arr) {
    let elemsToDel = Array.prototype.slice.call(arguments, 1);
    let destroyed = [];
    let cnt = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < elemsToDel.length; j++) {
            if (arr[i] !== elemsToDel[j]) cnt++;
        }
        if (cnt === elemsToDel.length) destroyed.push(arr[i]);
        cnt = 0;
    }
    return destroyed;
}

// console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));

/**
 * Make a function that looks through an array of objects (first argument) and returns an array of
 * all objects that have matching name and value pairs (second argument).
 * Each name and value pair of the source object has to be present in
 * the object from the collection if it is to be included in the returned array.
 */

/** Looks through an array of objects (first argument) and returns an array of
 * all objects that have matching name and value pairs (second argument).
 * Makes an array
 * @param collection
 * @param source
 * @return {Array} arr
 */
function whatIsInAName(collection, source) {
    // What's in a name?
    let arr = [];
    // Only change code below this line
    let srcKeys = Object.keys(source);
    let cnt = 0;

    for (let i = 0; i < collection.length; i++) {
        let cltKeys = Object.keys(collection[i]);

        for (let j = 0; j < cltKeys.length; j++) {
            if (cltKeys[j] === srcKeys[cnt]) {
                if (collection[i][cltKeys[j]] === source[srcKeys[cnt]]) {
                    cnt++;
                }
            }
        }
        if (cnt === srcKeys.length) arr.push(collection[i]);
        cnt = 0;
    }
    // Only change code above this line
    return arr;
}

// console.log(whatIsInAName([
//                         {first: "Tybalt", last: "Capulet"},
//                         { first: "Mercutio", last: null },
//                         { first: "Romeo", last: "Montague" }
//                         ],
//                 { last: "Capulet" }));