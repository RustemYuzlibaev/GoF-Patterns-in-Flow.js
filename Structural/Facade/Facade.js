// Facade encapsulates a complex subsystem behind a simple interface
// It hides much of the complexity and makes it easy to use

class Database {
    startDatabaseServer() {}
    backup() {}
    stopDatabaseServer() {}
}

class ClientServer {
    startClientServer() {}
    sendBodyToServer() {}
    stopClientServer() {}
}

class BackendServer {
    startBackendServer() {}
    sendDataToDb() {}
    stopBackendServer() {}
}

class FacadeApp {
    db: Database;
    client: ClientServer;
    backend: BackendServer;

    constructor() {
        this.db = new Database();
        this.client = new ClientServer();
        this.backend = new BackendServer();
    }

    startApp() {
        this.db.startDatabaseServer();
        this.client.startClientServer();
        this.backend.startBackendServer();
    }

    stopApp() {
        this.db.stopDatabaseServer();
        this.client.stopClientServer();
        this.backend.stopBackendServer();
    }
}

const app = new FacadeApp();
app.startApp(); // instead of writing all 3 lines of code
