/*import { IMovementStrategy } from "./IMovementStrategy";
import { BaseEnemy } from "../entities/BaseEnemy";
import { Player } from "../entities/Player";

export class PatrolMovement implements IMovementStrategy {
    private direction: number = 1;
    private patrolDistance: number;
    private startX: number;
    private lastSwitchTime: number = 0;

    constructor(private speed: number, patrolDistance: number = 100) {
        this.patrolDistance = patrolDistance;
    }

    move(enemy: BaseEnemy, _player: Player): void {
        const sprite = enemy.getSprite();

        if (!this.startX) {
            this.startX = sprite.x;
        }

        sprite.setVelocityX(this.speed * this.direction);

        if (Math.abs(sprite.x - this.startX) >= this.patrolDistance) {
            this.direction *= -1;
        }
    }
}*/