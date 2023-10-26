import { getScenarioById, updateScenario } from "@/prisma/scripts/scenario"
import { z } from "zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const schema = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string()
})

export default async function Scenario({
    params 
  }: { 
    params: { id: number } 
  }) {
    const data = await getScenarioById(Number(params.id))

    /*
    async function update(formData: FormData) {
      'use server'
  
      const parsed = schema.parse({
        name: formData.get('name'),
        description: formData.get('description'),
        image: formData.get('image')
      })

      try {
        if (parsed.name !== '' && parsed.description !== '' ){
          const response = await updateScenario(Number(params.id), parsed.name, parsed.description)
        }
        else if (parsed.name !== ''){
          const response = await updateScenario(Number(params.id), parsed.name, parsed.description)
        }
        else if (parsed.description !== '' ){
          const response = await updateScenario(Number(params.id), parsed.description)
        }
      }
      catch (e) {
        return { message: 'Failed to create' }
      }
  
      revalidatePath('/scenario')
      redirect('/scenario')
    }
    */

    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        
        {/* 
          <form className="flex flex-col space-y-2 py-2" action={update}>
            <label htmlFor='name'>Name</label>
            <input type="text" id="name" name='name' placeholder={data.name}></input>
            <label htmlFor='setting'>Setting</label>
            <input type="text" id="setting" name='setting' placeholder={data.setting}></input>
            <button type='submit'>Submit</button>
          </form>
        */}
      </div>
    )
}