// @flow

// Chain of responsibility let pass requests along a chain of handlers.
// Upon receivieng a request, each handler decides either to process
// the request and/or to pass it to the next handler in the chain

// Abstract class
class Logger {
    static ERROR: number;
    static WARNING: number;
    static INFO: number;

    next: Logger;
    priority: number;

    constructor(priority: number) {
        this.priority = priority;
    }

    setNext(logger: Logger): Logger {
        return (this.next = logger);
    }

    message(msg: string, priority: number): void {
        if (priority <= this.priority) {
            this.writeMessage(msg);
        }

        if (this.next) {
            this.next.message(msg, priority);
        }
    }

    /* Abstract method */
    writeMessage(msg: string): void {
        throw new TypeError('Abstract method, you need to override it');
    }
}
Logger.ERROR = 1;
Logger.WARNING = 2;
Logger.INFO = 3;

class ConsoleLogger extends Logger {
    writeMessage(msg: string): void {
        console.log('Has been written to the console:', msg);
    }
}

class FSLogger extends Logger {
    writeMessage(msg: string): void {
        console.log('Has been written to the file system', msg);
    }
}

class EmailLogger extends Logger {
    writeMessage(msg: string): void {
        console.log(`Has been written to the dev's email:`, msg);
    }
}

const logger = new ConsoleLogger(Logger.INFO);

logger
    .setNext(new FSLogger(Logger.WARNING))
    .setNext(new EmailLogger(Logger.ERROR));

logger.message('Server is running on port 8000', Logger.INFO);
logger.message('File favicon.ico not found', Logger.WARNING);
logger.message('Ah fuck! Unexpected error', Logger.ERROR);
