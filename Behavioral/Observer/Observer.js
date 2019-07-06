// Observer offers a subscription model in which objects subscribe to an
// event and get notified when the corresponding event occurs

class ListenersMap {
    constructor() {
        this.listeners = {};
    }

    add(event, listener) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(listener);
    }

    remove(event, listener) {
        if (!this.listeners[event]) return;

        this.listeners[event] = this.listeners[event].filter(
            l => l !== listener,
        );
    }

    get(event) {
        return this.listeners[event] || [];
    }
}

class Observable {
    constructor() {
        this._listeners = new ListenersMap();
    }

    subscribe(eventType, listener) {
        this._listeners.add(eventType, listener);
    }

    unsubscribe(eventType, listener) {
        console.log(eventType, listener);

        this._listeners.remove(eventType, listener);
    }

    notify(eventType, value) {
        this._listeners
            .get(eventType)
            .forEach(listener => listener.update(value));
    }
}

class Publisher extends Observable {
    fireEventA() {
        this.notify('EventA', 'someting');
    }

    fireEventB() {
        this.notify('EventB', 'something else');
    }
}

class ObserverA {
    update(value) {
        console.log('ObserverA reacted. Passed value:', value);
    }
}

class ObserverB {
    update(value) {
        console.log('ObserverB reacted. Passed value:', value);
    }
}

const publisher = new Publisher();
const observerA = new ObserverA();
const observerB = new ObserverB();

publisher.subscribe('EventA', observerA);
publisher.subscribe('EventB', observerB);
publisher.unsubscribe('EventB', observerB);

publisher.fireEventA();
publisher.fireEventB();
