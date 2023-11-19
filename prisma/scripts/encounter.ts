'use server'

import prisma from './db'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

// Read

// Create

// Update

// Delete
export async function deleteEncounter(prevState: any, formData: FormData){
    const schema = z.object({
        id: z.number()
    })

    const parsed = schema.parse({
        id: formData.get('id')
    })
    
    try {
        const encounter = await prisma.encounter.delete({
            where: {
                id: parsed.id
            }
        })
        revalidatePath('/encounter')
        return { message: `Deleted encounter ${parsed.id}` }
    } catch (e) {
        return { message: 'Failed to delete encounter' }
    }
}
