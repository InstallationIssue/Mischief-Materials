import Swatch from '/public/icons/system/swatchbook.svg'

export default async function Color (){
    var color = '#FFB800'

    return (
        <div className="flex flex-row bg-gray-800 px-4 py-2.5 rounded-lg justify-between items-center">
            <div className="text-center text-zinc-300 gap-2 flex">
                Select Color
            </div>
            <div className='w-10 h-10 bg-orange-300'></div>
            <Swatch className="h-8 aspect-square icon"></Swatch>
        </div>
    )
}


