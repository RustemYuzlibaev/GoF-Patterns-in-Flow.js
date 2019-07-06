// @flow

// Factory defines an interface for creating an entity, but lets subclasses deside
// which class to instantiate

interface Car {
    getModel(): string;
}

// concrete products
class MercedesCar implements Car {
    getModel(): string {
        return 'Mercedes';
    }
}

class BMWCar implements Car {
    getModel(): string {
        return 'BMW';
    }
}

class DefaultCar implements Car {
    getModel(): string {
        return 'Default car';
    }
}

// factory
class CarCreator {
    // factory method()
    getCar(type: string): Car {
        if (type === 'Mercedes') return new MercedesCar();
        if (type === 'BMW') return new BMWCar();
        return new DefaultCar();
    }
}

const factory: CarCreator = new CarCreator();
const bmwCar = factory.getCar('BMW');
bmwCar.getModel();
