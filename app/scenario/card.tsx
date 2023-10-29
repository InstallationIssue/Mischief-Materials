import { getScenarioById } from "@/prisma/scripts/scenario"
import CardButtons from "./card-buttons"
import Link from "next/link"
import IcelandLupin from '/public/landscapes/Iceland-Lupin.svg'
import MistyValley from '/public/landscapes/Misty-Valley.svg'
import NeonCity from '/public/landscapes/Neon-City.svg'
import NightMountains from '/public/landscapes/Night-Mountains.svg'
import SunsetDesert from '/public/landscapes/Sunset-Desert.svg'
import Default from '/public/landscapes/Default.svg'

export default async function ScenarioCard({
    params
  }: {
    params: {
      id: number, 
      name: string, 
      description: string,
      image: string
  }}) {

    return (
      <div className="flex flex-col border rounded-lg w-60 h-56 overflow-clip">
        <div className="flex flex-col justify-end overflow-clip relative">
          <Link href={`/scenario/${params.id}`} className="flex flex-col w-full">
            {params.image == 'IcelandLupin' && <IcelandLupin className='card-backing'/>}
            {params.image == 'MistyValley' && <MistyValley className='card-backing'/>}
            {params.image == 'NeonCity' && <NeonCity className='card-backing'/>}
            {params.image == 'NightMountains' && <NightMountains className='card-backing'/>}
            {params.image == 'SunsetDesert' && <SunsetDesert className='card-backing'/>}
            {params.image == '' && <Default className='card-backing'/>}
            {params.image == 'Default' && <Default className='card-backing'/>}
          </Link>
          <span className="text-container h-10 w-full px-2 absolute">
            <h3 className="scrolling-text capitalize">{params.name}</h3>
          </span>
        </div>
      <CardButtons id={params.id}/>
    </div>
    )
}