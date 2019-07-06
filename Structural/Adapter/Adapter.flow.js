// @flow

// Adapter is used to make existing classes work with others without modifying
// their source code

class RoundPlug {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }
}

class RoundHole {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    fits(plug: RoundPlug): boolean {
        return this.radius >= plug.getRadius();
    }
}

/* Incompatible class */
class SquarePlug {
    size: number;

    constructor(size: number) {
        this.size = size;
    }

    getSize(): number {
        return this.size;
    }
}

const roundHole: RoundHole = new RoundHole(3);
const roundPlug: RoundPlug = new RoundPlug(3);

roundHole.fits(roundPlug); // true

const squarePlug: SquarePlug = new SquarePlug(3);

// roundHole.fits(squarePlug); // error

/* Adapter */
class SquarePlugAdapter extends RoundPlug {
    constructor(plug: SquarePlug) {
        super(Math.sqrt(Math.pow(plug.getSize() / 2, 2) * 2));
    }
}

const squarePlugAdapter = new SquarePlugAdapter(squarePlug);
roundHole.fits(squarePlugAdapter); // works
