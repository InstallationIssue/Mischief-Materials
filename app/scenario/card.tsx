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
      <Link href={`/scenario/${params.id}`} className="flex flex-col border rounded-lg overflow-clip relative justify-end">
          {params.image == 'IcelandLupin' && <IcelandLupin className='w-60'/>}
          {params.image == 'MistyValley' && <MistyValley className='w-60'/>}
          {params.image == 'NeonCity' && <NeonCity className='w-60'/>}
          {params.image == 'NightMountains' && <NightMountains className='w-60'/>}
          {params.image == 'SunsetDesert' && <SunsetDesert className='w-60'/>}
          {params.image == '' && <Default className='w-60'/>}
          {params.image == 'Default' && <Default className='w-60'/>}
          <div className="w-full px-2 absolute backdrop-blur-xl">
            <h3 className="scrolling-text capitalize w-full text-center">{params.name}</h3>
            <CardButtons id={params.id}/>
          </div>
      </Link>
    )
}