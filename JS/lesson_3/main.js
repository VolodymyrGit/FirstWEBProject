import * as SHOP  from "./shop.js";

class SoundPlauer {
    constructor(sound) {
        this.sound = sound;
    }

    on() {
        console.log(`${this.sound} is on`);
    }

    off() {
        console.log(`${this.sound} is off`);
    }
}

class CassetPlauer extends SoundPlauer{
    constructor(sound) {
        super(sound);
    }

    scroll() {
        console.log(`${this.sound} is scrolling`);
    }
}