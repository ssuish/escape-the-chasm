import { BaseLevel } from "./BaseLevel";
import { EventBus } from "../EventBus";

export class Level5 extends BaseLevel {
    constructor() {
        super("Level5", 25); // Adjust the enemy number as needed
    }

    preload(): void {
        super.preload();
    }

    create() {
        super.create();
        EventBus.emit("current-scene-ready", this);
    }
}

