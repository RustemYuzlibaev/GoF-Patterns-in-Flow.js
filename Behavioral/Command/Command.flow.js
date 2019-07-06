// @flow

// Command turns a request into a stand-alone object.
// That lets parameterize methods with different requests, defer or
// queue a request's execution, and support undoable oparations

class Receiver {
    get(): void {
        console.log('Reading data...');
    }

    post(): void {
        console.log('Creating data...');
    }

    put(): void {
        console.log('Updating data...');
    }

    delete(): void {
        console.log('Deleting data...');
    }
}

interface Command {
    execute(): void;
}

class GetCommand implements Command {
    receiver: Receiver;

    constructor(receiver: Receiver) {
        this.receiver = receiver;
    }

    execute(): void {
        this.receiver.get();
    }
}

class Invoker {
    commands: Array<Command>;

    constructor() {
        this.commands = [];
    }

    setCommand(command: Command): void {
        this.commands.push(command);
    }

    undoCommand(): void {
        this.commands.pop();
    }

    execute() {
        if (!(this.commands.length === 0)) {
            this.commands.pop().execute();
            return;
        }
        return;
    }
}

const invoker: Invoker = new Invoker();

const receiver: Receiver = new Receiver();
const getCommand = new GetCommand(receiver);

invoker.setCommand(getCommand);
// invoker.undoCommand();

// deferred
invoker.execute();
