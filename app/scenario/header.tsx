import { getScenarioById } from "@/prisma/scripts/scenario"
import Link from "next/link"

export default async function Header({
    id, name, description
  }: {
    id: number, name: string, description: string
  }) {

    return (
      <Link href={'/'+id} className="flex flex-row">
        <h1 className="font-mono font-thin">{name}</h1>
        <p>{description}</p>
      </Link>
    )
}