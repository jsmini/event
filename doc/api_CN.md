# 文档

包含事件发射器基类EventEmitter，和一个实例化的事件中心对象eventCenter，类似node中的EventEmitter

EventEmitter和eventCenter可以用来[解耦](http://yanhaijing.com/program/2016/09/01/about-coupling/)各个模块之间的关系

## EventEmitter

EventEmitter是一个事件发射器的基类，类似node中的EventEmitter，浏览器中的EventTarget，用处主要有两个，一个是实例化一个事件中心，一个是继承，给子类部署消息接口

事件中心的例子

```js
var ec = new EventEmitter();

ec.on('test', function (msg) {
  console.log(msg); // log 123
});

ec.emit('test', 123);
```

继承的例子

```js
class MyEvent extends EventEmitter {}

var me = new MyEvent();

me.on('test', function (msg) {
  console.log(msg); // log 123
});

me.emit('test', 123);
```

对于不支持ES6环境的情况，可以使用[inherits.js](https://github.com/yanhaijing/inherits.js)

```js
function MyEvent() {}

inherits(MyEvent, EventEmitter);

var me = new MyEvent();

me.on('test', function (msg) {
  console.log(msg); // log 123
});

me.emit('test', 123);
```

每一个EventEmitter的实例会有下面的所有方法，下面单独介绍每个API

### EventEmitter#addListener

添加一个事件

- param {string} eventName 事件名称
- param {function} listener 方法函数
- return {object} EventEmitter的实例，支持链式调用

```js
var ec = new EventEmitter();

ec.addListener('test1', function () { // xxx });
ec.addListener('test2', function () { // xxx });
```

### EventEmitter#on

on方法是addListener方法的一个别名，参数和用法同addListener

### EventEmitter#once

once的功能也是添加一个事件，但是添加的事件只会被调用一次

- param {string} eventName 事件名称
- param {function} listener 方法函数
- return {object} EventEmitter的实例，支持链式调用

```js
var ec = new EventEmitter();

ec.once('test1', function () { // xxx }); // 回调函数只会被调用一次
```

### EventEmitter#removeListener

removeListener用来删除指定的事件的回调

- param {string} eventName 事件名称
- param {function} listener 方法函数
- return {object} EventEmitter的实例，支持链式调用

```js
var ec = new EventEmitter();

function cb() {}
ec.on('test1', cb);

ec.removeListener('test1', cb);
```

removeListener 最多只会从监听器数组里移除一个监听器实例。 如果任何单一的监听器被多次添加到指定 eventName 的监听器数组中，则必须多次调用 removeListener 才能移除每个实例

**注意：**一旦一个事件被触发，所有绑定到它的监听器都会按顺序依次触发。这意味着，在事件触发后、最后一个监听器完成执行前，任何 removeListener() 或 removeAllListeners() 调用都不会从 emit() 中移除它们。 随后的事件会像预期的那样发生

### EventEmitter#off

off方法是removeListener方法的一个别名，参数和用法同removeListener

### EventEmitter#removeAllListeners

移除全部或指定 eventName 的监听器

- param {string} [eventName] 事件名称
- return {object} EventEmitter的实例，支持链式调用

```js
var ec = new EventEmitter();

ec.removeAllListeners('test1'); // 移除指定的事件
ec.removeAllListeners(); // 溢出全部的事件
```

### EventEmitter#emit

按监听器的注册顺序，同步地调用每个注册到名为 eventName 事件的监听器，并传入提供的参数

- param {string} [eventName] 事件名称
- param {xxx} [xxx] 传递的参数
- return {object} EventEmitter的实例，支持链式调用

```js
var ec = new EventEmitter();

ec.on('test', function (x, y, z) {
  console.log(x, y, z); // emit时传入的参数
});

ec.emit('test', 1, 2, 3); // log 1, 2, 3
ec.emit('test', 4, 5, 6); // log 4, 5, 6
```

### EventEmitter#listeners

返回名为 eventName 的事件的监听器数组的副本

- param {string} eventName 事件名称
- return {array} 事件的监听器数组

```js
var ec = new EventEmitter();

ec.listeners('test'); // []

ec.on('test', fn1);

ec.listeners('test'); // [fn1]
```

## eventCenter

eventCenter是EventEmitter的一个实例，可以直接拿来做事件中心，消息中心使用

```js
// a.js
eventCenter.on('test', function (msg) {
  console.log(msg); // log 123
});

// b.js
eventCenter.emit('test', 123);
```
