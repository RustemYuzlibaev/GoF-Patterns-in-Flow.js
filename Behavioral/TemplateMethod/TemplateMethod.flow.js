// @flow

// Template Method allows to define a frame of an algorithm in
// a base class and let subclasses override some steps

class AbstractClass {
    templateMethod() {
        this.baseOperation1();
        this.subclassOperation1();
        this.baseOperation2();
        this.hook1();
        this.subclassOperation2();
        this.baseOperation2();
        this.hook2();
    }

    baseOperation1(): void {
        console.log('Abstract Class method: Doing basic work for both classes');
    }

    baseOperation2(): void {
        console.log('Abstract Class method: Doing basic work for both classes');
    }

    hook1(): void {
        console.log('Abstract Class method: Can be overwritten or not');
    }

    hook2(): void {
        console.log('Abstract Class method: Can be overwritten or not');
    }

    subclassOperation1(): void {
        throw new TypeError('Abstract method. You need to override it.');
    }

    subclassOperation2(): void {
        throw new TypeError('Abstract method. You need to override it.');
    }
}

class ConcreteClass1 extends AbstractClass {
    subclassOperation1(): void {
        console.log('Concrete Class #1: Implement Operation1');
    }

    subclassOperation2(): void {
        console.log('Concrete Class #1: Implement Operation2');
    }
}

class ConcreteClass2 extends AbstractClass {
    subclassOperation1(): void {
        console.log('Concrete Class #2: Implement Operation1');
    }

    subclassOperation2(): void {
        console.log('Concrete Class #2: Implement Operation2');
    }

    hook1() {
        console.log('Concrete Class #2: Override Hook1');
    }
}

new ConcreteClass1().templateMethod();
console.log('\n');
new ConcreteClass2().templateMethod();
