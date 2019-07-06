// The Singleton pattern is thus known because it restricts instantiation of
// a class to a single object

class Database {
    constructor() {
        this._instance = null;
        /* Database connection code */
    }

    static getInstance() {
        if (!this._instance) {
            this._instance = new Database();
        }

        return this._instance;
    }

    query(sql) {
        /* Execute query */
    }
}

const db = Database.getInstance();
const db2 = Database.getInstance();
db.query(`SELECT * FROM .......`);
db2.query(`ALTER TABLE ....... ADD COLUMN`);

db === db2; // true
