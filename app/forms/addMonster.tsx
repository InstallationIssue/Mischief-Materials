'use client'

import { createMonster } from "@/prisma/scripts/api/monster/monster"
import { z } from "zod"
import { revalidatePath } from "next/cache"
import SingleLineText from "../form-fields/singleLineText"
import MultiLineText from "../form-fields/multiLineText"
import TraitsMonster from "../form-fields/traitsMonster"
import IconsSize from "../form-fields/iconsSize"
import Attributes from "../form-fields/attributes"

const schema = z.object({
  name: z.string(),
  background: z.string()
})
/*
async function create(formData: FormData) {
    'use server'

    const parsed = schema.parse({
      name: formData.get('name'),
      background: formData.get('background')
    })

    try {
      const response = await createMonster(parsed.name, parsed.background)
    }
    catch (e) {
      return { message: 'Failed to create' }
    }
    
    return revalidatePath('/')
  }
*/

function create () {}

export default function AddMonster() {
  return (
      <form className="w-[660px] flex flex-col gap-2 py-2" action={create}>
        <SingleLineText id={"name"} showRandom={false} name={""}/>
        <MultiLineText id={"background"} name={""}/>
        <TraitsMonster id={"traits"} personality={"Personality"} tactic={"Tactic"} weakness={"Weakness"}/>
        <IconsSize id={"size"}/>
        <Attributes idArmor={"armor"} idLevel={"level"}/>
      </form>
  )
}