import LocationCard from "./locationCard"
import Header from "../../_components/header"
import { getLocations } from "@/prisma/scripts/location"

export default async function Location(){
    const data = await getLocations()

    return (
        <div>
            <Header title="Locations" link="/location/add"></Header>
            <div className="flex flex-row flex-wrap">
                {data.map((id) => (
                    <LocationCard key={id.id} id={id.id}/>
                ))}
            </div>
        </div>
    )
}