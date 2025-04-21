/*import { IMovementStrategy } from "./IMovementStrategy";
import { BaseEnemy } from "../entities/BaseEnemy";
import { Player } from "../entities/Player";

export class AggressiveMovement implements IMovementStrategy {
    constructor(private speed: number) {}

    move(enemy: BaseEnemy, player: Player): void {
        const enemySprite = enemy.getSprite();
        const playerPos = player.getCenter();

        const direction = playerPos.x > enemySprite.x ? 1 : -1;
        enemySprite.setVelocityX(this.speed * direction);
    }
}*/