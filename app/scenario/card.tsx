import { getScenarioById } from "@/prisma/scripts/scenario"
import Link from "next/link"

export default async function Header({
    id, name, description
  }: {
    id: number, name: string, description: string
  }) {

    return (
      <Link href={`/scenario/${id}`} className="flex flex-col border rounded-lg p-2">
        <h3>{name}</h3>
        <p>{description}</p>
      </Link>
    )
}