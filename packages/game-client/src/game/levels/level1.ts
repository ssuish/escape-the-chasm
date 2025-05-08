import { BaseLevel } from "./BaseLevel";
import { EventBus } from "../EventBus";

export class Level1 extends BaseLevel {
    constructor() {
        super("Level1", 12); // Adjust the enemy number as needed
    }

    preload(): void {
        super.preload();
    }

    create() {
        super.create();
        EventBus.emit("current-scene-ready", this);
    }
}

