import { getScenarioById } from "@/prisma/scripts/scenario"

import IcelandLupin from '/public/landscapes/Iceland-Lupin.svg'
import MistyValley from '/public/landscapes/Misty-Valley.svg'
import NeonCity from '/public/landscapes/Neon-City.svg'
import NightMountains from '/public/landscapes/Night-Mountains.svg'
import SunsetDesert from '/public/landscapes/Sunset-Desert.svg'

export default async function Play() {
    const scenario = await getScenarioById(18);

    return (
      <div className="w-full">
        <p className="mb-2">{scenario.name}</p>
        <div className="flex flex-row h-full gap-4">
          <div className="flex flex-col h-full w-1/3 gap-2">
            <p>Description</p>
            <div className="relative">
              {scenario.image == 'IcelandLupin' && <IcelandLupin className='card-backing'/>}
              {scenario.image == 'MistyValley' && <MistyValley className='card-backing'/>}
              {scenario.image == 'NeonCity' && <NeonCity className='card-backing'/>}
              {scenario.image == 'NightMountains' && <NightMountains className='card-backing'/>}
              {scenario.image == 'SunsetDesert' && <SunsetDesert className='card-backing'/>}
              {scenario.image == '' && <MistyValley className='card-backing'/>}
              <p className="w-full h-full absolute top-0 bg-slate-500 bg-opacity-60 invisible">{scenario.description}</p>
            </div>
            <p>Story Threads</p>
          </div>
        </div>
      </div>
    )
}