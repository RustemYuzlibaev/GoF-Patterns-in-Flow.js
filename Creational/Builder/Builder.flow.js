// @flow

// Builder allows constructing complex objects step by step

class Laptop {
    os: string;
    cpu: string;
    gpu: string;
    memoryAmount: number;
}

interface Builder {
    create(): void;
    setOS(): void;
    setCPU(cpu: string): void;
    setGPU(gpu: string): void;
    setMemory(amount: number): void;
}

class MacLaptopBuilder implements Builder {
    laptop: Laptop;

    create() {
        this.laptop = new Laptop();
    }

    setOS() {
        this.laptop.os = 'Mac OS';
    }

    setCPU(cpu: string) {
        this.laptop.cpu = cpu;
    }

    setGPU(gpu: string) {
        this.laptop.gpu = gpu;
    }

    setMemory(amount: number) {
        this.laptop.memoryAmount = amount;
    }

    getInstance(): Laptop {
        return this.laptop;
    }
}

class Director {
    static constructMacbook(builder: Builder) {
        builder.create();
        builder.setOS();
        builder.setCPU('Intel Core i9');
        builder.setGPU('Radeon Pro 555X');
        builder.setMemory(16);
    }

    // other methods
}

const builder: MacLaptopBuilder = new MacLaptopBuilder();
Director.constructMacbook(builder);

const laptop: Laptop = builder.getInstance();
