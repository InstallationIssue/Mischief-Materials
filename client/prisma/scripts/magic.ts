'use server'

import prisma from './db'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

// Read
export async function getMagics(){
    return await prisma.magic.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            medium: true,
            spells: true,
        }
    })
}

export async function getMagicById(id: number){
    return await prisma.magic.findUniqueOrThrow({
        where: {
            id: id
        },
        select: {
            name: true,
            description: true,
            medium: true,
            spells: true
        }
    })
}

export async function getMagicExtras(id: number){
    return await prisma.magic.findUniqueOrThrow({
        where: {
            id: id
        },
        select: {
            spells: true,
            scenarios: true
        }
    })
}

// Create
export async function createMagic(prevState: any, formData: FormData) {
    const schema = z.object({
        name: z.string(),
        description: z.string(),
        medium: z.string()
    })

    const parsed = schema.parse({
        name: formData.get('name'),
        description: formData.get('description'),
        medium: formData.get('medium')
    })

    try {
        const magic = await prisma.magic.create({
            data: {
                name: parsed.name,
                description: parsed.description,
                medium: parsed.medium
            }
        })
        revalidatePath('/magic')
        return { message: `Added magic ${magic.id}` }
    } catch (e) {
        return { message: 'Failed to create magic' }
    }
}

// Update
export async function updateMagic(prevState: any, formData: FormData) {
    const schema = z.object({
        id: z.number(),
        name: z.string(),
        description: z.string(),
        medium: z.string()
    })

    const parsed = schema.parse({
        id: formData.get('id'),
        name: formData.get('name'),
        description: formData.get('description'),
        medium: formData.get('medium')
    })
    
    try {
        const magic = await prisma.magic.update({
            where: {
                id: parsed.id
            },
            data: {
                name: parsed.name,
                description: parsed.description,
                medium: parsed.medium
            }
        })
        revalidatePath('/magic')
        return { message: `Updated magic ${magic.id}` }
    } catch (e) {
        return { message: 'Failed to update magic' }
    }
}

// Delete
export async function deleteMagic(prevState: any, formData: FormData){
    const schema = z.object({
        id: z.number()
    })

    const parsed = schema.parse({
        id: formData.get('id')
    })
    
    try {
        const magic = await prisma.magic.delete({
            where: {
                id: parsed.id
            }
        })
        revalidatePath('/magic')
        return { message: `Deleted magic ${parsed.id}` }
    } catch (e) {
        return { message: 'Failed to delete magic' }
    }
}
