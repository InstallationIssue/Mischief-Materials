import Swatch from '/public/icons/system/swatchbook.svg'

export default function Color ({
    id
}: { 
    id: string
}) {
    var color = '#FFB800'

    return (
        <div className="w-full h-11 bg-[--primary-dark-grey] p-2.5 px-4 gap-4 rounded-lg justify-between items-center inline-flex">
            <div className='w-fit'>
                Select Color
            </div>
            <div className='flex grow h-10 bg-orange-300 ms-20'></div>
            <Swatch className="h-8 aspect-square"/>
        </div>
    )
}
