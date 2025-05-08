import { Boot } from "./scenes/Boot";
import { GameOver } from "./scenes/GameOverScene";
import { Level1 } from "./levels/level1";
import { Level2 } from "./levels/level2";
import { Level3 } from "./levels/level3";
import { Level4 } from "./levels/level4";
import { Level5 } from "./levels/level5";
import { MainMenu } from "./scenes/MainMenuScene";
import { GameSettings } from "./scenes/GameSettings";
import { LevelSelection } from "./scenes/LevelSelectionScene";
import { LevelSelection2 } from "./scenes/LevelSelectionScene2";
import { LevelSelection3 } from "./scenes/LevelSelectionScene3";
import { LevelSelection4 } from "./scenes/LevelSelectionScene4";
import { LevelSelection5 } from "./scenes/LevelSelectionScene5";
import { AUTO, Game } from "phaser";
import { Preloader } from "./scenes/Preloader";
import { Background } from "./scenes/Background";
import { gameConfig } from "./config/gameConfig";
import { BaseLevel } from "./levels/BaseLevel";
import { MusicToggle } from "./scenes/MusicToggle";
import { Credits } from "./scenes/CreditsScene";
import { GameVictory } from "./scenes/GameVictoryScene";

// TODO: Replace MainGame to LevelSelection
// Always add new scenes here!
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: gameConfig.screenWidth,
    height: gameConfig.screenHeight,
    parent: "game-container",
    scene: [
        Boot,
        Preloader,
        Background,
        MainMenu,
        LevelSelection,
        LevelSelection2,
        LevelSelection3,
        LevelSelection4,
        LevelSelection5,
        BaseLevel,
        Level1,
        Level2,
        Level3,
        Level4,
        Level5,
        GameOver,
        GameVictory,
        Credits,
        GameSettings,
        MusicToggle,
    ],
    physics: {
        default: "matter",
        matter: {
            debug: false,
        },
    },
    scale: gameConfig.scale,
};

// TODO: Remove the optional initial scene from the initialization
const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
};

export default StartGame;

