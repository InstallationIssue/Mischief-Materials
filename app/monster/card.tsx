import { getMonsterById } from '@/prisma/scripts/monster'

import HealthCircle from '../components/vitality'

import Strength from '/public/icons/stats/strength.svg'
import Dexterity from '/public/icons/stats/dexterity.svg'
import Willpower from '/public/icons/stats/willpower.svg'
import Attack from '/public/icons/monsters/attack.svg'

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
      <div className="monster-card">
        <div className="flex flex-grow justify-center items-start self-stretch gap-2">
          <HealthCircle params={{
            health_max: monster.health_max,
            health_lost: 0,
            armor: monster.armor
          }}></HealthCircle>
          <div className="flex flex-col flex-grow self-stretch justify-between">
            <h4>{monster.name}</h4>
            <div className="stats">
              <div>
                <Strength className='stats-icon'/>
                <h5>{monster.str}</h5>
              </div>
              <div>
                <Dexterity className='stats-icon'/>
                <h5>{monster.dex}</h5>
              </div>
              <div>
                <Willpower className='stats-icon'/>
                <h5>{monster.wil}</h5>
              </div>
              <div>
                <Attack className='stats-icon'/>
                <h5>{monster.attack}</h5>
              </div>
            </div>
          </div>
        </div>
        {monster.size == 'Weak' && <Weak className='size-icon'/>}
        {monster.size == 'Typical' && <Typical className='size-icon'/>}
        {monster.size == 'Tough' && <Tough className='size-icon'/>}
        {monster.size == 'Hulking' && <Hulking className='size-icon'/>}
        {monster.size == 'Colossal' && <Colossal className='size-icon'/>}
        {monster.size == 'Boss' && <Boss className='size-icon'/>}
      </div>
    )
}