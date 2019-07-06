// @flow

// Proxy provides a placeholder for the original object, allowing to perform something (like
// data validation, security, caching, logging, lazy initialization)

interface Internet {
    connectTo(serverhost: string): void;
}

class RealInternet implements Internet {
    connectTo(serverhost: string): void {
        console.log(`Connecting to ${serverhost}`);
    }
}

class Proxy implements Internet {
    internet: RealInternet;
    bannedSites: Array<string>;

    constructor(internet: RealInternet) {
        this.internet = internet;
        this.bannedSites = this.loadBannedSites();
    }

    loadBannedSites(): Array<string> {
        let arr: Array<string> = ['abc.com', 'def.com', 'ijk.com'];
        return arr;
    }

    connectTo(serverhost: string) {
        if (this.bannedSites.includes(serverhost)) {
            console.log(`Access denied`);
        } else {
            this.internet.connectTo(serverhost);
        }
    }
}

class Client {
    net: Internet;

    constructor(net: Internet) {
        this.net = net;
    }

    connectTo(serverhost: string) {
        this.net.connectTo(serverhost);
    }
}

const net = new RealInternet();
const proxy = new Proxy(net);
const client = new Client(proxy);

client.connectTo('vk.com');
client.connectTo('abc.com');
