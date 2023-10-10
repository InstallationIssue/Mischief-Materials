import { getScenarioById } from "@/app/api/scripts/scenario"
import Link from "next/link"

export default async function Header({
    id, name, description, foundation
  }: {
    id: number, name: string, description: string, foundation: number
  }) {

    return (
      <Link href={`/foundation/${id}`} className="flex flex-col border rounded-lg p-2">
        <h3>{name}</h3>
        <p>{description}</p>
      </Link>
    )
}