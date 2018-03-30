# Document
Contains the event emitter base class EventEmitter, and an instantiated event center object eventCenter, similar to the EventEmitter in a node.

eventEmitter and eventCenter can be used to [decouple](http://yanhaijing.com/program/2016/09/01/about-coupling/) the relationships between the various modules.

[Chinese README 中文版本](https://github.com/yanhaijing/event.js/blob/master/api_CN.md)

## EventEmitter
EventEmitter is the base class of event emitter similar to an EventEmitter in a node, and an EventTarget in a browser. There are two main purposes of an EventEmitter, one is to instantiate an event center, the other is inheritance, providing subclasses with a message interface.

An example of the event center:
```js
var ec = new EventEmitter();

ec.on('test', function (msg) {
    console.log(msg); // log 123
});

ec.emit('test', 123);
```

An example of inheritance:

```js
class MyEvent extends EventEmitter {

}

var me = new MyEvent();

me.on('test', function (msg) {
    console.log(msg); // log 123
});

me.emit('test', 123);
```

For cases where the ES6 environment is not supported, [inherits.js](https://github.com/yanhaijing/inherits.js) can be used.

```js
function MyEvent() {

}

inherits(MyEvent, EventEmitter);

var me = new MyEvent();

me.on('test', function (msg) {
    console.log(msg); // log 123
});

me.emit('test', 123);
```

Every EventEmitter instance has all of the following methods. Each of the APIs are described below.

### EventEmitter#addListener
Add an event

- param {string} eventName - event name
- param {function} listener - Function
- return {object} EventEmitter - instance of EventEmitter, which supports chain calling

```js
var ec = new EventEmitter();

ec.addListener('test1', function () { // xxx });
ec.addListener('test2', function () { // xxx });
```

### EventEmitter#on
The "on" method is an alias of the addListener method. The oarameters and usage are the same as addListener.

### EventEmitter#once
The function of "once" is also to add an event, but the added event will only be called once. 

- param {string} eventName - event name
- param {function} listener - Function
- return {object} EventEmitter - instance of EventEmitter, which supports chain calling

```js
var ec = new EventEmitter();

ec.once('test1', function () { // xxx }); // Callback function will only be invoked once
```

### EventEmitter#removeListener
removeListener is used to delete the callback of the specified event.

- param {string} eventName - event name
- param {function} listener - Function
- return {object} EventEmitter - instance of EventEmitter, which supports chain calling

```js
var ec = new EventEmitter();

function cb() {}
ec.on('test1', cb);

ec.removeListener('test1', cb);
```

RemoveListener will only remove at most one listener instance from the listener array. If any single listener is added many times to the listener array of the specified eventName, then removeListener must be called many times to remove every instance.

** Note: ** once an event is triggered, all the listeners bound to it will be triggered sequentially. This means that any removeListener () or removeAllListeners () call will not remove them from emit () before the event triggers and the last listener is executed. Subsequent events will happen as expected.

### EventEmitter#off
The off method is an alias of the removeListener method, and the parameters and usage are the same as removeListener. 

### EventEmitter#removeAllListeners
Remove all or the specified eventName listener。

- param {string} eventName - event name
- return {object} EventEmitter - instance of EventEmitter, which supports chain calling

```js
var ec = new EventEmitter();

ec.removeAllListeners('test1'); // remove the specified event
ec.removeAllListeners(); // overflow all events
```

### EventEmitter#emit
Synchronously invoke each listener registered as a eventName event and pass in the provided parameters, according to the registration order of the listener.

- param {string} eventName - event name
- param {function} listener - Function
- return {object} EventEmitter - instance of EventEmitter, which supports chain calling

```js
var ec = new EventEmitter();

ec.on('test', function (x, y, z) {
    console.log(x, y, z); // emit incoming parameters
});

ec.emit('test', 1, 2, 3); // log 1, 2, 3
ec.emit('test', 4, 5, 6); // log 4, 5, 6
```

### EventEmitter#listeners
Returns a copy of the listener array of events called eventName.

- param {string} eventName - Event name
- return {array} - array of listener events

```js
var ec = new EventEmitter();

ec.listeners('test'); // []

ec.on('test', fn1);

ec.listeners('test'); // [fn1]
```

## eventCenter
eventCenter is an instance of EventEmitter, which can be used directly as an event center for use by the message center. 

```js
// a.js
eventCenter.on('test', function (msg) {
    console.log(msg); // log 123
});

// b.js
eventCenter.emit('test', 123);
```
