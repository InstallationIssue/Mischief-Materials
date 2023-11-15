import Link from "next/link"
import { getMagicById } from "@/prisma/scripts/magic"
import Magic from "/public/icons/magic/magic.svg"
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
        <Link href={`/magic/${id}`} className="flex flex-row gap-2 h-12 w-80 magics-center overflow-clip border rounded-lg p-2 border-primary-light items-center font-play text-lg">
            {magic.medium == 'magic' && <Magic className='h-full aspect-square fill-primary-light'/>}
            {magic.medium == 'flame' && <Flame className='h-full aspect-square fill-primary-light'/>}
            {magic.medium == 'flask' && <Flask className='h-full aspect-square fill-primary-light'/>}
            {magic.medium == 'electricity' && <Electricity className='h-full aspect-square fill-primary-light'/>}
            {magic.medium == 'golem' && <Golem className='h-full aspect-square fill-primary-light'/>}
            {magic.medium == 'homunculus' && <Homunculus className='h-full aspect-square fill-primary-light'/>}
            {magic.medium == 'ice' && <Ice className='h-full aspect-square fill-primary-light'/>}
            {magic.medium == 'liquid' && <Liquid className='h-full aspect-square fill-primary-light'/>}
            {magic.medium == 'robot' && <Robot className='h-full aspect-square fill-primary-light'/>}
            {magic.medium == 'sick' && <Sick className='h-full aspect-square fill-primary-light'/>}
            {magic.medium == 'summon' && <Summon className='h-full aspect-square fill-primary-light'/>}
            {magic.medium == 'wind' && <Wind className='h-full aspect-square fill-primary-light'/>}
            <span className="whitespace-nowrap overflow-clip grow">
              <p className="scrolling-text capitalize">{magic.name}</p>
            </span>
            <span className="flex rounded-full border-2 border-highlight-light h-full aspect-square justify-center items-center text-highlight-light">
              12
            </span>
        </Link>
    )
}