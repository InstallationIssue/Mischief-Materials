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
        <Link href={`/magic/${id}`} className="flex flex-row gap-2 h-10 w-80 magics-center overflow-clip border-construct">
            {magic.medium == 'Flame' && <Flame className='size-icon'/>}
            {magic.medium == 'Flask' && <Flask className='size-icon'/>}
            {magic.medium == 'Electricity' && <Electricity className='size-icon'/>}
            {magic.medium == 'Golem' && <Golem className='size-icon'/>}
            {magic.medium == 'Homunculus' && <Homunculus className='size-icon'/>}
            {magic.medium == 'Ice' && <Ice className='size-icon'/>}
            {magic.medium == 'Liquid' && <Ice className='size-icon'/>}
            {magic.medium == 'Robot' && <Ice className='size-icon'/>}
            {magic.medium == 'Sick' && <Ice className='size-icon'/>}
            {magic.medium == 'Summon' && <Ice className='size-icon'/>}
            {magic.medium == 'Wind' && <Ice className='size-icon'/>}
            <span className="whitespace-nowrap overflow-clip">
              <h4 className="scrolling-text capitalize">{magic.name}</h4>
            </span>
        </Link>
    )
}