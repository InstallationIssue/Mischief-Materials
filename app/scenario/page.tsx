import Header from "./card"
import Link from "next/link"
import Plus from '/public/icons/system/clean-plus.svg'
import { getScenarios } from "@/prisma/scripts/scenario"

export default async function Scenario(){
    const data = await getScenarios()

    return (
        <div>
            <div className="flex flex-row justify-between">
                <h2>Scenarios</h2>
                <Link href={"scenario/add"}>
                    <Plus className="stats-icon"/>
                </Link>
            </div>
            <div className="space-y-4 my-2">
                {data.map((id, index) => (
                    <Header key={id.id} id={id.id} name={id.name} description={id.description} foundation={id.foundationId}/>
                ))}
            </div>
        </div>
    )
}