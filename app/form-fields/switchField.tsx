export default async function SwitchField ({
    id
}: { 
    id: string
}) {
    return (
        <div className='h-full'>
            <div className="w-fit h-14 px-5 py-2.5 bg-[--primary-dark-grey] rounded-lg justify-start items-center gap-2.5 inline-flex">
                <div className="justify-start items-center gap-1 flex">
                    <div className="capitalize">Switch</div>
                </div>
                <div className="w-20 h-10 relative bg-neutral-500 rounded-full">
                    <div className="w-8 h-8 left-1 top-1 absolute bg-stone-100 rounded-full" />
                </div>
            </div>
        </div>
    )
}


