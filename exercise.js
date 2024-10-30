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
    let newArr = [];
    arrA.forEach((numA) => newArr.push(numA));
    arrB.forEach((numB) => newArr.push(numB));
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < (newArr.length - i - 1); j++) {
            if (newArr[j] > newArr[j + 1]) {
                let temp = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = temp;
            }
        }
    }
    return newArr;
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
    let arr = Array.from(str);
    let substr = [];
    for (let i = 0; i < arr.length; i++) {
        substr.push(arr[i]);
        for (let j = i + 1; j < arr.length; j++) {
            let temp = [];
            temp.push(substr[substr.length - 1] + arr[j]);
            substr.push(temp[0]);
            temp = [];
        }
    }
    return substr;
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
    return str
        .replace(/\s+/g, "-")
        .replace(/([A-Z])/g, "-$1")    
        .replace(/-+/g, "-")
        .replace(/^-/, "")
        .toLowerCase();
    /* Only make changes below this comment */
}


//TODO: EXERCICE 4

/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
    /* Only make changes below this comment */
}



/** DO NOT CHANGE THE LINE BELOW **/
module.exports = {merged,substrGen, spinal, bubbleSort};