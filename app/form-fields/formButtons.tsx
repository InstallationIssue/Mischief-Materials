import Dice from '/public/icons/system/dice.svg'

export default async function FormButtons () {
    return (
    <div className="flex flex-row justify-between w-full">
        <button className='button-action cancel-button font-play' >Cancel</button>
        <button className='random-button font-play'>
            <Dice className='h-10 aspect-square icon'/>
        </button>
        <button className='button-action submit-button font-play' type='submit'>Submit</button>
    </div>
    )
}