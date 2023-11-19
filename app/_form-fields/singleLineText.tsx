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
        <div className="px-4 py-2.5 bg-[--primary-dark-grey] rounded-lg justify-start items-center gap-1 inline-flex self-stretch font-play bg-primary-dark-grey">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <label className='grow shrink basis-0 capitalize flex flex-col gap-1 self-stretch justify-start items-start '>
                    {id}
                    <input id={id} name={name} type="text" placeholder={`Enter ${id}`} className='bg-transparent self-stretch active:border-none'/>
                </label>
            </div>
            {showRandom && (
                <button onClick={randomise}>
                    <Dice className='aspect-square h-8 relative icon'/>
                </button>
            )}
        </div>
    )
}