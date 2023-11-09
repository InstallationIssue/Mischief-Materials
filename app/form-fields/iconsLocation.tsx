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

export default async function IconsLocation ({
    id
}: { 
    id: string
}){
    return (
        <div className="w-96 px-5 py-2.5 rounded-lg justify-between items-center inline-flex">
            <label htmlFor='locationIcon'></label>
            <select id="locationIcon" name="locationIcon" className="locationIcon hidden">
                <option>boat</option>
                <option>building</option>
                <option>campground</option>
                <option>city</option>
                <option>dungeon</option>
                <option>entrance</option>
                <option>factory</option>
                <option>headquarters</option>
                <option>hospital</option>
                <option>institution</option>
                <option>landmark</option>
                <option>medical-house</option>
                <option>mountain-city</option>
                <option>mountain</option>
                <option>outpost</option>
                <option>store</option>
                <option>tent</option>
                <option>volcano</option>
                <option>warehouse</option>
                <option>worship</option>
            </select>
            <span className="flex flex-row flex-wrap gap-3 icon justify-between">
                <Boat className="h-8"/>
                <Building className="h-8"/>
                <Campground className="h-8"/>
                <City className="h-8"/>
                <Dungeon className="h-8"/>
                <Entrance className="h-8"/>
                <Factory className="h-8"/>
                <Headquarters className="h-8"/>
                <Hospital className="h-8"/>
                <Institution className="h-8"/>
                <Landmark className="h-8"/>
                <MedicalHouse className="h-8"/>
                <MountainCity className="h-8"/>
                <Mountain className="h-8"/>
                <Outpost className="h-8"/>
                <Store className="h-8"/>
                <Tent className="h-8"/>
                <Volcano className="h-8"/>
                <Warehouse className="h-8"/>
                <Worship className="h-8"/>
            </span>
        </div>
    )
}


