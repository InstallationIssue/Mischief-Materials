import { getScenarioById } from "@/app/api/scripts/scenario"

export default async function Scenario({
    params 
  }: { 
    params: { id: number } 
  }) {
    const data = await getScenarioById(Number(params.id))

    return (
        <div></div>
    )
}