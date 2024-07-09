'use client'

import Dice from '/public/icons/system/dice.svg'

/*
<p className='capitalize'>{id}</p>
<input type="text" id={id} name={id} placeholder='Input Name'></input>
*/

function randomise() {}

export default function SingleLineText ({
    id, name, showRandom = false
}: { 
    id: string, name: string,  showRandom: boolean
}) {
    return (
            <div className="font-play px-4 py-2.5 bg-primary-dark-grey basis-0 flex-col justify-start items-start gap-1 inline-flex rounded-lg w-full">
                <label className='basis-0 capitalize flex flex-col-reverse gap-1 justify-start items-start h-14 w-full'>
                    <input id={id} name={name} type="text" placeholder={`Enter ${id}`} className='bg-transparent w-full active:border-none focus:outline-none peer self-stretch transition-font h-0 focus:h-fit'/>
                    <p className='text-lg peer-focus:text-sm h-fit transition-font'>{id}</p>
                </label>
            </div>
    )
}