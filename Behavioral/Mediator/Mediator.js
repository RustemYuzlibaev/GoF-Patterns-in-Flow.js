// Mediator reduces coupling between components by making them
// communicate indirectly, through a special mediator

class ConcreteMediator {
    constructor(c1, c2) {
        this.component1 = c1;
        this.component1.setMediator(this);
        this.component2 = c2;
        this.component2.setMediator(this);
    }

    notify(sender, event) {
        if (event === 'A') {
            console.log(
                `Mediator reacts to event 'A' and triggers following operations:`,
            );
            this.component2.doC();
        }

        if (event === 'D') {
            console.log(
                `Mediator reacts to event 'D' and triggers following operations:`,
            );

            this.component1.doB();
            this.component2.doC();
        }
    }
}

class BaseComponent {
    setMediator(mediator) {
        this.mediator = mediator;
    }
}

class Component1 extends BaseComponent {
    doA() {
        console.log('Component1 does A.');
        this.mediator.notify(this, 'A');
    }

    doB() {
        console.log('Component1 does B');
        this.mediator.notify(this, 'B');
    }
}

class Component2 extends BaseComponent {
    doC() {
        console.log('Component2 does C');
        this.mediator.notify(this, 'C');
    }

    doD() {
        console.log('Component2 does D');
        this.mediator.notify(this, 'D');
    }
}

const c1 = new Component1();
const c2 = new Component2();
const mediator = new ConcreteMediator(c1, c2);

console.log('Client triggers operation A.');
c1.doA();

console.log('\n');

console.log('Client triggers operation D.');
c2.doD();
