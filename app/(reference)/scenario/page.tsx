import Card from "./scenarioCard"
import CardList from "@/app/_components/cardList"
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
            <CardList>
                {data.map((id) => (
                    <Card key={id.id} id={id.id} name={id.name} description={id.description} image={id.image}
                    />
                ))}
            </CardList>
        </div>
    )
}