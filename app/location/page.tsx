import LocationCard from "./card"
import Link from "next/link"
import Plus from '/public/icons/system/clean-plus.svg'
import { getLocations } from "@/prisma/scripts/location"

export default async function Location(){
    const data = await getLocations()

    return (
        <div>
            <div className="flex flex-row justify-between mb-2">
                <h2>Locations</h2>
                <Link href={"location/add"}>
                    <Plus className="stats-icon"/>
                </Link>
            </div>
            <div className="flex flex-row flex-wrap gap-6">
                {data.map((id) => (
                    <LocationCard key={id.id} params={{
                        id: id.id, 
                        name: id.name, 
                        description: id.description, 
                        color: id.color,
                        icon: id.icon
                    }}/>
                ))}
            </div>
        </div>
    )
}