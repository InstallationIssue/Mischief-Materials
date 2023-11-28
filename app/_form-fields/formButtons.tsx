import Dice from '/public/icons/system/dice.svg'
import Check from '/public/icons/system/check.svg'
import Xmark from '/public/icons/system/xmark.svg'

export default function FormButtons ({
    showRandom = true
}: {
    showRandom: boolean
}) {
    return (
        <div className="flex flex-row justify-between w-full">
            <button className='rounded-lg py-1 px-3 pointer-events-auto hover:shadow-sm hover:shadow-highlight-light focus:shadow-sm focus:shadow-highlight-light transition-shadow disabled:bg-primary-light-grey bg-primary-dark border-2 border-danger-light'>
                <Xmark className='h-6 aspect-square icon fill-danger-light'/>
            </button>
            {showRandom && (
                <button className='rounded-lg py-1 px-3 pointer-events-auto hover:shadow-sm hover:shadow-highlight-light focus:shadow-sm focus:shadow-highlight-light transition-shadow disabled:bg-primary-light-grey bg-primary-dark border-2 border-secondary-light'>
                    <Dice className='h-6 aspect-square icon fill-secondary-light'/>
                </button>
            )}
            <button className='rounded-lg py-1 px-3 pointer-events-auto hover:shadow-sm hover:shadow-highlight-light focus:shadow-sm focus:shadow-highlight-light transition-shadow disabled:bg-primary-light-grey bg-primary-dark border-2 border-success-light' type='submit'>
                <Check className='h-6 aspect-square icon fill-success-light'/>
            </button>
        </div>
    )
}

