'use client'

import { useState } from 'react'

import IcelandLupin from '/public/landscapes/Iceland-Lupin.svg'
import MistyValley from '/public/landscapes/Misty-Valley.svg'
import NeonCity from '/public/landscapes/Neon-City.svg'
import NightMountains from '/public/landscapes/Night-Mountains.svg'
import SunsetDesert from '/public/landscapes/Sunset-Desert.svg'
import Default from '/public/landscapes/Default.svg'

export default function ImageInput ({
    id, name
}: { 
    id: string, name: string
}) {
    const images = ['Default', 'IcelandLupin', 'MistyValley', 'NeonCity', 'NightMountains', 'SunsetDesert']
    const [image, setImage] = useState(images[0])

    return (
        <div className="w-60 h-44 m-1 rounded-lg overflow-clip relative flex items-center justify-center">
            <select id={id} name={name} value={image} onChange={(e) => {
                e.preventDefault() 
                setImage(e.target.value)
                }} className="w-fit h-fit p-2 rounded backdrop-blur-lg text-center z-10 bg-transparent border font-play">
                <option value={images[0]}>Default</option>
                <option value={images[1]}>Lupin in Iceland</option>
                <option value={images[2]}>Misty Valley</option>
                <option value={images[3]}>Neon City</option>
                <option value={images[4]}>Night Mountains</option>
                <option value={images[5]}>Sunset Desert</option>
            </select>
            
            {image === images[0] && <Default className='w-60 absolute'/>}
            {image === images[1] && <IcelandLupin className='w-60 absolute'/>}
            {image === images[2] && <MistyValley className='w-60 absolute'/>}
            {image === images[3] && <NeonCity className='w-60 absolute'/>}
            {image === images[4] && <NightMountains className='w-60 absolute'/>}
            {image === images[5] && <SunsetDesert className='w-60 absolute'/>}
        </div>
    )
}


