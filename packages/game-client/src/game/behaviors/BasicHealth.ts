/*import { IHealthBehavior } from "./IHealthBehavior";
import { BaseEnemy } from "../entities/BaseEnemy";

export class BasicHealth implements IHealthBehavior {
    private currentHealth: number;

    constructor(private maxHealth: number) {
        this.currentHealth = maxHealth;
    }

    reduceHealth(enemy: BaseEnemy, amount: number): void {
        this.currentHealth -= amount;
        console.log(`Enemy took ${amount} damage, remaining health: ${this.currentHealth}`);
    }

    isDead(enemy: BaseEnemy): boolean {
        return this.currentHealth <= 0;
    }
}*/