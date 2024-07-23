'use server'

import prisma from './db'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

// Read
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
            npc: true,
        }
    })
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
            att: true,
            npc: true,
            clothing: true,
            appearance: true,
            physical_detail: true,
            personality: true,
            mannerism: true,
            assets: true,
            liabilities: true,
            goals: true,
            misfortunes: true,
            missions: true,
            secrets: true,
            reputations: true,
            hobbies: true,
            relationships: true,
            items: true
        }
    })
}

export async function getCharacterExtras(id: number){
    return await prisma.character.findUniqueOrThrow({
        where: {
            id: id
        },
        select: {
            background: true,
            assets: true,
            liabilities: true,
            goals: true,
            misfortunes: true,
            missions: true,
            secrets: true,
            reputations: true,
            hobbies: true,
            relationships: true,
            items: true
        }
    })
}

export async function getCharactersBySearch(term: string){
    if (term === ''){
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
                npc: true,
            }
        })
    }
    else {
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
                npc: true,
            },
            where: {
                name: {
                    contains: term,
                    mode: 'insensitive',
                },
            },
        })
    }
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

// Create
export async function createCharacter(prevState: any, formData: FormData) {
    const schema = z.object({
        name: z.string(),
        background: z.string(),
        level: z.number(),
        health_max: z.number(),
        armor: z.number(),
        str: z.number(),
        dex: z.number(),
        wil: z.number(),
        att: z.number(),
        npc: z.boolean(),
        assets: z.string(),
        liabilities: z.string(),
        goals: z.string(),
        misfortunes: z.string(),
        secrets: z.string(),
        hobbies: z.string(),
    })

    const parsed = schema.parse({
        name: formData.get('name'),
        background: formData.get('background'),
        level: formData.get('level'),
        health_max: formData.get('health'),
        armor: formData.get('armor'),
        str: formData.get('str'),
        dex: formData.get('dex'),
        wil: formData.get('wil'),
        att: formData.get('att'),
        npc: formData.get('npc'),
        assets: formData.get(''),
        liabilities: formData.get(''),
        goals: formData.get(''),
        misfortunes: formData.get(''),
        secrets: formData.get(''),
        hobbies: formData.get('')
    })

    try {
        const character = await prisma.character.create({
            data: {
                name: parsed.name,
                background: parsed.background,
                xp: 0,
                level: parsed.level,
                health_max: parsed.health_max,
                health_lost: 0,
                armor: parsed.armor,
                str: parsed.str,
                dex: parsed.dex,
                wil: parsed.wil,
                att: parsed.att,
                npc: parsed.npc,
                assets: parsed.assets,
                liabilities: parsed.liabilities,
                goals: parsed.goals,
                misfortunes: parsed.misfortunes,
                secrets: parsed.secrets,
                hobbies: parsed.hobbies
            }
          })
        revalidatePath('/character')
        return { message: `Added character ${character.id}` }
    } catch (e) {
        return { message: 'Failed to create character' }
    }
}

// Update
export async function updateCharacter(prevState: any, formData: FormData) {
    const schema = z.object({
        id: z.number(),
        name: z.string(),
        background: z.string(),
        level: z.number(),
        health_max: z.number(),
        armor: z.number(),
        str: z.number(),
        dex: z.number(),
        wil: z.number(),
        att: z.number(),
        npc: z.boolean(),
        assets: z.string(),
        liabilities: z.string(),
        goals: z.string(),
        misfortunes: z.string(),
        secrets: z.string(),
        hobbies: z.string(),
    })

    const parsed = schema.parse({
        id: formData.get('id'),
        name: formData.get('name'),
        background: formData.get('background'),
        level: formData.get('level'),
        health_max: formData.get('health'),
        armor: formData.get('armor'),
        str: formData.get('str'),
        dex: formData.get('dex'),
        wil: formData.get('wil'),
        att: formData.get('att'),
        npc: formData.get('npc'),
        assets: formData.get(''),
        liabilities: formData.get(''),
        goals: formData.get(''),
        misfortunes: formData.get(''),
        secrets: formData.get(''),
        hobbies: formData.get('')
    })
    
    try {
        const character = await prisma.character.update({
            where: {
                id: parsed.id
            },
            data: {
                name: parsed.name,
                background: parsed.background,
                xp: 0,
                level: parsed.level,
                health_max: parsed.health_max,
                health_lost: 0,
                armor: parsed.armor,
                str: parsed.str,
                dex: parsed.dex,
                wil: parsed.wil,
                att: parsed.att,
                npc: parsed.npc,
                assets: parsed.assets,
                liabilities: parsed.liabilities,
                goals: parsed.goals,
                misfortunes: parsed.misfortunes,
                secrets: parsed.secrets,
                hobbies: parsed.hobbies
            }
        })
        revalidatePath('/character')
        return { message: `Updated character ${character.id}` }
    } catch (e) {
        return { message: 'Failed to update character' }
    }
}

export async function addRelationship(prevState: any, formData: FormData){}

export async function addItem(prevState: any, formData: FormData){}

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
// Delete
export async function deleteCharacter(prevState: any, formData: FormData){
    const schema = z.object({
        id: z.number()
    })

    const parsed = schema.parse({
        id: formData.get('id')
    })
    
    try {
        const character = await prisma.character.delete({
            where: {
                id: parsed.id
            }
        })
        revalidatePath('/character')
        return { message: `Deleted character ${parsed.id}` }
    } catch (e) {
        return { message: 'Failed to delete character' }
    }
}
