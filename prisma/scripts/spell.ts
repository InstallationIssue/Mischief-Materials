import prisma from "./main"

export async function getSpells(){
    return await prisma.spell.findMany({
        select: {
            id          : true,
            name        : true,
            description : true
        }
    })
}

export async function createSpell(name: string, magic: number){
    const spell = await prisma.spell.create({
        data: {
            name    : name,
            magicId   : magic
        }
      })
    return spell
}

export async function updateSpell(id: number, name?: string) {
    const spell = await prisma.spell.update({
        where: {
            id: id
        },
        data: {
            name        : name
        }
    })
    return spell
}

export async function getSpellById(id: number){
    return await prisma.spell.findUniqueOrThrow({
        where: {
            id: id
        },
        select: {
            name        : true,
            description : true
        }
    })
}

export async function deleteSpell(id: number){
    return await prisma.spell.delete({
        where: {
            id: id
        }
    })
}
