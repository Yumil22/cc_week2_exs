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
    let arrayUnido = arrA.concat(arrB);

    for (let i = 0; i < arrayUnido.length; i++) {
        for (let j = 0; j < arrayUnido.length - i - 1; j++) {
            if (arrayUnido[j] > arrayUnido[j + 1]) {
                [arrayUnido[j], arrayUnido[j + 1]] = [arrayUnido[j + 1], arrayUnido[j]];
            }
        }
    }
    return arrayUnido;
    /* Only make changes above this comment */
}

//TODO: EXERCICE 2
/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    const subcadenas = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            subcadenas.push(str.slice(i, j));
        }
    }
    return subcadenas;
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
    let conGuiones = str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/([A-Z])([A-Z][a-z])/g, '$1-$2');
    let espaciosYGuionesBajosReemplazados = conGuiones.replace(/\s+|_+/g, '-');
    let enFormatoSpinal = espaciosYGuionesBajosReemplazados.toLowerCase();
    return enFormatoSpinal;
    /* Only make changes below this comment */
}


//TODO: EXERCICE 3

/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */
    let n = arr.length;
    let intercambiado;
    do {
        intercambiado = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                intercambiado = true;
            }
        }
        n--;
    } while (intercambiado);
    return arr;
    /* Only make changes below this comment */
}



/** DO NOT CHANGE THE LINE BELOW **/
module.exports = {merged,substrGen, spinal, bubbleSort};