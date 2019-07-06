// @flow

// Memento allows making snapshots of an object's state and restoring it

class Originator {
    state: string;

    constructor(state: string) {
        this.state = state;
        console.log(`Originator: My initial state is: ${state}`);
    }

    doSomething(): void {
        console.log("Originator: I'm doing something important.");
        this.state = this.generateRandomString();
        console.log(`Originator: and my state has changed to: ${this.state}`);
    }

    generateRandomString(length: number = 10): string {
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        return Array(length)
            .map(() =>
                charSet.charAt(Math.floor(Math.random() * charSet.length)),
            )
            .join('');
    }

    save(): Memento {
        return new ConcreteMemento(this.state);
    }

    restore(memento: Memento): void {
        this.state = memento.getState();
        console.log(`Originator: My state has changed to: ${this.state}`);
    }
}

interface Memento {
    getState(): string;
    getName(): string;
    getDate(): string;
}

class ConcreteMemento implements Memento {
    state: string;
    date: string;

    constructor(state: string) {
        this.state = state;
        this.date = new Date()
            .toISOString()
            .slice(0, 19)
            .replace('T', ' ');
    }

    getState(): string {
        return this.state;
    }

    getName(): string {
        return `${this.date} / (${this.state.substr(0, 9)}...)`;
    }

    getDate(): string {
        return this.date;
    }
}

class Keeper {
    mementos: Memento[];
    originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
        this.mementos = [];
    }

    backup(): void {
        console.log("Keeper: Saving Originator's state...\n");
        this.mementos.push(this.originator.save());
    }

    undo(): void {
        if (!this.mementos.length) return;
        const memento = this.mementos.pop();

        console.log(`Keeper: Restoring state to: ${memento.getName()}`);
        this.originator.restore(memento);
    }

    showHistory(): void {
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
