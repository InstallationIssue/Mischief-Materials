import { getMonsterById } from "@/prisma/scripts/monster"
import Link from "next/link"

export default async function Header({
    id, name, background
  }: {
    id: number, name: string, background: string
  }) {

    return (
      <Link href={`/monster/${id}`} className="flex flex-col border-2 rounded-lg p-2">
        <h1 className="font-mono font-semibold capitalize">{name}</h1>
        <p className="font-mono font-thin">{background}</p>
      </Link>
    )
}