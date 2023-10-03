import { getFoundationById } from "@/prisma/scripts/foundation"
import Link from "next/link"

export default async function Header({
    id, name, setting
  }: {
    id: number, name: string, setting: string
  }) {

    return (
      <Link href={`/foundation/${id}`} className="flex flex-col border-2 rounded-lg p-2">
        <h1 className="font-mono font-semibold capitalize">{name}</h1>
        <p className="font-mono font-thin">{setting}</p>
      </Link>
    )
}