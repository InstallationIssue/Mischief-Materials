'use client'

import Dice from '/public/icons/system/dice.svg'

/*
<p className='capitalize'>{id}</p>
<input type="text" id={id} name={id} placeholder='Input Name'></input>
*/

function randomise() {}

export default async function SingleLineText ({
    id
}: { 
    id: string
}){
    return (
        <div className="w-full px-4 py-2.5 bg-gray-800 rounded-[10px] justify-start items-start gap-[5px] inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                <div className="text-stone-100 text-base font-normal font-['Roboto'] capitalize">{id}</div>
                <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
                    <div className="grow shrink basis-0 text-zinc-300">Enter {id}</div>
                </div>
            </div>
            <button onClick={randomise}>
                <Dice className='aspect-square h-10 relative icon'/>
            </button>
        </div>
    )
}