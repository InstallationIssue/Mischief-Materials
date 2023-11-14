'use server'

import prisma from './db'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

// Read
export async function getEncounterInstances(id: number){
    return await prisma.encounterInstance.findMany({
        where: {
            encounter_id: id
        },
        select: {
            monster: true,
            health_lost: true
        }
    })
}

// Create
export async function createEncounterInstance(prevState: any, formData: FormData) {
    const schema = z.object({
        monster_id: z.number(),
        encounter_id: z.number()
    })

    const parsed = schema.parse({
        monster_id: formData.get('monster_id'),
        encounter_id: formData.get('encounter_id')
    })

    try {
        const encounterinstance = await prisma.encounterInstance.create({
            data: {
                monster_id: parsed.monster_id,
                encounter_id: parsed.encounter_id,
                health_lost: 0
            }
        })
        revalidatePath('/encounterinstance')
        return { message: `Added encounterinstance ${encounterinstance.id}` }
    } catch (e) {
        return { message: 'Failed to create encounterinstance' }
    }
}

// Update
export async function updateEncounterInstance(prevState: any, formData: FormData) {
    const schema = z.object({
        id: z.number(),
        monster_id: z.number(),
        encounter_id: z.number()
    })

    const parsed = schema.parse({
        id: z.number(),
        monster_id: formData.get('monster_id'),
        encounter_id: formData.get('encounter_id')
    })
    
    try {
        const encounterinstance = await prisma.encounterInstance.update({
            where: {
                id: parsed.id
            },
            data: {
                monster_id: parsed.monster_id,
                encounter_id: parsed.encounter_id,
                health_lost: 0
            }
        })
        revalidatePath('/encounterinstance')
        return { message: `Updated encounterinstance ${encounterinstance.id}` }
    } catch (e) {
        return { message: 'Failed to update encounterinstance' }
    }
}

// Delete
export async function deleteEncounterInstance(prevState: any, formData: FormData){
    const schema = z.object({
        id: z.number()
    })

    const parsed = schema.parse({
        id: formData.get('id')
    })
    
    try {
        const encounterinstance = await prisma.encounterInstance.delete({
            where: {
                id: parsed.id
            }
        })
        revalidatePath('/encounterinstance')
        return { message: `Deleted encounterinstance ${parsed.id}` }
    } catch (e) {
        return { message: 'Failed to delete encounterinstance' }
    }
}