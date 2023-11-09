'use client'

import { createItem } from "@/prisma/scripts/item"
import { z } from "zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import SingleLineText from "../formFields/singleLineText"
import Value from "../formFields/value"
import FormButtons from "../formFields/formButtons"

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

function randomise() {}

export default async function AddItem(){
    return (
        <div className="w-3/4">
            <form className="flex flex-col gap-2 p-2" action={create}>
                <span className="w-full flex flex-row gap-2">
                    <SingleLineText id={'name'}/>
                    <Value id={"value"}/>
                </span>
                <SingleLineText id={'description'}/>
                <FormButtons/>
            </form>
        </div>
    )
}