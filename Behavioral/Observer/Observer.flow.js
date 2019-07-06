// @flow

// Observer offers a subscription model in which objects subscribe to an
// event and get notified when the corresponding event occurs

class ListenersMap {
    listeners: any;

    constructor() {
        this.listeners = {};
    }

    add(event: string, listener: Observer) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(listener);
    }

    remove(event: string, listener: Observer) {
        if (!this.listeners[event]) return;

        this.listeners[event] = this.listeners[event].filter(
            l => l !== listener,
        );
    }

    get(event: string) {
        return this.listeners[event] || [];
    }
}

class Observable {
    _listeners: ListenersMap;

    constructor() {
        this._listeners = new ListenersMap();
    }

    subscribe(eventType: string, listener: Observer): void {
        this._listeners.add(eventType, listener);
    }

    unsubscribe(eventType: string, listener: Observer): void {
        console.log(eventType, listener);

        this._listeners.remove(eventType, listener);
    }

    notify(eventType: string, value?: any) {
        this._listeners
            .get(eventType)
            .forEach(listener => listener.update(value));
    }
}

class Publisher extends Observable {
    fireEventA(): void {
        this.notify('EventA', 'someting');
    }

    fireEventB(): void {
        this.notify('EventB', 'something else');
    }
}

interface Observer {
    update(value?: any): void;
}

class ObserverA {
    update(value?: any): void {
        console.log('ObserverA reacted. Passed value:', value);
    }
}

class ObserverB {
    update(value?: any): void {
        console.log('ObserverB reacted. Passed value:', value);
    }
}

const publisher: Publisher = new Publisher();
const observerA = new ObserverA();
const observerB = new ObserverB();

publisher.subscribe('EventA', observerA);
publisher.subscribe('EventB', observerB);
publisher.unsubscribe('EventB', observerB);

publisher.fireEventA();
publisher.fireEventB();
