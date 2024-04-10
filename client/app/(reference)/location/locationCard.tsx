import { getLocationById } from "@/prisma/scripts/location"

import Link from "next/link"

import Boat from '/public/icons/locations/boat.svg'
import Building from '/public/icons/locations/building.svg'
import Campground from '/public/icons/locations/campground.svg'
import City from '/public/icons/locations/city.svg'
import Dungeon from '/public/icons/locations/dungeon.svg'
import Entrance from '/public/icons/locations/entrance.svg'
import Factory from '/public/icons/locations/factory.svg'
import Hideout from '/public/icons/locations/hideout.svg'
import Home from '/public/icons/locations/home.svg'
import Hospital from '/public/icons/locations/hospital.svg'
import Institution from '/public/icons/locations/institution.svg'
import Landmark from '/public/icons/locations/landmark.svg'
import LocationIcon from '/public/icons/locations/location.svg'
import Medical from '/public/icons/locations/medical.svg'
import Mountain from '/public/icons/locations/mountain.svg'
import Mountown from '/public/icons/locations/mountown.svg'
import Obelisk from '/public/icons/locations/obelisk.svg'
import Outpost from '/public/icons/locations/outpost.svg'
import Ship from '/public/icons/locations/ship.svg'
import Store from '/public/icons/locations/store.svg'
import Tent from '/public/icons/locations/tent.svg'
import Volcano from '/public/icons/locations/volcano.svg'
import Warehouse from '/public/icons/locations/warehouse.svg'
import Worship from '/public/icons/locations/worship.svg'

export default async function LocationCard({
    id, color, icon, name
  }: {
    id: number, color: string, icon: string, name: string
  }) {
    
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-2">
        <Link href={`/location/${id}`} className="flex flex-row items-center border rounded-lg p-2 gap-2 h-12 fill-primary-light">
          <svg className="h-full aspect-square" fill={color} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40"></circle>
          </svg>
          <span className="flex-grow whitespace-nowrap overflow-clip">
            <p className="scrolling-text capitalize">{name}</p>
          </span>
          {icon == 'boat' && <Boat className='h-full aspect-square fill-primary-light'/>}
          {icon == 'building' && <Building className='h-full aspect-square fill-primary-light'/>}
          {icon == 'campground' && <Campground className='h-full aspect-square fill-primary-light'/>}
          {icon == 'city' && <City className='h-full aspect-square fill-primary-light'/>}
          {icon == 'dungeon' && <Dungeon className='h-full aspect-square fill-primary-light'/>}
          {icon == 'entrance' && <Entrance className='h-full aspect-square fill-primary-light'/>}
          {icon == 'factory' && <Factory className='h-full aspect-square fill-primary-light'/>}
          {icon == 'hideout' && <Hideout className='h-full aspect-square fill-primary-light'/>}
          {icon == 'home' && <Home className='h-full aspect-square fill-primary-light'/>}
          {icon == 'hospital' && <Hospital className='h-full aspect-square fill-primary-light'/>}
          {icon == 'institution' && <Institution className='h-full aspect-square fill-primary-light'/>}
          {icon == 'landmark' && <Landmark className='h-full aspect-square fill-primary-light'/>}
          {icon == 'location' && <LocationIcon className='h-full aspect-square fill-primary-light'/>}
          {icon == 'medical' && <Medical className='h-full aspect-square fill-primary-light'/>}
          {icon == 'mountain' && <Mountain className='h-full aspect-square fill-primary-light'/>}
          {icon == 'mountown' && <Mountown className='h-full aspect-square fill-primary-light'/>}
          {icon == 'obelisk' && <Obelisk className='h-full aspect-square fill-primary-light'/>}
          {icon == 'outpost' && <Outpost className='h-full aspect-square fill-primary-light'/>}
          {icon == 'ship' && <Ship className='h-full aspect-square fill-primary-light'/>}
          {icon == 'store' && <Store className='h-full aspect-square fill-primary-light'/>}
          {icon == 'tent' && <Tent className='h-full aspect-square fill-primary-light'/>}
          {icon == 'volcano' && <Volcano className='h-full aspect-square fill-primary-light'/>}
          {icon == 'warehouse' && <Warehouse className='h-full aspect-square fill-primary-light'/>}
          {icon == 'worship' && <Worship className='h-full aspect-square fill-primary-light'/>}
        </Link>
      </div>
    )
}