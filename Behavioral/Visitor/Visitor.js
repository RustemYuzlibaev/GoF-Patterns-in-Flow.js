// Visitor allows adding new behaviors to existing class without altering
// any existing code

class ConcreteComponentA {
    accept(visitor) {
        visitor.visitConcreteComponentA(this);
    }

    exclusiveMethodOfConcreteComponentA() {
        return 'A';
    }
}

class ConcreteComponentB {
    accept(visitor) {
        visitor.visitConcreteComponentB(this);
    }

    specialMethodOfConcreteComponentB() {
        return 'B';
    }
}

class ConcreteVisitor {
    visitConcreteComponentA(component) {
        console.log(
            `${component.exclusiveMethodOfConcreteComponentA()} (got a functionality of class; do stuff here)`,
        );
    }

    visitConcreteComponentB(component) {
        console.log(
            `${component.specialMethodOfConcreteComponentB()} (got a functionality of class; do stuff here)`,
        );
    }
}

const visitor = new ConcreteVisitor();
const component1 = new ConcreteComponentA();
const component2 = new ConcreteComponentB();

component1.accept(visitor);
component2.accept(visitor);
