import prisma from "../main"

export async function getCharacters(){
    return await prisma.character.findMany({
        select: {
            id: true,
            name: true,
            xp: true,
            level: true,
            health_max: true,
            health_lost: true,
            armor: true,
            str: true,
            dex: true,
            wil: true,
            att: true,
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
            id: true,
            name: true,
            xp: true,
            level: true,
            health_max: true,
            health_lost: true,
            armor: true,
            str: true,
            dex: true,
            wil: true,
            att: true,
        }
    })
}

export async function getNpcs(){
    return await prisma.character.findMany({
        where: {
            npc: true
        },
        select: {
            id: true,
            name: true,
            xp: true,
            level: true,
            health_max: true,
            health_lost: true,
            armor: true,
            str: true,
            dex: true,
            wil: true,
            att: true,
        }
    })
}

export async function createCharacter(
    name: string, 
    background?: string,
    level?: number,
    health_max?: number,
    str?: number, 
    dex?: number, 
    wil?: number, 
    att?: number, 
    armor?: number, 
    npc?: boolean,
    assets?: string,
    liabilities?: string,
    goals?: string,
    misfortunes?: string,
    missions?: string,
    secrets?: string,
    reputations?: string,
    hobbies?: string
    ){

    const character = await prisma.character.create({
        data: {
            name: name,
            background: background,
            xp: 0,
            level: level,
            health_max: health_max,
            health_lost: 0,
            armor: armor,
            str: str,
            dex: dex,
            wil: wil,
            att: att,
            npc: npc,
            assets: assets,
            liabilities: liabilities,
            goals: goals,
            misfortunes: misfortunes,
            missions: missions,
            secrets: secrets,
            reputations: reputations,
            hobbies: hobbies
        }
      })
    return character
}

export async function updateCharacter(
    id: number, 
    name?: string, 
    background?: string,
    level?: number,
    health_max?: number,
    str?: number, 
    dex?: number, 
    wil?: number, 
    att?: number, 
    armor?: number, 
    npc?: boolean,
    assets?: string,
    liabilities?: string,
    goals?: string,
    misfortunes?: string,
    missions?: string,
    secrets?: string,
    reputations?: string,
    hobbies?: string
    ) {
    const character = await prisma.character.update({
        where: {
            id: id
        },
        data: {
            name: name,
            background: background,
            xp: 0,
            level: level,
            health_max: health_max,
            health_lost: 0,
            armor: armor,
            str: str,
            dex: dex,
            wil: wil,
            att: att,
            npc: npc,
            assets: assets,
            liabilities: liabilities,
            goals: goals,
            misfortunes: misfortunes,
            missions: missions,
            secrets: secrets,
            reputations: reputations,
            hobbies: hobbies
        }
    })
    return character
}

export async function addRelationship(character_id: number, name: string, description: string){}

export async function addScenario(character_id: number, scenario_id: number){}

export async function addItem(character_id: number, item_id: number){}

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
            att: true,
            npc: true,
            assets: true,
            liabilities: true,
            goals: true,
            misfortunes: true,
            missions: true,
            secrets: true,
            reputations: true,
            hobbies: true,
            relationships: true,
            scenarios: true,
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