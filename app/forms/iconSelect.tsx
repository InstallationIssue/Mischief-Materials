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
import MedicalHouse from '/public/icons/locations/medical-house.svg'
import MountainCity from '/public/icons/locations/mountain-city.svg'
import Mountain from '/public/icons/locations/mountain.svg'
import Outpost from '/public/icons/locations/outpost.svg'
import Store from '/public/icons/locations/store.svg'
import Tent from '/public/icons/locations/tent.svg'
import Volcano from '/public/icons/locations/volcano.svg'
import Warehouse from '/public/icons/locations/warehouse.svg'
import Worship from '/public/icons/locations/worship.svg'

/*
const locationIcon = document.getElementById("locationIcon"),
strength = document.querySelectorAll("#locationIcon");
*/
/*
function selectIcon(select, index: string) {

    // And we need the whole list of options
    const optionList = select.querySelectorAll(".att-path-s");

    try {
      locationIcon.selectedIndex = index;  
    } catch (error) {
      
    }
    
   
    console.log("value: " + index)


    // We remove the highlight from all options
    optionList.forEach((other) => {
        other.classList.remove("selected");
    });


    // We highlight the right option
    optionList[index].classList.add("selected");
}
*/

export default async function IconSelect(){
    return (
        <div>
            <label htmlFor='locationIcon'></label>
            <select id="locationIcon" name="locationIcon" className="locationIcon">
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
            <span className="flex flex-row gap-3 icon-row">
                <Boat/>
                <Building/>
                <Campground/>
                <City/>
                <Dungeon/>
                <Entrance/>
                <Factory/>
                <Headquarters/>
                <Hospital/>
                <Institution/>
                <Landmark/>
                <MedicalHouse/>
                <MountainCity/>
                <Mountain/>
                <Outpost/>
                <Store/>
                <Tent/>
                <Volcano/>
                <Warehouse/>
                <Worship/>
            </span>
        </div>
    )
}