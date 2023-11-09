'use client'

import { createLocation } from "@/prisma/scripts/location"
import { z } from "zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import SingleLineText from "../formFields/singleLineText"
import Color from "../formFields/color"
import FormButtons from "../formFields/formButtons"
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
        <div>
            <form className="flex flex-col space-y-2 py-2" action={create}>
              <SingleLineText id="name"/>
              <SingleLineText id="description"/>
              <Color/>
              <IconSelect/>
              <FormButtons/>
            </form>
        </div>
    )
}