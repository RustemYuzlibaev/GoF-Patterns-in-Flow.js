// Iterator allows sequential traversal through a complex data
// structure without exposing its internal details

class PointIterator {
    constructor(points) {
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

class DataSet {
    constructor(points) {
        this.points = points;
    }

    getIterator() {
        return new PointIterator(this.points);
    }
}

const points = ['A', 'B', 'C', 'D'];
const collection = new DataSet(points);
const it = collection.getIterator();
it.next(); // A
it.next(); // B
it.next(); // C
it.next(); // D
it.next(); // undefined
