import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getCreatures(){
    return await prisma.creature.findMany()
}

async function getCreaturesSmall(){
    return await prisma.creature.findMany({
        select: {
            name: true,
            str: true,
            dex: true,
            wil: true
        }
    })
}

async function createCreature(name: string, description: string,
    str = 0, dex = 0, wil = 0, armor = 6, health_max = 4) {
    const creature = await prisma.creature.create({
        data: {
          name: name,
          description: description,
          str: str,
          dex: dex,
          wil: wil,
          health_max: health_max,
          health_lost: 0,
          armor: armor,
        },
      })
    return creature
}

async function updateCreature(id: number, name?: string, description?: string,
    str?: number, dex?: number, wil?: number, armor?: number, health_max?: number) {
    const creature = await prisma.creature.update({
        where: {
            id: id
        },
        data: {
            name: name,
            description: description,
            str: str,
            dex: dex,
            wil: wil,
            health_max: health_max,
            health_lost: 0,
            armor: armor,
        }
    })
    return creature
}

async function getCreatureById(id: number){
    return await prisma.creature.findUniqueOrThrow({
        where: {
            id: id
        }
    })
}

//Check for no health
async function creatureLoseHealth(id: number, health_lost: number) {
    const old_creature = await getCreatureById(id)

    let health = old_creature.health_max - old_creature.health_lost - health_lost

    if (health > 0){
        const creature = await prisma.creature.update({
            where: {
                id: id
            },
            data: {
                health_lost: health_lost
            }
        })

        return creature.health_max - creature.health_lost
    }
    else {
        return false
    }
}