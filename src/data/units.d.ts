/**
 * COMBAT PROPERTIES
 */

type TargetType =
  | 'soft'
  | 'hard'
  | 'fixed_wing'
  | 'rotatory_wing'
  | 'drones'
  | 'missiles'
  | 'surface_vessels'
  | 'submarines'
  | 'buildings'
  | 'population'

type TargetStats = Partial<Record<TargetType, number>>

export interface CombatProperties {
  attack?: TargetStats
  defence?: TargetStats
  attack_range?: TargetStats
  radar_range?: TargetStats
}

/**
 * TERRAIN INFORMATION 
 */

interface TerrainStats {
  hp: number
  speed_val: number
  attack_mod?: number
  defence_mod?: number
  sight_range: number
}

export interface TerrainInformation {
  open_ground: TerrainStats
  mountains: TerrainStats
  forest: TerrainStats
  urban: TerrainStats
  suburban: TerrainStats
  jungle: TerrainStats
  tundra: TerrainStats
  desert: TerrainStats
  high_seas: TerrainStats
  coastal_waters: TerrainStats
}

/**
 * DOCTRINES
 */

type DoctrineType =
  | 'hard_damage'

type DoctrineStats = Partial<Record<DoctrineType, number>>

/**
 * UNIT
 */

export interface Unit {
  id: string
  description: string
  type: TargetType
  data: {
    level: number
    name: string
    combat: CombatProperties
    terrain: TerrainInformation
  }[]
  doctrines: {
    western?: DoctrineStats
    eastern?: DoctrineStats
    european?: DoctrineStats
  }
}