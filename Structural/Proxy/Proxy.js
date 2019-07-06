// Proxy provides a placeholder for the original object, allowing to perform something (like
// data validation, security, caching, logging, lazy initialization)

class RealInternet {
    connectTo(serverhost) {
        console.log(`Connecting to ${serverhost}`);
    }
}

class Proxy {
    constructor(internet) {
        this.internet = internet;
        this.bannedSites = this.loadBannedSites();
    }

    loadBannedSites() {
        let arr = ['abc.com', 'def.com', 'ijk.com'];
        return arr;
    }

    connectTo(serverhost) {
        if (this.bannedSites.includes(serverhost)) {
            console.log(`Access denied`);
        } else {
            this.internet.connectTo(serverhost);
        }
    }
}

class Client {
    constructor(net) {
        this.net = net;
    }

    connectTo(serverhost) {
        this.net.connectTo(serverhost);
    }
}

const net = new RealInternet();
const proxy = new Proxy(net);
const client = new Client(proxy);

client.connectTo('vk.com');
client.connectTo('abc.com');
