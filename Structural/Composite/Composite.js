// Composite allows composing objects into a tree-like structure and
// work with it as if it was a singular object

class Box {
    constructor() {
        this.children = [];
    }

    getPrice() {
        return this.children.reduce((prev, curr) => prev + curr.getPrice(), 0);
    }

    put(item) {
        this.children.push(item);
    }
}

class Product {
    constructor(price) {
        this.price = price;
    }

    getPrice() {
        return this.price;
    }
}

const largeBox = new Box();
const mediumBox = new Box();
const smallBox = new Box();

const iPhone = new Product(800);
const iPad = new Product(1000);
const MacBook = new Product(2600);
const iMac = new Product(5000);

smallBox.put(iPhone);

mediumBox.put(iPad);
mediumBox.put(MacBook);
mediumBox.put(smallBox);

largeBox.put(iMac);
largeBox.put(mediumBox);

largeBox.getPrice(); // 9400
