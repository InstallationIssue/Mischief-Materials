import prisma from "../main"

export async function getEncounters(){
    return await prisma.encounter.findMany({
        select: {
            id          : true,
            name        : true,
            monsters    : true
        }
    })
}

export async function createEncounter(name: string){
    const encounter = await prisma.encounter.create({
        data: {
            name        : name
        }
      })
    return encounter
}

export async function updateEncounter(id: number, name?: string) {
    const encounter = await prisma.encounter.update({
        where: {
            id: id
        },
        data: {
            name        : name
        }
    })
    return encounter
}

export async function getEncounterById(id: number){
    return await prisma.encounter.findUniqueOrThrow({
        where: {
            id: id
        },
        select: {
            name        : true,
            monsters    : true
        }
    })
}

export async function deleteEncounter(id: number){
    return await prisma.encounter.delete({
        where: {
            id: id
        }
    })
}
