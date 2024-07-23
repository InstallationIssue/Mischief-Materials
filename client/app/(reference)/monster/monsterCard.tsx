import Link from 'next/link'
import HealthCircle from '../../_components/vitality'
import HoverScrollField from "@/app/_components/hoverScrollField"

import Strength from '/public/icons/stats/strength.svg'
import Dexterity from '/public/icons/stats/dexterity.svg'
import Willpower from '/public/icons/stats/willpower.svg'
import Attack from '/public/icons/stats/attack.svg'

import Weak from '/public/icons/beings/size-1.svg'
import Typical from '/public/icons/beings/size-2.svg'
import Tough from '/public/icons/beings/size-3.svg'
import Hulking from '/public/icons/beings/size-4.svg'
import Colossal from '/public/icons/beings/size-5.svg'
import Boss from '/public/icons/beings/size-final.svg'

export default function MonsterCard ({
    id, name, health_max, health_lost, armor, str, dex, wil, att, size
  }: { 
    id: number, name: string, health_max: number, health_lost: number, armor: number, str: number, dex: number, wil: number, att: number, size: string
  }) {

    return (
            <Link href={`/monster/${id}`} className="flex flex-row justify-center items-start self-stretch rounded-md border h-16 p-2 overflow-clip">
                <div className="flex flex-grow justify-center items-start self-stretch gap-2">
                    <HealthCircle
                        health_max={health_max}
                        health_lost={health_lost}
                        armor={armor}/>
                    <div className="flex flex-col flex-grow self-stretch justify-between">
                        <HoverScrollField text={name} style={''} innerStyle={'line-clamp-1'}/>
                        <div className="flex items-center gap-3 self-stretch">
                            <div className='flex flex-row gap-1 items-center'>
                                <Strength className='aspect-square h-5 fill-primary-light cursor-pointer'/>
                                <p>{str}</p>
                            </div>
                            <div className='flex flex-row gap-1 items-center'>
                                <Dexterity className='aspect-square h-5 fill-primary-light cursor-pointer'/>
                                <p>{dex}</p>
                            </div>
                            <div className='flex flex-row gap-1 items-center'>
                                <Willpower className='aspect-square h-5 fill-primary-light cursor-pointer'/>
                                <p>{wil}</p>
                            </div>
                            <div className='flex flex-row gap-1 items-center'>
                                <Attack className='aspect-square h-5 fill-primary-light cursor-pointer'/>
                            <p>{att}</p>
                        </div>
                    </div>
                </div>
            </div>
            {size == 'Weak' && <Weak className='h-full aspect-square fill-primary-light'/>}
            {size == 'Typical' && <Typical className='h-full aspect-square fill-primary-light'/>}
            {size == 'Tough' && <Tough className='h-full aspect-square fill-primary-light'/>}
            {size == 'Hulking' && <Hulking className='h-full aspect-square fill-primary-light'/>}
            {size == 'Colossal' && <Colossal className='h-full aspect-square fill-primary-light'/>}
            {size == 'Boss' && <Boss className='h-full aspect-square fill-primary-light'/>} 
        </Link>
    )
}
