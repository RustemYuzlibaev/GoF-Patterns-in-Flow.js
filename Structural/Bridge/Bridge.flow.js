// @flow

// Bridge splits a set of closely related classes into two separate
// hierarchies - abstraction and implementation - which can be developed
// independently of each other

interface Developer {
    writeCode(): void;
}

class NodeJS implements Developer {
    writeCode() {
        console.log('Node.js developer writes Node.js code...');
    }
}

class Python implements Developer {
    writeCode() {
        console.log('Python developer writes Python code...');
    }
}

class Program {
    developer: Developer;

    constructor(developer: Developer) {
        if (this.constructor === Program) {
            throw new TypeError(
                `Abstract class 'Program' cannot be instantiated directly.`,
            );
        }

        this.developer = developer;
    }

    developProgram() {
        throw TypeError('Abstract method. You need to override it.');
    }
}

class BankSystem extends Program {
    developer: Developer;
    developProgram: Function;

    constructor(developer: Developer) {
        super(developer);
    }

    developProgram() {
        console.log('Bank System development in progress...');
        this.developer.writeCode();
    }
}
class StockExchange extends Program {
    developer: Developer;

    constructor(developer: Developer) {
        super(developer);
    }

    developProgram() {
        console.log('Stock Exchange development in progress...');
        this.developer.writeCode();
    }
}

let programBank = new BankSystem(new NodeJS());
let programStock = new StockExchange(new Python());

programBank.developProgram();
programStock.developProgram();
