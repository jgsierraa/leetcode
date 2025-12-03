/**Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

promise resolves:

    When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.

promise rejects:

    When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.

Please solve it without using the built-in Promise.all function.
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((res, rej)=>{
        const length = functions.length;
        const responseArray = new Array(length);
        let count = 0;
        for(let i = 0; i < length; ++i){
            functions[i].apply(this,[])
            .then((data)=>{
                responseArray[i] = data;
                ++count;
                if(count == length){
                    res(responseArray);
                }
            })
            .catch(error=>{
                rej(error);
            });
        }
    });
};
//functions = [
//  () => new Promise(resolve => setTimeout(() => resolve(5), 200))
//]
functions = [
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]
const promise = promiseAll(functions);
promise.then(console.log); // [42]
 
