import { getFoundationById } from "@/prisma/scripts/foundation"
import Link from "next/link"

export default async function Header({
    id, name, setting
  }: {
    id: number, name: string, setting: string
  }) {

    return (
      <Link href={`/foundation/${id}`} className="flex flex-col border rounded-lg p-2">
        <h3>{name}</h3>
        <p>{setting}</p>
      </Link>
    )
}