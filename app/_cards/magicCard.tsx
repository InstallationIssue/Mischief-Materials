import Link from "next/link"
import { getMagicById } from "@/prisma/scripts/magic"
import Magic from "/public/icons/sidebar/magic.svg"
import Flame from "/public/icons/magic/flame.svg"
import Electricity from "/public/icons/magic/electricity.svg"
import Flask from "/public/icons/magic/flask.svg"
import Golem from "/public/icons/magic/golem.svg"
import Homunculus from "/public/icons/magic/homunculus.svg"
import Ice from "/public/icons/magic/ice.svg"
import Liquid from "/public/icons/magic/liquid.svg"
import Robot from "/public/icons/magic/robot.svg"
import Sick from "/public/icons/magic/sick.svg"
import Summon from "/public/icons/magic/summon.svg"
import Wind from "/public/icons/magic/wind.svg"

export default async function MagicCard({
    id,
  }: {
    id: number
  }) {
    const magic = await getMagicById(Number(id))

    return (
        <Link href={`/magic/${id}`} className="flex flex-row gap-2 h-10 w-80 magics-center overflow-clip border rounded-lg p-2 border-primary-light">
            {magic.medium == 'magic' && <Magic className='h-full aspect-square'/>}
            {magic.medium == 'flame' && <Flame className='h-full aspect-square'/>}
            {magic.medium == 'flask' && <Flask className='h-full aspect-square'/>}
            {magic.medium == 'electricity' && <Electricity className='h-full aspect-square'/>}
            {magic.medium == 'golem' && <Golem className='h-full aspect-square'/>}
            {magic.medium == 'homunculus' && <Homunculus className='h-full aspect-square'/>}
            {magic.medium == 'ice' && <Ice className='h-full aspect-square'/>}
            {magic.medium == 'liquid' && <Liquid className='h-full aspect-square'/>}
            {magic.medium == 'robot' && <Robot className='h-full aspect-square'/>}
            {magic.medium == 'sick' && <Sick className='h-full aspect-square'/>}
            {magic.medium == 'summon' && <Summon className='h-full aspect-square'/>}
            {magic.medium == 'wind' && <Wind className='h-full aspect-square'/>}
            <span className="whitespace-nowrap overflow-clip">
              <p className="scrolling-text capitalize">{magic.name}</p>
            </span>
        </Link>
    )
}