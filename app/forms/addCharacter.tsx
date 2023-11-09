'use client'

import { createCharacter } from "@/prisma/scripts/character"
import { z } from "zod"
import { revalidatePath } from "next/cache"
import SingleLineText from "../form-fields/singleLineText"
import SwitchField from "../form-fields/switchField"
import MultiLineText from "../form-fields/multiLineText"
import VitalityLevel from "../form-fields/vitalityLevel"
import TraitsCharacter from "../form-fields/traitsCharacter"
import Details from "../form-fields/details"
import Attributes from "../form-fields/attributes"
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
      <form className="flex flex-col py-2 gap-2" action={create}>
        <div className="flex flex-row">
          <SingleLineText id={"name"}/>
          <SwitchField id={"NPC"}/>
        </div>
        <div className="flex flex-row">
          <MultiLineText id="background"/>
          <VitalityLevel id={""}/>
        </div>
        <TraitsCharacter id={""} clothing={"Clothing"} appearance={"Appearance"} physical_detail={"Physical Detail"} personality={"Personality"} mannerism={"Mannerism"} hobby={"Hobby"}/>
        <Details id={""} profession={""} reputation={""} misfortune={""} goal={""} secret={""} asset={""} liability={""}/>
        <Attributes id={""}/>
        <FormButtons/>
      </form>
  )
}