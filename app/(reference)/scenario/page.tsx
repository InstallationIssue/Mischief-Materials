import Card from "./scenarioCard"
import Header from "../../_components/header"
import { getScenarios } from "@/prisma/scripts/scenario"

export const metadata = {
    title: 'Scenarios'
}

export default async function Scenario(){
    const data = await getScenarios()

    return (
            <div className="flex flex-row flex-wrap">
                {data.map((id) => (
                    <Card key={id.id} id={id.id} name={id.name} description={id.description} image={id.image}
                    />
                ))}
            </div>
    )
}