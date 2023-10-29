import Link from "next/link"
import { getMagicById } from "@/prisma/scripts/magic"
import Magic from "/public/icons/magic/magic.svg"

export default async function MagicCard({
    id,
  }: {
    id: number
  }) {
    const magic = await getMagicById(Number(id))

    return (
        <Link href={`/magic/${id}`} className="flex flex-row gap-2 h-10 w-80 magics-center overflow-clip border-construct">
            <span className="flex-grow whitespace-nowrap overflow-clip">
              <h4 className="scrolling-text capitalize">{magic.name}</h4>
            </span>
            <p>{magic.description}</p>
        </Link>
    )
}