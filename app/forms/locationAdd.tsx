'use client'

import { createLocation } from "@/prisma/scripts/location"
import { z } from "zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import IconSelect from "./iconSelect"

const schema = z.object({
    name: z.string(),
    description: z.string(),
    color: z.string(),
    icon: z.string()
  })

  /*
async function create(formData: FormData) {
    'use server'

    const parsed = schema.parse({
      name: formData.get('name'),
      description: formData.get('description'),
      color: formData.get('color'),
      icon: formData.get('locationIcon')
    })

    try {
      const response = await createLocation(parsed.name, parsed.description, parsed.color, parsed.icon)
    }
    catch (e) {
      return { message: 'Failed to create' }
    }
    
    revalidatePath('/scenario')
    redirect("/scenario");
}
*/

function create() {}

export default async function AddLocation(){
    return (
        <div className="w-3/4">
            <form className="flex flex-col space-y-2 py-2" action={create}>
                <label htmlFor='name'>Name</label>
                <input type="text" id="name" name='name'></input>
                <label htmlFor='description'>Description</label>
                <input type="text" id="description" name='description'></input>
                <label htmlFor='color'>Color</label>
                <input type="color" id="color" name='color'></input>
                <IconSelect/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}