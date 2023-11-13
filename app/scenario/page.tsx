import Card from "../cards/scenarioCard"
import Header from "../components/header"
import { getScenarios } from "@/app/api/scenario/scenario"

export const metadata = {
    title: 'Scenarios'
}

export default async function Scenario(){
    const data = await getScenarios()

    return (
            <div className="flex flex-row flex-wrap gap-6">
                {data.map((id) => (
                    <Card key={id.id} id={id.id} name={id.name} description={id.description} image={id.image}
                    />
                ))}
            </div>
    )
}