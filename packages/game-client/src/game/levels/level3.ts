import { BaseLevel } from "./BaseLevel";
import { EventBus } from "../EventBus";

export class Level3 extends BaseLevel {
    constructor() {
        super("Level3", 17); // Adjust the enemy number as needed
    }

    preload(): void {
        super.preload();
    }

    create() {
        super.create();
        EventBus.emit("current-scene-ready", this);
    }
}

