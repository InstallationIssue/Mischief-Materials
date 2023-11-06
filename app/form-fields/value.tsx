import Coins from '/public/icons/items/coins.svg'

export default async function Value (){
    return (
        <div className="h-full w-40 px-5 py-2.5 bg-gray-800 rounded-[10px] justify-start items-center gap-5 inline-flex">
            <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                <div className="text-stone-100">Value</div>
                <div className="text-zinc-300">100...</div>
            </div>
            <Coins className="h-full icon"/>
        </div>
    )
}
