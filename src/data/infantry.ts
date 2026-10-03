import { Unit } from "./units";

const MOTORIZED_INFANTRY: Unit = {
  id: "MOTORIZED_INFANTRY",
  description: "Motorized Infantry transported by light vehicles. Its primary role is to hold strategic targets, such as towns or cities.",
  type: "soft",
  data: [
    // Level 1
    {
      level: 1,
      name: "Basic Infantry",
      combat: {
        attack: {
          soft: 3,
          hard: 2.3,
          buildings: 0.1,
          population: 2
        },
        defence: {
          soft: 3.8,
          hard: 2.9,
          fixed_wing: 0.3,
          rotatory_wing: 0.6
        }
      },
      terrain: {
        open_ground: {
          hp: 15,
          speed_val: 1,
          sight_range: 40
        },
        mountains: {
          hp: 15,
          speed_val: 0.33,
          attack_mod: -25,
          sight_range: 40
        },
        forest: {
          hp: 15,
          speed_val: 0.5,
          defence_mod: 25,
          sight_range: 40
        },
        urban: {
          hp: 15,
          speed_val: 0.5,
          defence_mod: 35,
          sight_range: 40
        },
        suburban: {
          hp: 15,
          speed_val: 0.5,
          defence_mod: 35,
          sight_range: 40
        },
        jungle: {
          hp: 15,
          speed_val: 0.33,
          attack_mod: -25,
          sight_range: 40
        },
        tundra: {
          hp: 15,
          speed_val: 0.5,
          attack_mod: -25,
          defence_mod: -25,
          sight_range: 40
        },
        desert: {
          hp: 15,
          speed_val: 1,
          sight_range: 40
        },
        high_seas: {
          hp: 12,
          speed_val: 2.51,
          sight_range: 25
        },
        coastal_waters: {
          hp: 12,
          speed_val: 1.3,
          sight_range: 25
        }
      }
    },

    // Level 2
    {
      level: 2,
      name: "Basic Infantry",
      combat: {
        attack: {
          soft: 4,
          hard: 2.3,
          buildings: 0.1,
          population: 2
        },
        defence: {
          soft: 5,
          hard: 2.9,
          fixed_wing: 0.3,
          rotatory_wing: 0.7
        }
      },
      terrain: {
        open_ground: {
          hp: 15,
          speed_val: 1.3,
          sight_range: 40
        },
        mountains: {
          hp: 15,
          speed_val: 0.43,
          attack_mod: -25,
          sight_range: 40
        },
        forest: {
          hp: 15,
          speed_val: 0.65,
          defence_mod: 25,
          sight_range: 40
        },
        urban: {
          hp: 15,
          speed_val: 0.65,
          defence_mod: 35,
          sight_range: 40
        },
        suburban: {
          hp: 15,
          speed_val: 0.65,
          defence_mod: 35,
          sight_range: 40
        },
        jungle: {
          hp: 15,
          speed_val: 0.43,
          attack_mod: -25,
          sight_range: 40
        },
        tundra: {
          hp: 15,
          speed_val: 0.65,
          attack_mod: -25,
          defence_mod: -25,
          sight_range: 40
        },
        desert: {
          hp: 15,
          speed_val: 1.3,
          sight_range: 40
        },
        high_seas: {
          hp: 12,
          speed_val: 2.51,
          sight_range: 25
        },
        coastal_waters: {
          hp: 12,
          speed_val: 1.3,
          sight_range: 25
        }
      }
    },
  ],
  doctrines: {
    western: {
      hard_damage: 15
    },
  }
}

const MOUNTAIN_INFANTRY = {}

const MECHANIZED_INFANTRY = {}

export default function getInfantry() {
  return [
    MOTORIZED_INFANTRY
  ]
}