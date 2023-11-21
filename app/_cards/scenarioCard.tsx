import CardButtons from "../_components/cardButtons"
import Link from "next/link"
import IcelandLupin from '/public/landscapes/Iceland-Lupin.svg'
import MistyValley from '/public/landscapes/Misty-Valley.svg'
import NeonCity from '/public/landscapes/Neon-City.svg'
import NightMountains from '/public/landscapes/Night-Mountains.svg'
import SunsetDesert from '/public/landscapes/Sunset-Desert.svg'
import Default from '/public/landscapes/Default.svg'

export default function ScenarioCard({
  id, name, description,image
}: {
  id: number, 
  name: string, 
  description: string,
  image: string
}) {
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-2">
        <Link href={`/scenario/${id}`} className="flex flex-col border rounded-lg overflow-clip relative justify-end fill-primary-light">
            {image == 'IcelandLupin' && <IcelandLupin className=''/>}
            {image == 'MistyValley' && <MistyValley className=''/>}
            {image == 'NeonCity' && <NeonCity className=''/>}
            {image == 'NightMountains' && <NightMountains className=''/>}
            {image == 'SunsetDesert' && <SunsetDesert className=''/>}
            {image == '' && <Default className=''/>}
            {image == 'Default' && <Default className=''/>}
            <div className="w-full px-2 absolute backdrop-blur-sm">
              <p className="capitalize text-center text-lg font-play overflow-x-auto whitespace-nowrap scroll-m-0">{name}</p>
              <CardButtons id={id}/>
            </div>
        </Link>
      </div>
    )
}