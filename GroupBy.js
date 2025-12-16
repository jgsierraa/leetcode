/**Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.

The provided callback fn will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

Please solve it without lodash's _.groupBy function.
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    // i need to iterate through all items in my array, applying the fn function and then i got the key of that value right, if i already got that value saved, i can add it to the return... i understand myself tho
    // which is pretty good lads
    let returnObject = {};
    this.forEach(function applyFnFunction(item){
        let result = fn(item);
        if(result in returnObject){
            returnObject[result].push(item);
        } else {
            returnObject[result] = [item];
        }
    })
    return returnObject;
};

console.log([1,2,3].groupBy(String)); // {"1":[1],"2":[2],"3":[3]}
 
