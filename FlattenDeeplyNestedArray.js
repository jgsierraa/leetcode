/*Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.*
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
  
var flat = function (arr, n) {
    if(n == 0){
        return arr
    }
    
    let auxArr = [];
    let auxPlusLength = 0;
    let isThereArrays = false;
    for(let i = 0; i < arr.length; ++i){
        let auxInside = arr[i];
        if(Array.isArray(auxInside)){
            isThereArrays = true;
            for(let j = 0; j < auxInside.length; ++j){
                auxArr[i + auxPlusLength + j] = auxInside[j]
            }
            auxPlusLength += auxInside.length - 1;
            continue;
        }
        auxArr[i + auxPlusLength] = auxInside;
    }
    if(!isThereArrays){
        return auxArr;
    }
    return flat(auxArr, n - 1);
};

