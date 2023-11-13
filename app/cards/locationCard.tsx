import { getLocationById } from "@/app/api/location/location"

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
        <Link href={`/location/${id}`} className="flex flex-row items-center border rounded-lg p-2 gap-2 w-72 h-12">
          <svg className="h-full aspect-square" fill={location.color} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40"></circle>
          </svg>
          <span className="flex-grow whitespace-nowrap overflow-clip">
            <p className="scrolling-text capitalize">{location.name}</p>
          </span>
          {location.icon == 'boat' && <Boat className='h-full aspect-square'/>}
          {location.icon == 'building' && <Building className='h-full aspect-square'/>}
          {location.icon == 'campground' && <Campground className='h-full aspect-square'/>}
          {location.icon == 'city' && <City className='h-full aspect-square'/>}
          {location.icon == 'dungeon' && <Dungeon className='h-full aspect-square'/>}
          {location.icon == 'entrance' && <Entrance className='h-full aspect-square'/>}
          {location.icon == 'factory' && <Factory className='h-full aspect-square'/>}
          {location.icon == 'headquarters' && <Headquarters className='h-full aspect-square'/>}
          {location.icon == 'hospital' && <Hospital className='h-full aspect-square'/>}
          {location.icon == 'institution' && <Institution className='h-full aspect-square'/>}
          {location.icon == 'landmark' && <Landmark className='h-full aspect-square'/>}
          {location.icon == 'medical-house' && <MedicalHouse className='h-full aspect-square'/>}
          {location.icon == 'mountain-city' && <MountainCity className='h-full aspect-square'/>}
          {location.icon == 'mountain' && <Mountain className='h-full aspect-square'/>}
          {location.icon == 'outpost' && <Outpost className='h-full aspect-square'/>}
          {location.icon == 'store' && <Store className='h-full aspect-square'/>}
          {location.icon == 'tent' && <Tent className='h-full aspect-square'/>}
          {location.icon == 'volcano' && <Volcano className='h-full aspect-square'/>}
          {location.icon == 'warehouse' && <Warehouse className='h-full aspect-square'/>}
          {location.icon == 'worship' && <Worship className='h-full aspect-square'/>}
        </Link>
    )
}