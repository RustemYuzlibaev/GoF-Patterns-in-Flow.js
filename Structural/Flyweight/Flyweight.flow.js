// @flow

// Flyweight lets fit more objects into the shared memory instead of
// keeping all of the data in each object

class Flyweight {
    sharedState: any;
    uniqueState: any;

    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    operation(uniqueState): void {
        const s = JSON.stringify(this.sharedState);
        const u = JSON.stringify(uniqueState);
        console.log(
            `Flyweight: Displaying shared (${s}) and unique (${u}) state`,
        );
    }
}

class FlyweightFactory {
    flyweights: { [key: string]: Flyweight };

    constructor(initialFlyweights: string[][]) {
        this.flyweights = {};
        for (const state of initialFlyweights) {
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }

    getKey(state: string[]): string {
        return state.join('_');
    }

    getFlyweight(sharedState: string[]): Flyweight {
        const key = this.getKey(sharedState);

        if (!(key in this.flyweights)) {
            console.log(
                "FlyweightFactory: Can't find a flyweight, creating new one",
            );
            this.flyweights[key] = new Flyweight(sharedState);
        } else {
            console.log('FlyweightFactory: Reusing existing flyweight');
        }

        return this.flyweights[key];
    }

    listFlyweight(): void {
        const count = Object.keys(this.flyweights).length;
        console.log(`\nFlyweightFactory: I have ${count} flyweights:`);
        for (const key in this.flyweights) {
            console.log(key);
        }
    }
}

const factory = new FlyweightFactory([
    ['Chevrolet', 'Camaro', 'yellow'],
    ['Ford', 'Mustang', 'orange'],
    ['BMW', 'X6M', 'white'],
]);
factory.listFlyweight();

function addCar(
    ff: FlyweightFactory,
    plate: string,
    owner: string,
    brand: string,
    model: string,
    color: string,
) {
    console.log('\nClient: Adding a car...');

    const flyweight = ff.getFlyweight([brand, model, color]);
    flyweight.operation([plate, owner]);
}

addCar(factory, 'CL234IR', 'Rustem Yuzlibaev', 'Ford', 'Mustang', 'orange');
addCar(factory, 'CL622IR', 'Rustem Yuzlibaev', 'Chevrolet', 'Camaro', 'yellow');
addCar(factory, 'CL234IR', 'Rustem Yuzlibaev', 'BMW', 'X5', 'blue');

factory.listFlyweight();
