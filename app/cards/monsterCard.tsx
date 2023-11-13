import { getMonsterById } from '@/prisma/scripts/api/monster/monster'

import HealthCircle from '../components/vitality'

import Strength from '/public/icons/stats/strength.svg'
import Dexterity from '/public/icons/stats/dexterity.svg'
import Willpower from '/public/icons/stats/willpower.svg'
import Attack from '/public/icons/stats/attack.svg'

import Weak from '/public/icons/monsters/size-1.svg'
import Typical from '/public/icons/monsters/size-2.svg'
import Tough from '/public/icons/monsters/size-3.svg'
import Hulking from '/public/icons/monsters/size-4.svg'
import Colossal from '/public/icons/monsters/size-5.svg'
import Boss from '/public/icons/monsters/size-final.svg'

export default async function MonsterCard ({
    id
  }: { 
    id: number
  }) {
    const monster = await getMonsterById(id)

    return (
      <div className="flex flex-row justify-center items-start self-stretch rounded-md border w-80 p-2 h-20 border-primary-dark">
        <div className="flex flex-grow justify-center items-start self-stretch gap-2">
          <HealthCircle params={{
            health_max: monster.health_max,
            health_lost: 0,
            armor: monster.armor,
            dimensions: 64
          }}></HealthCircle>
          <div className="flex flex-col flex-grow self-stretch justify-between">
            <p>{monster.name}</p>
            <div className="flex items-center gap-3 self-stretch">
              <div>
                <Strength className='aspect-square h-5 fill-[--primary-dark] cursor-pointer'/>
                <p>{monster.str}</p>
              </div>
              <div>
                <Dexterity className='aspect-square h-5 fill-[--primary-dark] cursor-pointer'/>
                <p>{monster.dex}</p>
              </div>
              <div>
                <Willpower className='aspect-square h-5 fill-[--primary-dark] cursor-pointer'/>
                <p>{monster.wil}</p>
              </div>
              <div>
                <Attack className='aspect-square h-5 fill-[--primary-dark] cursor-pointer'/>
                <p>{monster.attack}</p>
              </div>
            </div>
          </div>
        </div>
        {monster.size == 'Weak' && <Weak className='h-full aspect-square fill-[--primary-dark]'/>}
        {monster.size == 'Typical' && <Typical className='h-full aspect-square fill-[--primary-dark]'/>}
        {monster.size == 'Tough' && <Tough className='h-full aspect-square fill-[--primary-dark]'/>}
        {monster.size == 'Hulking' && <Hulking className='h-full aspect-square fill-[--primary-dark]'/>}
        {monster.size == 'Colossal' && <Colossal className='h-full aspect-square fill-[--primary-dark]'/>}
        {monster.size == 'Boss' && <Boss className='h-full aspect-square fill-[--primary-dark]'/>}
      </div>
    )
}