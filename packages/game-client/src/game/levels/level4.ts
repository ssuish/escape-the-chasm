import { BaseLevel } from "./BaseLevel";
import { EventBus } from "../EventBus";

export class Level4 extends BaseLevel {
    constructor() {
        super("Level4", 20); // Adjust the enemy number as needed
    }

    preload(): void {
        super.preload();
    }

    create() {
        super.create();
        EventBus.emit("current-scene-ready", this);
    }
}

