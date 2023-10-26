import prisma from "./main"

export async function getScenarios(){
    return await prisma.scenario.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            image: true
        }
    })
}

export async function createScenario(name: string, description: string, image: string){

    const scenario = await prisma.scenario.create({
        data: {
            name: name,
            description: description,
            image: image
        }
      })
    return scenario
}

export async function updateScenario(id: number, name?: string, description?: string, image?: string) {
    const scenario = await prisma.scenario.update({
        where: {
            id: id
        },
        data: {
            name: name,
            description: description,
            image: image
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
            description: true,
            image: true
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
