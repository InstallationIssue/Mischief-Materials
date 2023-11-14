'use server'

import prisma from './db'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

// Read
export async function getEvents(){
    return await prisma.event.findMany({
        select: {
            id: true,
            name: true,
        }
    })
}

export async function getEventById(id: number){
    return await prisma.event.findUniqueOrThrow({
        where: {
            id: id
        },
        select: {
            name: true,
        }
    })
}

// Create
export async function createEvent(prevState: any, formData: FormData) {
    const schema = z.object({
        name: z.string()
    })

    const parsed = schema.parse({
        name: formData.get('name')
    })

    try {
        const event = await prisma.event.create({
            data: {
                name: parsed.name
            }
        })
        revalidatePath('/event')
        return { message: `Added event ${event.id}` }
    } catch (e) {
        return { message: 'Failed to create event' }
    }
}

// Update
export async function updateEvent(prevState: any, formData: FormData) {
    const schema = z.object({
        id: z.number(),
        name: z.string()
    })

    const parsed = schema.parse({
        id: formData.get('id'),
        name: formData.get('name')
    })
    
    try {
        const event = await prisma.event.update({
            where: {
                id: parsed.id
            },
            data: {
                name: parsed.name
            }
        })
        revalidatePath('/event')
        return { message: `Updated event ${event.id}` }
    } catch (e) {
        return { message: 'Failed to update event' }
    }
}

// Delete
export async function deleteEvent(prevState: any, formData: FormData){
    const schema = z.object({
        id: z.number()
    })

    const parsed = schema.parse({
        id: formData.get('id')
    })
    
    try {
        const event = await prisma.event.delete({
            where: {
                id: parsed.id
            }
        })
        revalidatePath('/event')
        return { message: `Deleted event ${parsed.id}` }
    } catch (e) {
        return { message: 'Failed to delete event' }
    }
}