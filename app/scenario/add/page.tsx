import { createScenario } from "@/prisma/scripts/scenario"
import { z } from "zod"
import { revalidatePath } from "next/cache"


const schema = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string()
})

export default async function Add() {
  
  async function create(formData: FormData) {
    'use server'

    const parsed = schema.parse({
      name: formData.get('name'),
      description: formData.get('description'),
      image: formData.get('image')
    })

    try {
      const response = await createScenario(parsed.name, parsed.description, parsed.image)
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
        <label htmlFor='description'>Description</label>
        <input type="text" id="description" name='description'></input>
        <label htmlFor='image'>Description</label>
        <input type="text" id="image" name='image'></input>
        <button type='submit'>Submit</button>
      </form>
  )
}