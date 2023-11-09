import IcelandLupin from '/public/landscapes/Iceland-Lupin.svg'
import MistyValley from '/public/landscapes/Misty-Valley.svg'
import NeonCity from '/public/landscapes/Neon-City.svg'
import NightMountains from '/public/landscapes/Night-Mountains.svg'
import SunsetDesert from '/public/landscapes/Sunset-Desert.svg'
import Default from '/public/landscapes/Default.svg'

export default async function Image ({
    id
}: { 
    id: string
}) {
    var image = 'Default'
    
    return (
        <div className="w-60 h-44 rounded-lg overflow-clip relative flex items-center justify-center">
            <button className="w-fit h-fit p-2 rounded backdrop-blur-lg text-center z-10">Choose Image</button>
            
            {image == 'IcelandLupin' && <IcelandLupin className='w-60 absolute'/>}
            {image == 'MistyValley' && <MistyValley className='w-60 absolute'/>}
            {image == 'NeonCity' && <NeonCity className='w-60 absolute'/>}
            {image == 'NightMountains' && <NightMountains className='w-60 absolute'/>}
            {image == 'SunsetDesert' && <SunsetDesert className='w-60 absolute'/>}
            {image == '' && <Default className='w-60 absolute'/>}
            {image == 'Default' && <Default className='w-60 absolute'/>}
        </div>
    )
}


