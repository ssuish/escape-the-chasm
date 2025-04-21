/*import { IAttackStrategy } from "./IAttackStrategy";
import { BaseEnemy } from "../entities/BaseEnemy";
import { Player } from "../entities/Player";

export class MeleeAttack implements IAttackStrategy {
    private cooldown: number = 1000;
    private lastAttackTime: number = 0;

    constructor(private damage: number) {}

    tryAttack(enemy: BaseEnemy, player: Player): void {
        const now = Date.now();
        const enemySprite = enemy.getSprite();
        const playerPos = player.getCenter();
        const distance = Phaser.Math.Distance.Between(
            enemySprite.x,
            enemySprite.y,
            playerPos.x,
            playerPos.y
        );

        const attackRange = 50;

        if (distance <= attackRange && now - this.lastAttackTime > this.cooldown) {
            player.takeDamage?.(this.damage);
            this.lastAttackTime = now;
        }
    }
}*/