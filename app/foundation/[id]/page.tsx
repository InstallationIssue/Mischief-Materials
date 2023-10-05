import { getFoundationById } from "@/prisma/scripts/foundation"

export default async function Foundation({
    params 
  }: { 
    params: { id: number } 
  }) {
    const data = await getFoundationById(Number(params.id))

    return (
        <div></div>
    )
}