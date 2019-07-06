// @flow

// Iterator allows sequential traversal through a complex data
// structure without exposing its internal details

interface Iterator {
    hasNext(): boolean;
    next(): string | void;
}

class PointIterator implements Iterator {
    points: Array<string>;
    index: number;

    constructor(points: Array<string>) {
        this.points = points;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.points.length;
    }

    next() {
        if (this.hasNext()) {
            return this.points[this.index++];
        }
    }
}

interface Collection {
    getIterator(): PointIterator;
}

class DataSet implements Collection {
    points: Array<string>;

    constructor(points: Array<string>) {
        this.points = points;
    }

    getIterator(): PointIterator {
        return new PointIterator(this.points);
    }
}

const points = ['A', 'B', 'C', 'D'];
const collection: DataSet = new DataSet(points);
const it = collection.getIterator();
it.next(); // A
it.next(); // B
it.next(); // C
it.next(); // D
it.next(); // undefined
