'use client'

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
import Medical from '/public/icons/locations/medical.svg'
import Mountown from '/public/icons/locations/mountown.svg'
import Mountain from '/public/icons/locations/mountain.svg'
import Outpost from '/public/icons/locations/outpost.svg'
import Store from '/public/icons/locations/store.svg'
import Tent from '/public/icons/locations/tent.svg'
import Volcano from '/public/icons/locations/volcano.svg'
import Warehouse from '/public/icons/locations/warehouse.svg'
import Worship from '/public/icons/locations/worship.svg'

export default function RadioInput ({
    id, name
}: { 
    id: string, name: string
}){
    const icons = ['boat', 'building', 'campground', 'city', 'dungeon', 'entrance', 'factory', 'headquarters', 'hospital', 'institution', 'landmark', 'medical', 'mountown', 'mountain', 'outpost', 'store', 'tent', 'volcano', 'warehouse', 'worship']
    
    return (
        <label className='checked:fill-highlight-light flex flex-col items-center p-2 gap-1 last:checked:fill-highlight-light'>
            {id === icons[0] && <Boat className="h-8 aspect-square"/>}
            {id === icons[1] && <Building className="h-8 aspect-square"/>}
            {id === icons[2] && <Campground className="h-8 aspect-square"/>}
            {id === icons[3] && <City className="h-8 aspect-square"/>}
            {id === icons[4] && <Dungeon className="h-8 aspect-square"/>}
            {id === icons[5] && <Entrance className="h-8 aspect-square"/>}
            {id === icons[6] && <Factory className="h-8 aspect-square"/>}
            {id === icons[7] && <Headquarters className="h-8 aspect-square"/>}
            {id === icons[8] && <Hospital className="h-8 aspect-square"/>}
            {id === icons[9] && <Institution className="h-8 aspect-square"/>}
            {id === icons[10] && <Landmark className="h-8 aspect-square"/>}
            {id === icons[11] && <Medical className="h-8 aspect-square"/>}
            {id === icons[12] && <Mountain className="h-8 aspect-square"/>}
            {id === icons[13] && <Mountown className="h-8 aspect-square"/>}
            {id === icons[14] && <Outpost className="h-8 aspect-square"/>}
            {id === icons[15] && <Store className="h-8 aspect-square"/>}
            {id === icons[16] && <Tent className="h-8 aspect-square"/>}
            {id === icons[17] && <Volcano className="h-8 aspect-square"/>}
            {id === icons[18] && <Warehouse className="h-8 aspect-square"/>}
            {id === icons[19] && <Worship className="h-8 aspect-square"/>}
            <input type='radio' name={name} id={id} value={id} className=''/>
        </label>
    )
}