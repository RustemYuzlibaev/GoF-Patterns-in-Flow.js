// @flow

// Strategy allows clients to dinamically change algorithmic strategies

interface Strategy {
    doAlgorithm(data: Array<string>): Array<string>;
}

class ConcreteStrategyA implements Strategy {
    doAlgorithm(data: Array<string>): Array<string> {
        return data.sort();
    }
}

class ConcreteStrategyB implements Strategy {
    doAlgorithm(data: Array<string>): Array<string> {
        return data.reverse();
    }
}

class Context {
    strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    doSomeLogic(): void {
        const res = this.strategy.doAlgorithm(['a', 'ab', 'c', 'dc']);
        console.log(res);
    }
}

const ctx: Context = new Context(new ConcreteStrategyA());
ctx.doSomeLogic();

ctx.setStrategy(new ConcreteStrategyB());
ctx.doSomeLogic();
