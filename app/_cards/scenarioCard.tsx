import CardButtons from "../_components/cardButtons"
import Link from "next/link"
import IcelandLupin from '/public/landscapes/Iceland-Lupin.svg'
import MistyValley from '/public/landscapes/Misty-Valley.svg'
import NeonCity from '/public/landscapes/Neon-City.svg'
import NightMountains from '/public/landscapes/Night-Mountains.svg'
import SunsetDesert from '/public/landscapes/Sunset-Desert.svg'
import Default from '/public/landscapes/Default.svg'

export default async function ScenarioCard({
  id, name, description,image
}: {
  id: number, 
  name: string, 
  description: string,
  image: string
}) {
    return (
      <Link href={`/scenario/${id}`} className="flex flex-col border rounded-lg overflow-clip relative justify-end">
          {image == 'IcelandLupin' && <IcelandLupin className='w-60'/>}
          {image == 'MistyValley' && <MistyValley className='w-60'/>}
          {image == 'NeonCity' && <NeonCity className='w-60'/>}
          {image == 'NightMountains' && <NightMountains className='w-60'/>}
          {image == 'SunsetDesert' && <SunsetDesert className='w-60'/>}
          {image == '' && <Default className='w-60'/>}
          {image == 'Default' && <Default className='w-60'/>}
          <div className="w-full px-2 absolute backdrop-blur-sm">
            <p className="capitalize text-center text-lg font-play overflow-x-auto whitespace-nowrap scroll-m-0">{name}</p>
            <CardButtons id={id}/>
          </div>
      </Link>
    )
}