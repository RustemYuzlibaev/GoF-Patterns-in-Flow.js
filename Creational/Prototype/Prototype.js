// Prototype allows cloning objects without coupling to their specific classes

class Project {
    constructor(id, projectName, date, price) {
        this.id = id;
        this.projectName = projectName;
        this.date = date;
        this.price = price;
    }

    clone() {
        return new Project(this.id, this.projectName, this.date, this.price);
    }
}

const master = new Project(1, 'SuperProject', new Date().toString(), 5000);

const masterClone1 = master.clone();
masterClone1.id = 2;
