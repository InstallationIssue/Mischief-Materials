import { getScenarioById } from "@/prisma/scripts/scenario"

export default async function Scenario({
    params 
  }: { 
    params: { id: number } 
  }) {
    const data = await getScenarioById(Number(params.id))

    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </div>
    )
}