// Memento allows making snapshots of an object's state and restoring it

class Originator {
    constructor(state) {
        this.state = state;
        console.log(`Originator: My initial state is: ${state}`);
    }

    doSomething() {
        console.log("Originator: I'm doing something important.");
        this.state = this.generateRandomString();
        console.log(`Originator: and my state has changed to: ${this.state}`);
    }

    generateRandomString(length = 10) {
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        return Array(length)
            .map(() =>
                charSet.charAt(Math.floor(Math.random() * charSet.length)),
            )
            .join('');
    }

    save() {
        return new ConcreteMemento(this.state);
    }

    restore(memento) {
        this.state = memento.getState();
        console.log(`Originator: My state has changed to: ${this.state}`);
    }
}

class ConcreteMemento {
    constructor(state) {
        this.state = state;
        this.date = new Date()
            .toISOString()
            .slice(0, 19)
            .replace('T', ' ');
    }

    getState() {
        return this.state;
    }

    getName() {
        return `${this.date} / (${this.state.substr(0, 9)}...)`;
    }

    getDate() {
        return this.date;
    }
}

class Keeper {
    constructor(originator) {
        this.originator = originator;
        this.mementos = [];
    }

    backup() {
        console.log("Keeper: Saving Originator's state...\n");
        this.mementos.push(this.originator.save());
    }

    undo() {
        if (!this.mementos.length) return;
        const memento = this.mementos.pop();

        console.log(`Keeper: Restoring state to: ${memento.getName()}`);
        this.originator.restore(memento);
    }

    showHistory() {
        console.log("Keeper: Here's the list of mementos:");
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}

const originator = new Originator('qwerty');
const keeper = new Keeper(originator);
keeper.backup();

originator.doSomething();
keeper.backup();

originator.doSomething();
keeper.backup();

originator.doSomething();
keeper.backup();

originator.doSomething();
keeper.backup();

originator.doSomething();
originator.doSomething();
keeper.backup();

console.log('\n');
keeper.showHistory();

console.log("\nClient: Now, let's rollback!\n");
keeper.undo();

console.log('\nClient: Once more!\n');
keeper.undo();
