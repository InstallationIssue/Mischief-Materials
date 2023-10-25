import prisma from "./main"

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

//Check for no health
export async function LoseHealth(id: number, health_lost: number) {
    const monster = await prisma.monster.update({
        where: {
            id: id
        },
        data: {
            health_lost: health_lost
        }
    })
    return monster
}