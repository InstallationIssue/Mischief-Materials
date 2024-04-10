'use server'

import prisma from './db'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

// Read
export async function getRelationships(id: number){
    return await prisma.relationship.findMany({
        where: {
            character_id: id
        },
        select: {
            id: true,
            name: true,
            description: true,
        }
    })
}

export async function getRelationshipById(id: number){
    return await prisma.relationship.findUniqueOrThrow({
        where: {
            id: id
        },
        select: {
            name: true,
            description: true
        }
    })
}

// Create
export async function createRelationship(prevState: any, formData: FormData) {
    const schema = z.object({
        name: z.string(),
        description: z.string(),
        character_id: z.number()
    })

    const parsed = schema.parse({
        name: formData.get('name'),
        description: formData.get('description'),
        character_id: formData.get('character_id')
    })

    try {
        const relationship = await prisma.relationship.create({
            data: {
                name: parsed.name,
                description: parsed.description,
                character_id: parsed.character_id
            }
        })
        revalidatePath('/relationship')
        return { message: `Added relationship ${relationship.id}` }
    } catch (e) {
        return { message: 'Failed to create relationship' }
    }
}

// Update
export async function updateRelationship(prevState: any, formData: FormData) {
    const schema = z.object({
        id: z.number(),
        name: z.string(),
        description: z.string(),
        character_id: z.number()
    })

    const parsed = schema.parse({
        id: formData.get('id'),
        name: formData.get('name'),
        description: formData.get('description'),
        character_id: formData.get('character_id')
    })
    
    try {
        const relationship = await prisma.relationship.update({
            where: {
                id: parsed.id
            },
            data: {
                name: parsed.name,
                description: parsed.description,
                character_id: parsed.character_id
            }
        })
        revalidatePath('/relationship')
        return { message: `Updated relationship ${relationship.id}` }
    } catch (e) {
        return { message: 'Failed to update relationship' }
    }
}

// Delete
export async function deleteRelationship(prevState: any, formData: FormData){
    const schema = z.object({
        id: z.number()
    })

    const parsed = schema.parse({
        id: formData.get('id')
    })
    
    try {
        const relationship = await prisma.relationship.delete({
            where: {
                id: parsed.id
            }
        })
        revalidatePath('/relationship')
        return { message: `Deleted relationship ${parsed.id}` }
    } catch (e) {
        return { message: 'Failed to delete relationship' }
    }
}