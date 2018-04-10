import { isUndefined, isFunction } from '@jsmini/is';

export function EventEmitter() {
    this.eventMap = {};
}

EventEmitter.prototype.addListener = function addListener(eventName, listener) {
    if (!isFunction(listener)) {
        throw new TypeError('addListener second param must is function');
    }

    this.eventMap[eventName] = this.eventMap[eventName] || [];

    this.eventMap[eventName].push(listener);

    return this;
};

EventEmitter.prototype.on = function on(eventName, listener) {
    return this.addListener(eventName, listener);
};

EventEmitter.prototype.once = function once(eventName, listener) {
    if (!isFunction(listener)) {
        throw new TypeError('once second param must is function');
    }

    const fn = (...args) => {
        this.removeListener(eventName, fn);
        listener.apply(this, args);
    };

    fn.eventjsListener = listener;

    return this.addListener(eventName, fn);
};

EventEmitter.prototype.removeListener = function removeListener(eventName, listener) {
    if (!isFunction(listener)) {
        throw new TypeError('removeListener second param must is function');
    }

    let listeners;

    if (!(listeners = this.eventMap[eventName])) {
        return this;
    }

    for (let i = 0; i < listeners.length; i++) {
        if (listeners[i] === listener || listeners[i].eventjsListener === listener) {
            listeners.splice(i, 1);
            break; // 同一个函数多次绑定，每次只移除一个
        }
    }

    if (listeners.length === 0) {
        delete this.eventMap[eventName];
    }

    return this;
};

EventEmitter.prototype.off = function off(eventName, listener) {
    return this.removeListener(eventName, listener);
};

EventEmitter.prototype.removeAllListeners = function removeAllListeners(eventName) {
    if (isUndefined(eventName)) {
        this.eventMap = {};
        return this;
    }

    delete this.eventMap[eventName];

    return this;
};

EventEmitter.prototype.emit = function emit(eventName, ...args) {
    let listeners;

    if (!(listeners = this.eventMap[eventName])) {
        return this;
    }

    // 锁死队列，避免无限循环
    listeners = listeners.slice();

    for (var i = 0; i < listeners.length; i++) {
        listeners[i].apply(this, args);
    }

    return this;
};

EventEmitter.prototype.listeners = function listeners(eventName) {
    return (this.eventMap[eventName] || []).slice();
};

export const eventCenter = new EventEmitter();
