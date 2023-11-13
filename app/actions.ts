'use server'

import prisma from './db'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { redirect } from 'next/navigation'

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
        redirect("/scenario")
        return { message: `Added todo ${scenario.id}` }
    } catch (e) {
        return { message: 'Failed to create todo' }
    }
  }