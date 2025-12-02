/** 
 Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.
 * */

var TimeLimitedCache = function() {
    this.dictionary = {};
    this.timeoutDictionary = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
   // i need to find first if the key exist
    if(this.dictionary[key] == undefined){
        this.dictionary[key] = value;
        this.timeoutDictionary[key] = setTimeout(()=>{
            delete this.timeoutDictionary[key];
            delete this.dictionary[key];
        }, duration);
        return false;
    }
    // here means that the value exist so change the value, clear the timeout, set a new timeout
    clearTimeout(this.timeoutDictionary[key]);
    this.timeoutDictionary[key] = setTimeout(()=>{
        delete this.timeoutDictionary[key];
        delete this.dictionary[key];
    }, duration);
    this.dictionary[key] = value;
    return true;
}

/** 
 * @param {number} key
 * @return {number} value associated with key
    get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.dictionary[key] !== undefined){
        return this.dictionary[key];
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return Object.keys(this.dictionary).length; 
};
const timeLimitedCache = new TimeLimitedCache()
timeLimitedCache.set(1, 42, 50)
timeLimitedCache.set(1, 50, 100)
console.log(timeLimitedCache.get(1));
console.log(timeLimitedCache.get(1));
console.log(timeLimitedCache.get(1));
console.log(timeLimitedCache.count());
 
