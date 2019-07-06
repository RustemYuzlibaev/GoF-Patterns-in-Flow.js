// Bridge splits a set of closely related classes into two separate
// hierarchies - abstraction and implementation - which can be developed
// independently of each other

class NodeJS {
    writeCode() {
        console.log('Node.js developer writes Node.js code...');
    }
}

class Python {
    writeCode() {
        console.log('Python developer writes Python code...');
    }
}

class Program {
    constructor(developer) {
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
    constructor(developer) {
        super(developer);
    }

    developProgram() {
        console.log('Bank System development in progress...');
        this.developer.writeCode();
    }
}
class StockExchange extends Program {
    constructor(developer) {
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
