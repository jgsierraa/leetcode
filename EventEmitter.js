/*Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

Your EventEmitter class should have the following two methods:

subscribe - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.
An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.
The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.
emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.
 *
 *
 */
class EventEmitter {
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
   
    constructor(){
        this.events = {}
    }

    subscribe(eventName, callback) {
        if(this.events[eventName]){
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
        let i = this.events[eventName].length - 1;
        return {
            unsubscribe: () => {
               delete this.events[eventName][i];
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const auxArr = this.events[eventName];
       if(!auxArr){
            return [];
       }
        const returnArr = []
        for(let i = 0; i < auxArr.length; ++i){
            if(!auxArr[i]){
                continue;
            }
            returnArr.push(auxArr[i](...args));
        }
        return returnArr;
    }
}
//["EventEmitter", "subscribe", "subscribe", "subscribe", "unsubscribe", "unsubscribe", "emit"]
//[[], ["firstEvent", "x => x + 1"], ["firstEvent", "x => x + 2"], ["firstEvent", "x => x + 3"], [1], [2], ["firstEvent", [5]]]
const emitter = new EventEmitter();
const sub1 = emitter.subscribe("firstEvent", x => x + 1);
const sub2 = emitter.subscribe("firstEvent", x => x + 2);
const sub3 = emitter.subscribe("firstEvent", x => x + 3);
sub2.unsubscribe(); // undefined
sub3.unsubscribe(); // undefined
console.log(emitter.emit("firstEvent", [5]));
