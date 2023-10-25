import { getFoundationById } from "@/prisma/scripts/foundation"
import { updateFoundation } from "@/prisma/scripts/foundation"
import { z } from "zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const schema = z.object({
  name: z.string(),
  setting: z.string()
})

export default async function Foundation({
    params 
  }: { 
    params: { id: number } 
  }) {
    const data = await getFoundationById(Number(params.id))

    async function update(formData: FormData) {
      'use server'
  
      const parsed = schema.parse({
        name: formData.get('name'),
        setting: formData.get('setting'),
      })

      try {
        if (parsed.name !== '' && parsed.setting !== '' ){
          const response = await updateFoundation(Number(params.id), parsed.name, parsed.setting)
        }
        else if (parsed.name !== ''){
          const response = await updateFoundation(Number(params.id), parsed.name)
        }
        else if (parsed.setting !== '' ){
          const response = await updateFoundation(Number(params.id), parsed.setting)
        }
      }
      catch (e) {
        return { message: 'Failed to create' }
      }
  
      revalidatePath('/foundation')
      redirect('/foundation')
    }
  
    return (
        <form className="flex flex-col space-y-2 py-2" action={update}>
          <label htmlFor='name'>Name</label>
          <input type="text" id="name" name='name' placeholder={data.name}></input>
          <label htmlFor='setting'>Setting</label>
          <input type="text" id="setting" name='setting' placeholder={data.setting}></input>
          <button type='submit'>Submit</button>
        </form>
    )
}