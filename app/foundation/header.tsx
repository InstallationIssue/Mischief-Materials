import { getFoundationById } from "@/prisma/scripts/foundation"

export default async function Header({
    id,
  }: {
    id: number
  }) {
    const foundation = await getFoundationById(id)

    return (
      <div className="flex flex-row">
        <h1 className="font-mono font-thin">{foundation.name}</h1>
        <p>{foundation.setting}</p>
      </div>
    )
}