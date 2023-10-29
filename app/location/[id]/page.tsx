import { getLocationById, updateLocation } from "@/prisma/scripts/location"
import { z } from "zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import Boat from '/public/icons/locations/boat.svg'
import Building from '/public/icons/locations/building.svg'
import Campground from '/public/icons/locations/campground.svg'
import City from '/public/icons/locations/city.svg'
import Dungeon from '/public/icons/locations/dungeon.svg'
import Entrance from '/public/icons/locations/entrance.svg'
import Factory from '/public/icons/locations/factory.svg'
import Headquarters from '/public/icons/locations/headquarters.svg'
import Hospital from '/public/icons/locations/hospital.svg'
import Institution from '/public/icons/locations/institution.svg'
import Landmark from '/public/icons/locations/landmark.svg'
import MedicalHouse from '/public/icons/locations/medical-house.svg'
import MountainCity from '/public/icons/locations/mountain-city.svg'
import Mountain from '/public/icons/locations/mountain.svg'
import Outpost from '/public/icons/locations/outpost.svg'
import Store from '/public/icons/locations/store.svg'
import Tent from '/public/icons/locations/tent.svg'
import Volcano from '/public/icons/locations/volcano.svg'
import Warehouse from '/public/icons/locations/warehouse.svg'
import Worship from '/public/icons/locations/worship.svg'

const schema = z.object({
  name: z.string(),
  description: z.string(),
  color: z.string(),
  icon: z.string()
})

export default async function Location({
    params 
  }: { 
    params: { id: number } 
  }) {
    const data = await getLocationById(Number(params.id))

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
          const response = await updateLocation(Number(params.id), parsed.name, parsed.description)
        }
        else if (parsed.name !== ''){
          const response = await updateLocation(Number(params.id), parsed.name, parsed.description)
        }
        else if (parsed.description !== '' ){
          const response = await updateLocation(Number(params.id), parsed.description)
        }
      }
      catch (e) {
        return { message: 'Failed to create' }
      }
  
      revalidatePath('/location')
      redirect('/location')
    }
    */

    return (
      <div>
        <span className="flex flex-row items-center rounded gap-2 w-72 h-10">
          <svg className="h-full aspect-square" fill={data.color} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40"></circle>
          </svg>
          {data.icon == 'boat' && <Boat className='size-icon'/>}
          {data.icon == 'building' && <Building className='size-icon'/>}
          {data.icon == 'campground' && <Campground className='size-icon'/>}
          {data.icon == 'city' && <City className='size-icon'/>}
          {data.icon == 'dungeon' && <Dungeon className='size-icon'/>}
          {data.icon == 'entrance' && <Entrance className='size-icon'/>}
          {data.icon == 'factory' && <Factory className='size-icon'/>}
          {data.icon == 'headquarters' && <Headquarters className='size-icon'/>}
          {data.icon == 'hospital' && <Hospital className='size-icon'/>}
          {data.icon == 'institution' && <Institution className='size-icon'/>}
          {data.icon == 'landmark' && <Landmark className='size-icon'/>}
          {data.icon == 'medical-house' && <MedicalHouse className='size-icon'/>}
          {data.icon == 'mountain-city' && <MountainCity className='size-icon'/>}
          {data.icon == 'mountain' && <Mountain className='size-icon'/>}
          {data.icon == 'outpost' && <Outpost className='size-icon'/>}
          {data.icon == 'store' && <Store className='size-icon'/>}
          {data.icon == 'tent' && <Tent className='size-icon'/>}
          {data.icon == 'volcano' && <Volcano className='size-icon'/>}
          {data.icon == 'warehouse' && <Warehouse className='size-icon'/>}
          {data.icon == 'worship' && <Worship className='size-icon'/>}
          <span className="flex-grow whitespace-nowrap overflow-clip">
            <h2 className="capitalize">{data.name}</h2>
          </span>
        </span>
        <p className="mt-2">{data.description}</p>
        
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