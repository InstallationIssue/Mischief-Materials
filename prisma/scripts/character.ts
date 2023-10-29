import prisma from "./main"

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

export async function getPlayers(){
    return await prisma.character.findMany({
        where: {
            npc: false
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
        }
    })
}

export async function getNpcs(){
    return await prisma.character.findMany({
        where: {
            npc: true
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
            npc: true,
            items: true
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

//Check for no health
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