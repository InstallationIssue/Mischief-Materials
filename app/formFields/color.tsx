import Swatch from '/public/icons/system/swatchbook.svg'

export default async function Color ({
    id
}: { 
    id: string
}){
    var color = '#FFB800'

    return (
        <div className="w-full h-11 bg-gray-800 p-2.5 rounded-lg justify-between items-center inline-flex">
            <div className="justify-start items-center flex">
                Select Color
            </div>
            <div className='w-10 h-10 bg-orange-300'></div>
            <Swatch className="h-8 aspect-square icon"></Swatch>
        </div>
    )
}
