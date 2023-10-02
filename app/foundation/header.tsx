import { getFoundationById } from "@/prisma/scripts/foundation"
import Link from "next/link"

export default async function Header({
    id, name, setting
  }: {
    id: number, name: string, setting: string
  }) {

    return (
      <Link href={'/'+id} className="flex flex-row">
        <h1 className="font-mono font-thin">{name}</h1>
        <p>{setting}</p>
      </Link>
    )
}