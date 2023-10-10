import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Foundations
export async function getFoundations(){
  return await prisma.foundation.findMany({
      select: {
          id      : true,
          name    : true,
          setting : true
      }
  })
}

export async function createFoundation(name: string, setting: string){

  const foundation = await prisma.foundation.create({
      data: {
          name: name,
          setting: setting
      }
    })
  return foundation
}

export async function updateFoundation(id: number, name?: string, setting?: string) {
  const foundation = await prisma.foundation.update({
      where: {
          id: id
      },
      data: {
          name: name,
          setting: setting
      }
  })
  return foundation
}

export async function getFoundationById(id: number){
  return await prisma.foundation.findUniqueOrThrow({
      where: {
          id: id
      },
      select: {
          name: true,
          setting: true
      }
  })
}

export async function deleteFoundation(id: number){
  return await prisma.foundation.delete({
      where: {
          id: id
      }
  })
}

// Scenarios
export async function getScenarios(){
  return await prisma.scenario.findMany({
      select: {
          id: true,
          name: true,
          description: true,
          foundationId: true
      }
  })
}

export async function createScenario(name: string, description: string, foundationId: number){
  const scenario = await prisma.scenario.create({
      data: {
          name: name,
          description: description,
          foundationId: foundationId
      }
    })
  return scenario
}

export async function updateScenario(id: number, name?: string, description?: string, foundationId?: number) {
  const scenario = await prisma.scenario.update({
      where: {
          id: id
      },
      data: {
          name: name,
          description: description,
          foundationId: foundationId
      }
  })
  return scenario
}

export async function getScenarioById(id: number){
  return await prisma.scenario.findUniqueOrThrow({
      where: {
          id: id
      },
      select: {
          name: true,
          description: true
      }
  })
}

export async function deleteScenario(id: number){
  return await prisma.scenario.delete({
      where: {
          id: id
      }
  })
}

// Characters
export async function getCharacters(){
  return await prisma.character.findMany({
      select: {
          id: true,
          name: true,
          background: true,
          xp: true,
          level: true,
          health_max: true,
          health_lost: true,
          armor: true,
          str: true,
          dex: true,
          wil: true,
          physical_features: true,
          npc: true
      }
  })
}

export async function createCharacter(name: string, background: string,
  str = 0, dex = 0, wil = 0, armor = 6, physical_features = "", npc = true){

  const character = await prisma.character.create({
      data: {
          name: name,
          background: background,
          xp: 0,
          level: 1,
          armor: armor,
          str: str,
          dex: dex,
          wil: wil,
          physical_features: physical_features,
          npc: npc
      }
    })
  return character
}

export async function updateCharacter(id: number, name?: string, background?: string,
  armor?: number, str?: number, dex?: number, wil?: number, physical_features?: string,
  npc?: boolean
  ) {
  const character = await prisma.character.update({
      where: {
          id: id
      },
      data: {
          name: name,
          background: background,
          armor: armor,
          str: str,
          dex: dex,
          wil: wil,
          physical_features: physical_features,
          npc: npc
      }
  })
  return character
}

export async function getCharacterById(id: number){
  return await prisma.character.findUniqueOrThrow({
      where: {
          id: id
      },
      select: {
          name: true,
          background: true,
          xp: true,
          level: true,
          health_max: true,
          health_lost: true,
          armor: true,
          str: true,
          dex: true,
          wil: true,
          physical_features: true,
          npc: true
      }
  })
}

export async function deleteCharacter(id: number){
  return await prisma.character.delete({
      where: {
          id: id
      }
  })
}

export async function addXp(id: number, xp: number){
  //x(x+1) = xp boundary
  //x = ceil(-1 - Math.sqrt(-1+4*this.xp))/2;
  //x = floor(1 + Math.sqrt(1+4*this.xp))/2
  let level = Math.floor(1 + Math.sqrt(1+4*xp))/2;
  //xp boundaries
  //2 6 12 20 30 42

  const character = await prisma.character.update({
      where: {
          id: id
      },
      data: {
          xp: xp,
          level: level
      }
  })
  return character
}

export async function LoseHealth(id: number, health_lost: number) {
  const character = await prisma.character.update({
      where: {
          id: id
      },
      data: {
          health_lost: health_lost
      }
  })
  return character
}

// Monsters
export async function getMonsters(){
  return await prisma.monster.findMany({
      select: {
          id          : true,
          name        : true,
          background  : true, 
          health_max  : true,
          health_lost : true,
          armor       : true,
          str         : true,
          dex         : true,
          wil         : true,
          size        : true,
          attack      : true,
      }
  })
}

export async function createMonster(name: string, background: string,
  str = 0, dex = 0, wil = 0, armor = 6, size = "Typical", attack = 0){

  const monster = await prisma.monster.create({
      data: {
          name        : name,
          background  : background,
          health_max  : 4,
          health_lost : 0,
          armor       : armor,
          str         : str,
          dex         : dex,
          wil         : wil,
          size        : size,
          attack      : attack
      }
    })
  return monster
}

export async function updateMonster(id: number, name?: string, background?: string,
  armor?: number, str?: number, dex?: number, wil?: number, size?: string, attack?: number
  ) {
  const monster = await prisma.monster.update({
      where: {
          id: id
      },
      data: {
          name        : name,
          background  : background,
          health_max  : 4,
          health_lost : 0,
          armor       : armor,
          str         : str,
          dex         : dex,
          wil         : wil,
          size        : size,
          attack      : attack
      }
  })
  return monster
}

export async function getMonsterById(id: number){
  return await prisma.monster.findUniqueOrThrow({
      where: {
          id: id
      },
      select: {
          name        : true,
          background  : true, 
          health_max  : true,
          health_lost : true,
          armor       : true,
          str         : true,
          dex         : true,
          wil         : true,
          size        : true,
          attack      : true,
      }
  })
}

export async function deleteMonster(id: number){
  return await prisma.monster.delete({
      where: {
          id: id
      }
  })
}

// Main
async function main() {
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })