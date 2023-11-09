import HealthCircle from "./vitality"

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

export default function AlertMonster ({
    params
  }: { 
    params: {
      id: number,
      name: string,
      background: string,
      health_max: number,
      health_lost: number,
      armor: number,
      str: number,
      dex: number,
      wil: number,
      size: string,
      attack: number
  }}) {
    return (
      <div className="monster-card">
        <div className="flex flex-grow justify-center items-start self-stretch gap-2">
          <HealthCircle params={{
            health_max: params.health_max,
            health_lost: params.health_lost,
            armor: params.armor
          }}></HealthCircle>
          <div className="flex flex-col flex-grow self-stretch justify-between">
            <h4>{params.name}</h4>
            <div className="stats">
              <div>
                <Strength className='stats-icon'/>
                <h5>{params.str}</h5>
              </div>
              <div>
                <Dexterity className='stats-icon'/>
                <h5>{params.dex}</h5>
              </div>
              <div>
                <Willpower className='stats-icon'/>
                <h5>{params.wil}</h5>
              </div>
              <div>
                <Attack className='stats-icon'/>
                <h5>{params.attack}</h5>
              </div>
            </div>
          </div>
        </div>
        {params.size == 'Weak' && <Weak className='size-icon'/>}
        {params.size == 'Typical' && <Typical className='size-icon'/>}
        {params.size == 'Tough' && <Tough className='size-icon'/>}
        {params.size == 'Hulking' && <Hulking className='size-icon'/>}
        {params.size == 'Colossal' && <Colossal className='size-icon'/>}
        {params.size == 'Boss' && <Boss className='size-icon'/>}
      </div>
    )
}