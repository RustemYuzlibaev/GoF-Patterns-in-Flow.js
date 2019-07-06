// Decorator lets attach new behaviors to objects by placing  these objects
// inside special wrapper objects that contain the behaviors

class Text {
    display() {
        return 'Hello World';
    }
}

/* Parent of all decorators. Contains wrapping */

class TextDecorator {
    constructor(text) {
        this.text = text;
    }

    display() {
        return this.text.display();
    }
}

class ExclamationTextDecorator extends TextDecorator {
    display() {
        return this.text.display() + '!';
    }
}

class UppercaseTextDecorator extends TextDecorator {
    display() {
        return this.text.display().toUpperCase();
    }
}

const text = new Text();

text.display(); // Hello World

const decorator = new ExclamationTextDecorator(text);

decorator.display(); // Hello World!

const decorator2 = new UppercaseTextDecorator(
    new ExclamationTextDecorator(text),
);

decorator2.display(); // HELLO WORLD!
