import Card from "./scenarioCard"
import Header from "../../_components/header"
import { getScenarios } from "@/prisma/scripts/scenario"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Scenarios'
}

export default async function Scenario(){
    const data = await getScenarios()

    return (
        <div>
            <Header title={"Scenarios"} link={"/scenario/add"}/>
            <div className="flex flex-row flex-wrap">
                {data.map((id) => (
                    <Card key={id.id} id={id.id} name={id.name} description={id.description} image={id.image}
                    />
                ))}
            </div>
        </div>
    )
}