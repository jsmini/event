export as namespace jsminiEvent;

export declare class EventEmitter {
    addListener(eventName: string, listener:Function): object;
    on(eventName: string, listener:Function): object;
    once(eventName: string, listener:Function): object;
    removeListener(eventName: string, listener:Function): object;
    off(eventName: string, listener:Function): object;
    removeAllListeners(eventName: string): object;
    emit(eventName: string, args: any): object;
    listeners(eventName: string): Array<any>;
}

export const eventCenter: EventEmitter;
