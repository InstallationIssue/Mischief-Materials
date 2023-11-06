import IcelandLupin from '/public/landscapes/Iceland-Lupin.svg'
import MistyValley from '/public/landscapes/Misty-Valley.svg'
import NeonCity from '/public/landscapes/Neon-City.svg'
import NightMountains from '/public/landscapes/Night-Mountains.svg'
import SunsetDesert from '/public/landscapes/Sunset-Desert.svg'
import Default from '/public/landscapes/Default.svg'

export default async function Image (){
    var image = 'Default'

    return (
        <div className="w-fit rounded-lg overflow-clip relative">
            <button className="w-fit h-fit p-2 rounded backdrop-blur-lg absolute text-center text-lg font-play">Choose Image</button>
            
            {image == 'IcelandLupin' && <IcelandLupin className='w-60'/>}
            {image == 'MistyValley' && <MistyValley className='w-60'/>}
            {image == 'NeonCity' && <NeonCity className='w-60'/>}
            {image == 'NightMountains' && <NightMountains className='w-60'/>}
            {image == 'SunsetDesert' && <SunsetDesert className='w-60'/>}
            {image == '' && <Default className='w-60'/>}
            {image == 'Default' && <Default className='w-60'/>}
        </div>
    )
}


