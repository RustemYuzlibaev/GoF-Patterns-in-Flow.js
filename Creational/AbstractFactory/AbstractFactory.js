// Abstract Factory solves the problem of creating entire product
// families without specifying their concrete classes

class WinButton {
    render() {
        console.log("It's rendering Windows button");
    }
}

class MacButton {
    render() {
        console.log("It's rendering iOS button");
    }
}

class WinInput {
    render() {
        console.log("It's rendering Windows input");
    }
}

class MacInput {
    render() {
        console.log("It's rendering iOS input");
    }
}

class WinFactory {
    createButton() {
        return new WinButton();
    }

    createInput() {
        return new WinInput();
    }
}

class MacFactory {
    createButton() {
        return new MacButton();
    }

    createInput() {
        return new MacInput();
    }
}

class Application {
    constructor(factory) {
        this.factory = factory;
        this.createUI();
    }

    createUI() {
        this.button = this.factory.createButton();
        this.input = this.factory.createInput();
    }

    render() {
        this.button.render();
        this.input.render();
    }
}

const app = new Application(new MacFactory());

app.render();
// It's rendering iOS button
// It's rendering iOS input
