// State allows an object to change the behavior when its internal
// state changes

class iPod {
    constructor() {
        this.state = new LockedState(this);
    }

    setState(state) {
        this.state = state;
    }

    play() {
        this.state.pressPlay();
    }

    lock() {
        this.state.pressLock();
    }
}

class State {
    constructor(player) {
        this.player = player;
    }

    pressPlay() {
        throw new TypeError('Abstract method. You need to override it.');
    }

    pressLock() {
        throw new TypeError('Abstract method. You need to override it.');
    }
}

class StandbyState extends State {
    pressPlay() {
        this.player.setState(new PlayingState(this.player));
        console.log('In playing mode...');
    }

    pressLock() {
        this.player.setState(new LockedState(this.player));
        console.log('In locked mode...');
    }
}

class PlayingState extends State {
    pressPlay() {
        this.player.setState(new StandbyState(this.player));
        console.log('In standby mode...');
    }

    pressLock() {
        this.player.setState(new LockedState(this.player));
        console.log('In locked mode...');
    }
}

class LockedState extends State {
    pressPlay() {
        /* Do nothing */
    }

    pressLock() {
        this.player.setState(new StandbyState(this.player));
        console.log('In standby mode...');
    }
}

const player = new iPod();

player.play(); // do nothing

player.lock(); // set to standby mode
player.play(); //set to playing mode
