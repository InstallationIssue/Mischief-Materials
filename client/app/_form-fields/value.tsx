import Coins from '/public/icons/items/coins.svg'

export default function Value ({
    id
}: { 
    id: string
}) {
    return (
        <div>
            <div className="h-full w-fit px-5 py-2.5 bg-primary-dark-grey rounded-lg justify-start items-center gap-5 inline-flex">
                <div className="flex-col justify-center items-start gap-1 inline-flex">
                    <div className="capitalize">{id}</div>
                    <div className="">100...</div>
                </div>
                <Coins className="h-10"/>
            </div>
        </div>
    )
}
