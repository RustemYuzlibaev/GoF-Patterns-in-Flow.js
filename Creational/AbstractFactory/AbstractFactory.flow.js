// @flow

// Abstract Factory solves the problem of creating entire product
// families without specifying their concrete classes

interface Button {
    render(): void;
}

class WinButton implements Button {
    render() {
        console.log("It's rendering Windows button");
    }
}

class MacButton implements Button {
    render() {
        console.log("It's rendering iOS button");
    }
}

interface Input {
    render(): void;
}

class WinInput implements Input {
    render() {
        console.log("It's rendering Windows input");
    }
}

class MacInput implements Input {
    render() {
        console.log("It's rendering iOS input");
    }
}

interface GUIFactory {
    createButton(): Button;
    createInput(): Input;
}

class WinFactory implements GUIFactory {
    createButton(): WinButton {
        return new WinButton();
    }

    createInput(): WinInput {
        return new WinInput();
    }
}

class MacFactory implements GUIFactory {
    createButton(): MacButton {
        return new MacButton();
    }

    createInput(): MacInput {
        return new MacInput();
    }
}

class Application {
    factory: GUIFactory;
    button: Button;
    input: Input;

    constructor(factory: GUIFactory) {
        this.factory = factory;
        this.createUI();
    }

    createUI(): void {
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
