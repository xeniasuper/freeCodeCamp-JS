"use strict";

/* Problem 1
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

/* Problem 2
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

/* Problem 3
 * You will be provided with an initial array (the first argument in the destroyer function),
 * followed by one or more arguments. Remove all elements from the initial array that are
 * of the same value as these arguments.
 * Note
 * You have to use the arguments object.
 */


/* Problem 4
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

/* Problem 5
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

/* Problem 6
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */

/**
 * Converts a string to spinal case.
 * @param {String} str
 * @return {String}
 */
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    let split = str.split(/(?=[A-Z])|\s|-|_/);
    for (let i = 0; i < split.length; i++) {
        split[i] = split[i].toLowerCase();
    }
    return split.join("-");
}

// console.log(spinalCase("thisIsSpinalTap"));

/* Problem 7
 * Translate the provided string to pig latin.
 * Pig Latin takes the first consonant (or consonant cluster) of an English word,
 * moves it to the end of the word and suffixes an "ay".
 * If a word begins with a vowel you just add "way" to the end.
 * Input strings are guaranteed to be English words in all lowercase.
*/

/**
 * Translates the provided string to pig latin.
 * @param str
 * @return {String}
 */
function translatePigLatin(str) {
    if (str.match(/^[aeiou]/)) return str + "way";

    let addToEnd = "";
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
        if (!str[i].match(/^[aeiou]/)) {
            addToEnd = addToEnd + str[i];
            cnt++;
        } else {
            break;
        }
    }
    str = str.slice(cnt) + addToEnd + "ay";
    return str;
}

//console.log(translatePigLatin("glove"));

/* Problem 7
 * Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 * Note
 * Preserve the case of the first character in the original word when you are replacing it.
 * For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
 */

/**
 * Performs a search and replaces on the sentence using the arguments provided and returns the new sentence.
 * @param {String} str - the sentence to perform the search and replace on.
 * @param {String} before - the word that you will be replacing.
 * @param {String} after - what you will be replacing the second argument with.
 * @return {String} - the new sentence.
 */
function myReplace(str, before, after) {
    let re = new RegExp(before);
    let idxBeforeStart = str.search(re);
    let idxBeforeEnd = idxBeforeStart + before.length;

    if (before.match(/^[A-Z]/)) {
        after = after.slice(0, 1).toUpperCase() + after.slice(1);
    }
    return str.slice(0, idxBeforeStart) + after + str.slice(idxBeforeEnd);
}

//console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

/* Problem 8
 * The DNA strand is missing the pairing element. Take each character, get its pair,
 * and return the results as a 2d array.
 * Base pairs are a pair of AT and CG. Match the missing element to the provided character.
 * Return the provided character as the first element in each array.
 * For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
*/

/**
 * Matches A with T and C with G.
 * @param {String} str - a DNA string
 * @return {Array} - 2D array with matched pairs
 */
function pairElement(str) {
    let pairs = [];
    for (let letter of str) {
        switch (letter) {
            case "A":
                pairs.push(["A", "T"]);
                break;
            case  "T":
                pairs.push(["T", "A"]);
                break;
            case "C":
                pairs.push(["C", "G"]);
                break;
            case "G":
                pairs.push(["G", "C"]);
                break;
        }
    }
    return pairs;
}

//console.log(pairElement("ATCGA"));

/* Problem 9
* Find the missing letter in the passed letter range and return it.
* If all letters are present in the range, return undefined.
*/

/**
 * Finds the missing letter in the passed letter range and returns it.
 * @param {String} str
 * @return {String}
 */
function fearNotLetter(str) {
    let charCode = str.charCodeAt(0);
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) != charCode) return String.fromCharCode(charCode);
        charCode++;
    }
}

// console.log(fearNotLetter("abce"));

/* Problem 10
* Write a function that takes two or more arrays and returns a new array of unique values in the order
* of the original provided arrays.
* In other words, all values present from all arrays should be included in their original order,
* but with no duplicates in the final array.
* The unique numbers should be sorted by their original order,
* but the final array should not be sorted in numerical order.
*/

/**
 * Makes new array of unique values in the order of the original provided array.
 * @param {Array} arrays - one or more
 * @return {Array}
 */
function uniteUnique(arr) {
    let union = [];
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            if (union.indexOf(arguments[i][j]) === -1) union.push(arguments[i][j]);
        }
    }
    return union;
}

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

/* Problem 11
* Convert the characters &, <, >, " (double quote), and ' (apostrophe),
* in a string to their corresponding HTML entities.
*/

/**
 * Converts the characters &, <, >, " (double quote), and ' (apostrophe), in a string
 * to their corresponding HTML entities.
 * @param {String} str
 * @return {String}
 */

let charsEntitites = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
}

function convertHTML(str) {
    // &colon;&rpar;
    let converted = str;
    let keys = Object.keys(charsEntitites);

    for (let i = 0; i < keys.length; i++) {
        let re = new RegExp(keys[i], "g");
        converted = converted.replace(re, charsEntitites[keys[i]]);
    }
    return converted;
}

// console.log(convertHTML("Hamburgers < 'Pizza' < Tacos"));

/* Problem 12
* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num
*/

/**
 * Summarizes all odd Fibonacci numbers that are less than or equal to num
 * @param {Number} num
 * @return {Number}
 */
function sumOddFibs(num) {
    let currFib = 1;
    let prevFib = 1;
    let sum = prevFib;

    while (currFib <= num) {
        if (currFib % 2 === 1) sum += currFib;
        let tmp = currFib;
        currFib = prevFib + currFib;
        prevFib = tmp;
    }
    return sum;
}

// console.log(sumOddFibs(10));
// console.log("" + sumOddFibs(1) + "\n" + sumOddFibs(1000));