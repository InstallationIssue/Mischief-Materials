import Loader from '/public/attributes/loader.svg'
import Count from '../components/count'
import Battery from '../components/battery'

export default async function Attributes ({
    id
}: { 
    id: string
}) {
    return (
        <div className="w-fit h-fit p-5 bg-[--primary-dark-grey] rounded-lg flex-col justify-start items-center inline-flex">
            <div className="justify-start items-end gap-[30px] inline-flex z-10">
                <Count remaining={50}/>
                <Battery/>
                <Battery/>
                <Battery/>
                <Battery/>
            </div>
            <Loader className='mt-[-20px]'/>
        </div>
    )
}


