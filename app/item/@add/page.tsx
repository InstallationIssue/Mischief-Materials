import { createItem } from "@/app/api/item/item"
import { z } from "zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const schema = z.object({
  name: z.string(),
  description: z.string(),
  value: z.string()
})

export default async function Add() {
  
  async function create(formData: FormData) {
    'use server'

    const parsed = schema.parse({
      name: formData.get('name'),
      description: formData.get('description'),
      value: formData.get('value')
    })

    try {
      const response = await createItem(parsed.name, parsed.description, Number(parsed.value))
    }
    catch (e) {
      return { message: 'Failed to create' }
    }
    
    revalidatePath('/item')
    redirect("/item");
  }
 
  return (
      <form className="flex flex-col space-y-2 py-2" action={create}>
        <label htmlFor='name'>Name</label>
        <input type="text" id="name" name='name'></input>
        <label htmlFor='description'>Description</label>
        <input type="text" id="description" name='description'></input>
        <label htmlFor='value'>Value</label>
        <input type="text" id="value" name='value'></input>
        <button type='submit'>Submit</button>
      </form>
  )
}