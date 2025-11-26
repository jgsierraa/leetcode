/**Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

Note that minor deviation from millis in the actual sleep duration is acceptable.

 

Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});

 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
     async function test(millis){
        return new Promise((res, rej)=>setTimeout(()=>res(millis), millis))
    }
    await test(millis);
}

let date = Date.now();
sleep(100).then(()=>{
    console.log(Date.now() - date, 'time difference');
});
