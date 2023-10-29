import Link from 'next/link'

import HealthCircle from '../components/health-circle'

import Strength from '/public/icons/stats/strength.svg'
import Dexterity from '/public/icons/stats/dexterity.svg'
import Willpower from '/public/icons/stats/willpower.svg'
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
                    armor: character.armor
                }}></HealthCircle>
                <div className="flex flex-col flex-grow self-stretch justify-between">
                    <h4 className="line-clamp-1 text-clip">{character.name}</h4>
                    <div className="stats">
                    <div>
                        <Strength className='stats-icon'/>
                        <h5>{character.str}</h5>
                    </div>
                    <div>
                        <Dexterity className='stats-icon'/>
                        <h5>{character.dex}</h5>
                    </div>
                    <div>
                        <Willpower className='stats-icon'/>
                        <h5>{character.wil}</h5>
                    </div>
                </div>
            </div>
        </div>
      </Link>
    )
}