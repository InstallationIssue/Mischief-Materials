import Dice from '/public/icons/system/dice.svg'

export default async function FormButtons () {
    return (
    <div className="flex flex-row justify-between">
        <button>Cancel</button>
        <button>Randomise
            <Dice/>
        </button>
        <button type='submit'>Submit</button>
    </div>
    )
}