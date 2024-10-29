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
    new_arrAB = arrA.concat(arrB)

    for ( let i = 0; i <new_arrAB.length; i++ ){
        for ( let j = 0; j < new_arrAB.length - i -1; j++ ){
            if (new_arrAB[j] > new_arrAB[j + 1]){
                const temp = new_arrAB[j];
                new_arrAB[j] = new_arrAB[j + 1];
                new_arrAB[j + 1] = temp;
            }
        }
    }

    return new_arrAB;
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
    const substrings = []; 

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            substrings.push(str.substring(i, j));
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
    // const oracion_minusc = str.toLowerCase();
    const palabras = str.split(" ")

    const result = [];

    palabras.forEach(palabra =>{
        const caracteres = palabra.split("");
        for(let i = 1; i < caracteres.length; i ++ ){
            if( caracteres[i] === caracteres[i].toUpperCase()){
                caracteres.splice(i, 0, '-');
                i ++
            }
        }
        result.push(caracteres.join(""))

    })

    const union = result.join("-").toLowerCase();

    return union
    /* Only make changes below this comment */
}


//TODO: EXERCICE 4

/** DO NOT CHANGE THE FUNCTION NAME **/
const bubbleSort = (arr) => {
    /* Only make changes below this comment */

    for ( let i = 0; i <arr.length; i++ ){
        for ( let j = 0; j < arr.length - i -1; j++ ){
            if (arr[j] > arr[j + 1]){
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    return arr
    /* Only make changes below this comment */
}



/** DO NOT CHANGE THE LINE BELOW **/
module.exports = {merged,substrGen, spinal, bubbleSort};