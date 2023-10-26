import Card from "./card"
import Link from "next/link"
import Plus from '/public/icons/system/clean-plus.svg'
import { getScenarios } from "@/prisma/scripts/scenario"

export default async function Scenario(){
    const data = await getScenarios()

    return (
        <div>
            <div className="flex flex-row justify-between mb-2">
                <h2>Scenarios</h2>
                <Link href={"scenario/add"}>
                    <Plus className="stats-icon"/>
                </Link>
            </div>
            <div className="flex flex-row flex-wrap gap-6">
                {data.map((id) => (
                    <Card key={id.id} params={{
                        id: id.id, 
                        name: id.name, 
                        description: id.description, 
                        image: id.image
                    }}/>
                ))}
            </div>
        </div>
    )
}