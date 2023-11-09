export default async function Dropdown ({
    id
}: { 
    id: string
}) {
    return (
        <div className='w-full h-full'>
            <div className="w-full h-fit p-2.5 bg-[--primary-dark-grey] rounded-lg justify-between items-center inline-flex">
                <div className="justify-start items-center gap-1 flex">
                    <div className="capitalize">Select</div>
                    <div className="capitalize">dropdown</div>
                </div>
            </div>
        </div>
    )
}


