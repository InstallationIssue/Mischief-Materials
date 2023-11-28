'use server'

import prisma from './db'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

// Read
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

export async function getScenarioById(id: number){
    return await prisma.scenario.findUniqueOrThrow({
        where: {
            id: id
        },
        select: {
            name: true,
            setting: true,
            description: true,
            image: true,
            locations: true,
            events: true,
            threads: true,
        }
    })
}

export async function getScenarioExtras(id: number){
    return await prisma.scenario.findUniqueOrThrow({
        where: {
            id: id
        },
        select: {
            locations: true,
            characters: true,
            encounters: true,
            items: true,
            magic: true
        }
    })
}

// Create
export async function createScenario(prevState: any, formData: FormData) {
    const schema = z.object({
        name: z.string(),
        description: z.string(),
        image: z.string()
    })

    const parsed = schema.parse({
        name: formData.get('name'),
        description: formData.get('description'),
        image: formData.get('image')
    })

    try {
        const scenario = await prisma.scenario.create({
            data: {
                name: parsed.name,
                description: parsed.description,
                image: parsed.image
            }
        })
        revalidatePath('/scenario')
        return { message: `Added scenario ${scenario.id}` }
    } catch (e) {
        return { message: 'Failed to create scenario' }
    }
}

// Update
export async function updateScenario(prevState: any, formData: FormData) {
    const schema = z.object({
        id: z.number(),
        name: z.string(),
        description: z.string(),
        image: z.string()
    })

    const parsed = schema.parse({
        id: formData.get('id'),
        name: formData.get('name'),
        description: formData.get('description'),
        image: formData.get('image')
    })
    
    try {
        const scenario = await prisma.scenario.update({
            where: {
                id: parsed.id
            },
            data: {
                name: parsed.name,
                description: parsed.description,
                image: parsed.image
            }
        })
        revalidatePath('/scenario')
        return { message: `Updated scenario ${scenario.id}` }
    } catch (e) {
        return { message: 'Failed to update scenario' }
    }
}

// Delete
export async function deleteScenario(prevState: any, formData: FormData){
    const schema = z.object({
        id: z.number()
    })

    const parsed = schema.parse({
        id: formData.get('id')
    })
    
    try {
        const scenario = await prisma.scenario.delete({
            where: {
                id: parsed.id
            }
        })
        revalidatePath('/scenario')
        return { message: `Deleted scenario ${parsed.id}` }
    } catch (e) {
        return { message: 'Failed to delete scenario' }
    }
}