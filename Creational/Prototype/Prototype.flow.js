// @flow

// Prototype allows cloning objects without coupling to their specific classes

interface Clonable {
    clone(): Object;
}

class Project implements Clonable {
    id: number;
    projectName: string;
    date: string;
    price: number;

    constructor(id: number, projectName: string, date: string, price: number) {
        this.id = id;
        this.projectName = projectName;
        this.date = date;
        this.price = price;
    }

    clone() {
        return new Project(this.id, this.projectName, this.date, this.price);
    }
}

const master: Project = new Project(
    1,
    'SuperProject',
    new Date().toString(),
    5000,
);

const masterClone1 = master.clone();
masterClone1.id = 2;
