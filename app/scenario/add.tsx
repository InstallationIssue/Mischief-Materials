import { createScenario } from "@/prisma/scripts/scenario"
import { z } from "zod"
import { revalidatePath } from "next/cache"


const schema = z.object({
  name: z.string(),
  description: z.string(),
  foundationId: z.number()
})

export default async function Add() {
  
  async function create(formData: FormData) {
    'use server'

    const parsed = schema.parse({
      name: formData.get('name'),
      description: formData.get('description'),
      foundationId: formData.get('foundationId')
    })

    const response = await createScenario(parsed.name, parsed.description, parsed.foundationId)
    
    revalidatePath('/')
  }
 
  return <form className="flex flex-col space-y-2 py-2" action={create}>
    <label htmlFor='name'>Name</label>
    <input type="text" id="name" name='name'></input>
    <label htmlFor='description'>Description</label>
    <input type="text" id="description" name='description'></input>
    <button type='submit'></button>
  </form>
}