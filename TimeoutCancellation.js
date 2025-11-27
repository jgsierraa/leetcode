/**Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)

Initially, the execution of the function fn should be delayed by t milliseconds.

If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    const fnTimeout = setTimeout(()=>fn(args), t);
    return async function cancelFn(){
       return new Promise((res, rej)=> res(clearTimeout(fnTimeout)));
    }
};

   const result = [];
 
   const fn = (x1, x2) => x1 * x2;
 
const args = [2,4], t = 30, cancelTimeMs = 100;
   const start = performance.now();
 
   const log = (...argsArr) => {
       const diff = Math.floor(performance.now() - start);
       result.push({"time": diff, "returned": fn(...argsArr)});
   }
        
   const cancel = cancellable(log, args, t);
 
   const maxT = Math.max(t, cancelTimeMs);
            
   setTimeout(cancel, cancelTimeMs);
 
   setTimeout(() => {
       console.log(JSON.stringify(result)); 
   }, maxT + 15)
 
