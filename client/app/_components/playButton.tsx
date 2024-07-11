import Link from 'next/link'
import Play from '/public/icons/system/play.svg'
import IcelandLupin from '/public/landscapes/Iceland-Lupin.svg'
import MistyValley from '/public/landscapes/Misty-Valley.svg'
import NeonCity from '/public/landscapes/Neon-City.svg'
import NightMountains from '/public/landscapes/Night-Mountains.svg'
import SunsetDesert from '/public/landscapes/Sunset-Desert.svg'
import Default from '/public/landscapes/Default.svg'

export function PlayButton ({
    name, image
}: {
    name: string, image: string
}
) {
    return (
        <Link className="flex flex-row items-center h-12 gap-2 bg-secondary-light transition active:text-highlight-light active:fill-highlight-light overflow-clip relative grow" href={'/play'}>
            <div className='absolute w-full'>
                {image == 'IcelandLupin' && <IcelandLupin/>}
                {image == 'MistyValley' && <MistyValley/>}
                {image == 'NeonCity' && <NeonCity/>}
                {image == 'NightMountains' && <NightMountains/>}
                {image == 'SunsetDesert' && <SunsetDesert/>}
                {image == '' && <Default/>}
                {image == 'Default' && <Default/>}
            </div>
            <div className="px-2 backdrop-blur-sm z-10 w-full flex flex-row h-3/5 items-center justify-center gap-2">
                <p className='leading-loose grow font-header text-xl capitalize overflow-x-auto whitespace-nowrap scroll-m-0 hidden sm:inline'>{name}</p>
                <Play className="fill-primary-light h-full aspect-square"/>
            </div>
        </Link>
    )
}
    
