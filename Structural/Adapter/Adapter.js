// Adapter is used to make existing classes work with others without modifying
// their source code

class RoundPlug {
    constructor(radius) {
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }
}

class RoundHole {
    constructor(radius) {
        this.radius = radius;
    }

    fits(plug) {
        return this.radius >= plug.getRadius();
    }
}

/* Incompatible class */
class SquarePlug {
    constructor(size) {
        this.size = size;
    }

    getSize() {
        return this.size;
    }
}

const roundHole = new RoundHole(3);
const roundPlug = new RoundPlug(3);

roundHole.fits(roundPlug); // true

const squarePlug = new SquarePlug(3);

roundHole.fits(squarePlug); // error

/* Adapter */
class SquarePlugAdapter extends RoundPlug {
    constructor(plug) {
        super(Math.sqrt(Math.pow(plug.getSize() / 2, 2) * 2));
    }
}

const squarePlugAdapter = new SquarePlugAdapter(squarePlug);
roundHole.fits(squarePlugAdapter); // works
