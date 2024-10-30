//TODO: EXERCICE 1
/* *Instructions*
    You need to merge to sorted arrays containing only numbers

    For example you will receive the following arrays:
    arr1=[1,2,4]
    arr2=[1,3,4]

    and the expected output would be [1,1,2,3,4,4].

    Note: you cannot use the sort() array method and you cannot remove duplicates

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const merged = (arrA, arrB) => {
    /* Only make changes below this comment */
    let result = [];
    let i = 0, j = 0;

    while (i < arrA.length && j < arrB.length) {
        if (arrA[i] < arrB[j]) {
            result.push(arrA[i]);
            i++;
        } else {
            result.push(arrB[j]);
            j++;
        }
    }

    // Añadir los elementos restantes
    while (i < arrA.length) result.push(arrA[i++]);
    while (j < arrB.length) result.push(arrB[j++]);

    return result;
    /* Only make changes below this comment */
}

//TODO: EXERCICE 2
/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    let substrings = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            substrings.push(str.slice(i, j));
        }
    }

    return substrings;
    /* Only make changes below this comment */
}

//TODO: EXERCICE 3
/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */

// Reemplaza los espacios y guiones bajos con guiones
return str
.split(/\s|_|(?=[A-Z])/)
.join('-')
.toLowerCase();

    /* Only make changes below this comment */
}


//TODO: EXERCICE 3

/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--; // Reduce el tamaño del array que se ordena
    } while (swapped);

    return arr;
    /* Only make changes below this comment */
}



/** DO NOT CHANGE THE LINE BELOW **/
module.exports = {merged,substrGen, spinal, bubbleSort};