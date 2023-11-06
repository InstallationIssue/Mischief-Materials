'use client'

import { createItem } from "@/prisma/scripts/item"
import { z } from "zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import FormButtons from "../form-fields/formButtons"

const schema = z.object({
    name: z.string(),
    description: z.string(),
    value: z.number(),
  })

  /*
async function create(formData: FormData) {
    'use server'

    const parsed = schema.parse({
      name: formData.get('name'),
      description: formData.get('description'),
      value: formData.get('value'),
      icon: formData.get('itemIcon')
    })

    try {
      const response = await createItem(parsed.name, parsed.description, parsed.value, parsed.icon)
    }
    catch (e) {
      return { message: 'Failed to create' }
    }
    
    revalidatePath('/scenario')
    redirect("/scenario");
}
*/

function create(formData: FormData) {
    const parsed = schema.parse({
        name: formData.get('name'),
        description: formData.get('description'),
        value: formData.get('value'),
        icon: formData.get('itemIcon')
      })
    
    console.log(true)
}

export default async function AddItem(){
    return (
        <div className="w-fit">
            <form className="flex flex-col space-y-2 p-2" action={create}>
                <label htmlFor='name'>Name</label>
                <input type="text" id="name" name='name'></input>
                <label htmlFor='description'>Description</label>
                <input type="text" id="description" name='description'></input>
                <label htmlFor='value'>Value</label>
                <input inputMode="numeric" id="value" name='value'></input>
                <FormButtons/>
            </form>
        </div>
    )
}