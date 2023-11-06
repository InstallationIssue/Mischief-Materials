'use client'

import { createScenario } from "@/prisma/scripts/scenario"
import { z } from "zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import SingleLineText from "../form-fields/singleLineText"
import Image from "../form-fields/image"
import FormButtons from "../form-fields/formButtons"

const schema = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string()
})

/*
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
  
  revalidatePath('/scenario')
  redirect("/scenario");
}
*/

function create () {}

export default async function AddScenario() {
 
  return (
      <form className="flex flex-col space-y-2 py-2 items-center" action={create}>
        <SingleLineText id="name"/>
        <SingleLineText id="description"/>
        <Image/>
        <FormButtons/>
      </form>
  )
}