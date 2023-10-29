import { getEncounterById } from "@/prisma/scripts/encounter"

export default async function EncounterCard({
    id
  }: {
    id: number
  }) {
    const encounter = await getEncounterById(id)

    return (
        <div>
            <h4>{encounter.name}</h4>
            <p></p>
        </div>
    )
}