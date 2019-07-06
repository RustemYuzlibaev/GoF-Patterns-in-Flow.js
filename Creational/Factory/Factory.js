// Factory defines an interface for creating an entity, but lets subclasses deside
// which class to instantiate

// concrete products
class MercedesCar {
    getModel() {
        return 'Mercedes';
    }
}

class BMWCar {
    getModel() {
        return 'BMW';
    }
}

class DefaultCar {
    getModel() {
        return 'Default car';
    }
}

// factory
class CarCreator {
    // factory method()
    getCar(type) {
        if (type === 'Mercedes') return new MercedesCar();
        if (type === 'BMW') return new BMWCar();
        return new DefaultCar();
    }
}

const factory = new CarCreator();
const bmwCar = factory.getCar('BMW');
bmwCar.getModel();
