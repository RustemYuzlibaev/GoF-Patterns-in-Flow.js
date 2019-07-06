// @flow

// Visitor allows adding new behaviors to existing class without altering
// any existing code

interface Component {
    accept(visitor: Visitor): void;
}

class ConcreteComponentA implements Component {
    accept(visitor: Visitor): void {
        visitor.visitConcreteComponentA(this);
    }

    exclusiveMethodOfConcreteComponentA(): string {
        return 'A';
    }
}

class ConcreteComponentB implements Component {
    accept(visitor: Visitor): void {
        visitor.visitConcreteComponentB(this);
    }

    specialMethodOfConcreteComponentB(): string {
        return 'B';
    }
}

interface Visitor {
    visitConcreteComponentA(component: ConcreteComponentA): void;
    visitConcreteComponentB(component: ConcreteComponentB): void;
}

class ConcreteVisitor implements Visitor {
    visitConcreteComponentA(component: ConcreteComponentA): void {
        console.log(
            `${component.exclusiveMethodOfConcreteComponentA()} (got a functionality of class; do stuff here)`,
        );
    }

    visitConcreteComponentB(component: ConcreteComponentB): void {
        console.log(
            `${component.specialMethodOfConcreteComponentB()} (got a functionality of class; do stuff here)`,
        );
    }
}

const visitor: ConcreteVisitor = new ConcreteVisitor();
const component1: ConcreteComponentA = new ConcreteComponentA();
const component2: ConcreteComponentB = new ConcreteComponentB();

component1.accept(visitor);
component2.accept(visitor);
