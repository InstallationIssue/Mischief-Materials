import Dice from '/public/icons/system/dice.svg'

export default async function FormButtons () {
    return (
    <div className="flex flex-row justify-between w-full">
        <button className='button-action cancel-button ' >Cancel</button>
        <button className='random-button '>
            <Dice className='h-10 aspect-square icon'/>
        </button>
        <button className='button-action submit-button ' type='submit'>Submit</button>
    </div>
    )
}

/*
<div className="w-[500px] h-[63px] p-2.5 bg-gray-900 justify-between items-center inline-flex">
  <div className="p-2.5 bg-white rounded-lg border-2 border-slate-500 justify-center items-center gap-2.5 flex">
    <div className="text-center text-slate-500  font-bold  capitalize">Cancel</div>
  </div>
  <div className="w-[171px] self-stretch px-2.5 rounded-lg border-2 border-stone-100 justify-start items-center gap-2.5 flex">
    <div className="text-center   font-bold  capitalize">Randomize</div>
    <div className="w-[35px] h-[35px] relative" />
  </div>
  <div className="p-2.5 bg-slate-500 rounded-lg justify-center items-center gap-2.5 flex">
    <div className="text-center   font-bold  capitalize">Submit</div>
  </div>
</div>
*/