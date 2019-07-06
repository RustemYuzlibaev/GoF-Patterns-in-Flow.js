// Strategy allows clients to dinamically change algorithmic strategies

class ConcreteStrategyA {
    doAlgorithm(data) {
        return data.sort();
    }
}

class ConcreteStrategyB {
    doAlgorithm(data) {
        return data.reverse();
    }
}

class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    doSomeLogic() {
        const res = this.strategy.doAlgorithm(['a', 'ab', 'c', 'dc']);
        console.log(res);
    }
}

const ctx = new Context(new ConcreteStrategyA());
ctx.doSomeLogic();

ctx.setStrategy(new ConcreteStrategyB());
ctx.doSomeLogic();
