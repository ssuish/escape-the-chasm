//Sample objective object
//Edit this code once gameplay is finalized

interface StarObjective {
  objective: string;
  completed: boolean;
}

interface LevelData {
  name: string;
  stars: StarObjective[];
}

export const levelObjectives: { [key: string]: LevelData } = {
    level1: {
      name: "First Escape",
      stars: [
        {
          objective: "Defeat 10 enemies",
          completed: false,
        },
        {
          objective: "Defeat 5 enemies",
          completed: false,
        },
        {
          objective: "Complete the stage with 25% health or above",
          completed: false,
        },
      ],
    },
    //add more levels here
    
    level2: 
    {
      name: "Second Escape",
      stars: 
      [
        {
          objective: "Defeat all enemies",
          completed: false,

        },
        {
          objective: "Complete the stage with 25% health or above",
          completed: false,
        },
        {
          objective: "Complete the stage with 50% health or above",
          completed: false,
        },
      ],
    },

    level3: 
    {
      name: "Third Escape",
      stars: 
      [
        {
          objective: "Defeat all enemies",
          completed: false,

        },
        {
          objective: "Complete the stage with 30% health or above",
          completed: false,
        },
        {
          objective: "Complete the stage with 60% health or above",
          completed: false,
        },
      ],
    },

    level4: 
    {
      name: "Fourth Escape",
      stars: 
      [
        {
          objective: "Defeat all enemies",
          completed: false,

        },
        {
          objective: "Complete the stage with 50% health or above",
          completed: false,
        },
        {
          objective: "Complete the stage with 75% health or above",
          completed: false,
        },
      ],
    },

    level5: 
    {
      name: "Final Escape",
      stars: 
      [
        {
          objective: "Defeat all enemies",
          completed: false,

        },
        {
          objective: "Complete the stage with 90% health",
          completed: false,
        },
        {
          objective: "Complete the stage without enemies falling",
          completed: false,
        },
      ],
    },

    /*level2: {
      name: "Second Escape",
      stars: [
        {
          objective: "Defeat 10 enemies",
          event: 'defeated5Enemies'

        },
        {
          objective: "Complete the stage with 50% health or above",
          event: '_50percentHealth'
        },
        {
          objective: "Complete the stage with 25% health or above",
          event: '_25percentHealth'
        },
      ],
    },*/
}
