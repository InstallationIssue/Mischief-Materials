import prisma from "./main"

export async function getMagic(){
    return await prisma.magic.findMany({
        select: {
            id          : true,
            name        : true,
            description : true
        }
    })
}

export async function createMagic(name: string){
    const magic = await prisma.magic.create({
        data: {
            name        : name
        }
      })
    return magic
}

export async function updateMagic(id: number, name?: string) {
    const magic = await prisma.magic.update({
        where: {
            id: id
        },
        data: {
            name        : name
        }
    })
    return magic
}

export async function getMagicById(id: number){
    return await prisma.magic.findUniqueOrThrow({
        where: {
            id: id
        },
        select: {
            name        : true,
            description : true
        }
    })
}

export async function deleteMagic(id: number){
    return await prisma.magic.delete({
        where: {
            id: id
        }
    })
}
