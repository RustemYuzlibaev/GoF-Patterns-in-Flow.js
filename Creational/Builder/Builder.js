// Builder allows constructing complex objects step by step

class Laptop {}

class MacLaptopBuilder {
    create() {
        this.laptop = new Laptop();
    }

    setOS() {
        this.laptop.os = 'Mac OS';
    }

    setCPU(cpu) {
        this.laptop.cpu = cpu;
    }

    setGPU(gpu) {
        this.laptop.gpu = gpu;
    }

    setMemory(amount) {
        this.laptop.memoryAmount = amount;
    }

    getInstance() {
        return this.laptop;
    }
}

class Director {
    static constructMacbook(builder) {
        builder.create();
        builder.setOS();
        builder.setCPU('Intel Core i9');
        builder.setGPU('Radeon Pro 555X');
        builder.setMemory(16);
    }

    // other methods
}

const builder = new MacLaptopBuilder();
Director.constructMacbook(builder);

const laptop = builder.getInstance();
