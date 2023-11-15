import Link from 'next/link'

import HealthCircle from '../_components/vitality'

import Strength from '/public/icons/stats/strength.svg'
import Dexterity from '/public/icons/stats/dexterity.svg'
import Willpower from '/public/icons/stats/willpower.svg'
import Attack from '/public/icons/stats/attack.svg'
import { getCharacterById } from "@/prisma/scripts/character"

export default async function CharacterCard({
    id,
  }: {
    id: number
  }) {
    const character = await getCharacterById(id)

    return (
        <Link href={`/character/${id}`} className="flex flex-row justify-center items-start self-stretch rounded-md border h-16 w-80 p-2">
            <div className="flex flex-grow justify-center items-start self-stretch gap-2">
                <HealthCircle params={{
                    health_max: character.health_max,
                    health_lost: 0,
                    armor: character.armor,
                    dimensions: 64
                }}></HealthCircle>
                <div className="flex flex-col flex-grow self-stretch justify-between">
                    <p className="line-clamp-1 text-clip">{character.name}</p>
                    <div className="flex items-center gap-3 self-stretch">
                    <div className='flex flex-row gap-1 items-center'>
                        <Strength className='aspect-square h-5 fill-primary-light cursor-pointer'/>
                        <p>{character.str}</p>
                    </div>
                    <div className='flex flex-row gap-1 items-center'>
                        <Dexterity className='aspect-square h-5 fill-primary-light cursor-pointer'/>
                        <p>{character.dex}</p>
                    </div>
                    <div className='flex flex-row gap-1 items-center'>
                        <Willpower className='aspect-square h-5 fill-primary-light cursor-pointer'/>
                        <p>{character.wil}</p>
                    </div>
                    <div className='flex flex-row gap-1 items-center'>
                        <Attack className='aspect-square h-5 fill-primary-light cursor-pointer'/>
                        <p>{character.att}</p>
                    </div>
                </div>
            </div>
        </div>
      </Link>
    )
}