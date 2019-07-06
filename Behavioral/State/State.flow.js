// @flow

// State allows an object to change the behavior when its internal
// state changes

class iPod {
    state: State;

    constructor() {
        this.state = new LockedState(this);
    }

    setState(state: State) {
        this.state = state;
    }

    play(): void {
        this.state.pressPlay();
    }

    lock(): void {
        this.state.pressLock();
    }
}

class State {
    player: iPod;

    constructor(player: iPod) {
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
    pressPlay(): void {
        this.player.setState(new PlayingState(this.player));
        console.log('In playing mode...');
    }

    pressLock(): void {
        this.player.setState(new LockedState(this.player));
        console.log('In locked mode...');
    }
}

class PlayingState extends State {
    pressPlay(): void {
        this.player.setState(new StandbyState(this.player));
        console.log('In standby mode...');
    }

    pressLock(): void {
        this.player.setState(new LockedState(this.player));
        console.log('In locked mode...');
    }
}

class LockedState extends State {
    pressPlay(): void {
        /* Do nothing */
    }

    pressLock(): void {
        this.player.setState(new StandbyState(this.player));
        console.log('In standby mode...');
    }
}

const player: iPod = new iPod();

player.play(); // do nothing

player.lock(); // set to standby mode
player.play(); //set to playing mode
