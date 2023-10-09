import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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
