import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getMonsters(){
    return await prisma.monster.findMany({
        select: {
            creature: true
        }
    })
}

async function createMonster(name: string, description: string,
    str = 0, dex = 0, wil = 0, armor = 6, health_max = 4, 
    power = 4, size = 'Typical', attack: 0) {
    const monster = await prisma.monster.create({
        data: {
          power: power,
          size: size,
          attack: attack,
          creature: {
            create: {
                name: name,
                description: description,
                str: str,
                dex: dex,
                wil: wil,
                armor: armor,
                health_max: health_max,
                health_lost: 0
            }
          }
        },
      })
    return monster
}

async function updateMonster(id: number, name?: string, description?: string,
    str?: number, dex?: number, wil?: number, armor?: number, health_max?: number,
    power?: number, size?: string, attack?: number) {
    const monster = await prisma.monster.update({
        where: {
            id: id
        },
        data: {
            power: power,
            size: size,
            attack: attack,
            creature: {
                update: {
                    name: name,
                    description: description,
                    str: str,
                    dex: dex,
                    wil: wil,
                    armor: armor,
                    health_max: health_max,
                }
            }
        }
    })
    return monster
}

async function getMonsterById(id: number){
    return await prisma.monster.findUniqueOrThrow({
        where: {
            id: id
        },
        select: {
            creature: true
        }
    })
}