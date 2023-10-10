import { getMonsterById } from "@/app/api/scripts/monster"

export default async function Monster({
    params 
  }: { 
    params: { id: number } 
  }) {
    const data = await getMonsterById(Number(params.id))

    return (
        <div></div>
    )
}