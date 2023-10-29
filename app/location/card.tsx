import { getLocationById } from "@/prisma/scripts/location"

import Link from "next/link"

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

export default async function LocationCard({
    id
  }: {
    id: number, 
  }) {
    const location = await getLocationById(id);

    return (
        <Link href={`/location/${id}`} className="flex flex-row items-center border rounded p-1 gap-2 w-72 h-10">
          <svg className="h-full aspect-square" fill={location.color} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40"></circle>
          </svg>
          <span className="flex-grow whitespace-nowrap overflow-clip">
            <h4 className="scrolling-text capitalize">{location.name}</h4>
          </span>
          {location.icon == 'boat' && <Boat className='size-icon'/>}
          {location.icon == 'building' && <Building className='size-icon'/>}
          {location.icon == 'campground' && <Campground className='size-icon'/>}
          {location.icon == 'city' && <City className='size-icon'/>}
          {location.icon == 'dungeon' && <Dungeon className='size-icon'/>}
          {location.icon == 'entrance' && <Entrance className='size-icon'/>}
          {location.icon == 'factory' && <Factory className='size-icon'/>}
          {location.icon == 'headquarters' && <Headquarters className='size-icon'/>}
          {location.icon == 'hospital' && <Hospital className='size-icon'/>}
          {location.icon == 'institution' && <Institution className='size-icon'/>}
          {location.icon == 'landmark' && <Landmark className='size-icon'/>}
          {location.icon == 'medical-house' && <MedicalHouse className='size-icon'/>}
          {location.icon == 'mountain-city' && <MountainCity className='size-icon'/>}
          {location.icon == 'mountain' && <Mountain className='size-icon'/>}
          {location.icon == 'outpost' && <Outpost className='size-icon'/>}
          {location.icon == 'store' && <Store className='size-icon'/>}
          {location.icon == 'tent' && <Tent className='size-icon'/>}
          {location.icon == 'volcano' && <Volcano className='size-icon'/>}
          {location.icon == 'warehouse' && <Warehouse className='size-icon'/>}
          {location.icon == 'worship' && <Worship className='size-icon'/>}
        </Link>
    )
}