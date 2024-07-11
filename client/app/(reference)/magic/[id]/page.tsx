import { getMagicById } from '@/prisma/scripts/magic'
import SpellCard from '../spellCard'

import MagicIcon from "/public/icons/magic/magic.svg"
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

export default async function Magic({
    params 
  }: { 
    params: { id: number } 
  }) {
    const magic = await getMagicById(Number(params.id))

    return (
      <div className="flex flex-col gap-2 p-1">
        <div className="flex flex-row gap-2 magics-center overflow-clip rounded-lg items-center font-header text-lg">
            {magic.medium == 'magic' && <MagicIcon className='h-8 w-8 fill-primary-light'/>}
            {magic.medium == 'flame' && <Flame className='h-8 w-8 fill-primary-light'/>}
            {magic.medium == 'flask' && <Flask className='h-8 w-8 fill-primary-light'/>}
            {magic.medium == 'electricity' && <Electricity className='h-8 w-8 fill-primary-light'/>}
            {magic.medium == 'golem' && <Golem className='h-8 w-8 fill-primary-light'/>}
            {magic.medium == 'homunculus' && <Homunculus className='h-8 w-8 fill-primary-light'/>}
            {magic.medium == 'ice' && <Ice className='h-8 w-8 fill-primary-light'/>}
            {magic.medium == 'liquid' && <Liquid className='h-8 w-8 fill-primary-light'/>}
            {magic.medium == 'robot' && <Robot className='h-8 w-8 fill-primary-light'/>}
            {magic.medium == 'sick' && <Sick className='h-8 w-8 fill-primary-light'/>}
            {magic.medium == 'summon' && <Summon className='h-8 w-8 fill-primary-light'/>}
            {magic.medium == 'wind' && <Wind className='h-8 w-8 fill-primary-light'/>}
            <span className="whitespace-nowrap overflow-clip grow">
              <p className="scrolling-text capitalize text-2xl">{magic.name}</p>
            </span>
            <span className="flex rounded-full border-2 border-highlight-light h-8 w-8 justify-center items-center text-highlight-light">
              <p>{magic.spells.length}</p>
            </span>
        </div>
        <p className="mt-2">{magic.description}</p>
        <div className="flex flex-row flex-wrap gap-3">
              {magic.spells.map((id) => (
                <SpellCard key={id.id} id={id.id} name={id.name} description={id.description}/>
              ))}
            </div>
      </div>
    )
}