import { createScenario } from "@/prisma/scripts/scenario"
import { z } from "zod"
import { revalidatePath } from "next/cache"


const schema = z.object({
  name: z.string(),
  background: z.string(),
  foundationId: z.number()
})

export default async function Add() {
  
  async function create(formData: FormData) {
    'use server'

    const parsed = schema.parse({
      name: formData.get('name'),
      background: formData.get('background'),
      foundationId: formData.get('foundationId')
    })

    try {
      const response = await createScenario(parsed.name, parsed.background, parsed.foundationId)
    }
    catch (e) {
      return { message: 'Failed to create' }
    }
    
    return revalidatePath('/')
  }
 
  return (
      <form className="flex flex-col space-y-2 py-2" action={create}>
        <label htmlFor='name'>Name</label>
        <input type="text" id="name" name='name'></input>
        <label htmlFor='background'>Background</label>
        <input type="text" id="background" name='background'></input>
        <label htmlFor='foundation'>Foundation</label>
        <input type="number" id="foundationId" name='foundationId'></input>
        <button type='submit'>Submit</button>
      </form>
  )
}