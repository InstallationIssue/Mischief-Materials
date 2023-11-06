'use client'

import { createCharacter } from "@/prisma/scripts/character"
import { z } from "zod"
import { revalidatePath } from "next/cache"
import SingleLineText from "../form-fields/singleLineText"
import FormButtons from "../form-fields/formButtons"

const schema = z.object({
  name: z.string(),
  background: z.string(),
  level: z.number()
})
/*
async function create(formData: FormData) {
  'use server'

  const parsed = schema.parse({
    name: formData.get('name'),
    setting: formData.get('setting'),
  })

  try {
    const response = await createCharacter(parsed.name, parsed.setting)
  }
  catch (e) {
    return { message: 'Failed to create' }
  }
    
  return revalidatePath('/')
}
*/

function create () {}

export default async function AddCharacter() {
  return (
      <form className="flex flex-col space-y-2 py-2" action={create}>
        <SingleLineText id="name"/>
        <SingleLineText id="background"/>
        <FormButtons/>
      </form>
  )
}