// Command turns a request into a stand-alone object.
// That lets parameterize methods with different requests, defer or
// queue a request's execution, and support undoable oparations

class Receiver {
    get() {
        console.log('Reading data...');
    }

    post() {
        console.log('Creating data...');
    }

    put() {
        console.log('Updating data...');
    }

    delete() {
        console.log('Deleting data...');
    }
}

class GetCommand {
    constructor(receiver) {
        this.receiver = receiver;
    }

    execute() {
        this.receiver.get();
    }
}

class Invoker {
    constructor() {
        this.commands = [];
    }

    setCommand(command) {
        this.commands.push(command);
    }

    undoCommand() {
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

const invoker = new Invoker();

const receiver = new Receiver();
const getCommand = new GetCommand(receiver);

invoker.setCommand(getCommand);
// invoker.undoCommand();

// deferred
invoker.execute();
