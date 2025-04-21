// EnemyFactory.ts
import { Scene, Physics } from "phaser";
import { EnemyFootman } from "../entities/EnemyFootman";
import { EnemyGreenEye } from "../entities/EnemyGreenEye"
import CollisionIdentifier from "../logic/CollisionIdentifier";
/*import { AggressiveMovement } from "../behaviors/AggressiveMovement";
import { MeleeAttack } from "../behaviors/MeleeAttack";
import { BasicHealth } from "../behaviors/BasicHealth";*/
import { BaseEnemy } from "../entities/BaseEnemy";
import { Player } from "../entities/Player";

export class EnemyFactory {
    static createEnemy(
        type: string,
        sprite: Physics.Matter.Sprite,
        obstacles: CollisionIdentifier,
        player: Phaser.Physics.Matter.Sprite,
        scene: Scene
    ): BaseEnemy 
    {
        switch (type) 
        {
            case "footman":
                return new EnemyFootman(
                    sprite,
                    obstacles,
                    player,
                    scene
                    /*new AggressiveMovement(2),     // custom speed
                    new MeleeAttack(10),            // damage
                    new BasicHealth(100)            // health*/
                );

            case "archer":
                return new EnemyGreenEye(
                    sprite,
                    obstacles,
                    player,
                    scene
                    /*new AggressiveMovement(1),     // custom speed
                    new MeleeAttack(5),             // damage
                    new BasicHealth(80)             // health*/
                );

            // Add more enemy types here

            default:
                throw new Error(`Unknown enemy type: ${type}`);
        }
    }
}
