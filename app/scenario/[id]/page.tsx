import { getScenarioById, updateScenario } from "@/prisma/scripts/api/scenario/scenario"

import { z } from "zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import IcelandLupin from '/public/landscapes/Iceland-Lupin.svg'
import MistyValley from '/public/landscapes/Misty-Valley.svg'
import NeonCity from '/public/landscapes/Neon-City.svg'
import NightMountains from '/public/landscapes/Night-Mountains.svg'
import SunsetDesert from '/public/landscapes/Sunset-Desert.svg'

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
    const scenario = await getScenarioById(Number(params.id))

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

    /*
    {/* 
      <form className="flex flex-col space-y-2 py-2" action={update}>
        <label htmlFor='name'>Name</label>
        <input type="text" id="name" name='name' placeholder={data.name}></input>
        <label htmlFor='setting'>Setting</label>
        <input type="text" id="setting" name='setting' placeholder={data.setting}></input>
        <button type='submit'>Submit</button>
      </form>
    */

    return (
      <div className="w-full">
        <p className="mb-2">{scenario.name}</p>
        <div className="flex flex-row h-full gap-4">
          <div className="flex flex-col h-full w-1/3 gap-2">
            <p>Description</p>
            <div className="relative">
              {scenario.image == 'IcelandLupin' && <IcelandLupin className='card-backing'/>}
              {scenario.image == 'MistyValley' && <MistyValley className='card-backing'/>}
              {scenario.image == 'NeonCity' && <NeonCity className='card-backing'/>}
              {scenario.image == 'NightMountains' && <NightMountains className='card-backing'/>}
              {scenario.image == 'SunsetDesert' && <SunsetDesert className='card-backing'/>}
              {scenario.image == '' && <MistyValley className='card-backing'/>}
              <p className="w-full h-full absolute top-0 bg-slate-500 bg-opacity-60 invisible">{scenario.description}</p>
            </div>
            <p>Story Threads</p>
          </div>
        </div>
      </div>
    )
}