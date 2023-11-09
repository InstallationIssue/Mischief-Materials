export default async function Attributes ({
    id
}: { 
    id: string
}) {
    return (
        <div className="w-fit h-80 p-5 bg-gray-800 rounded-lg flex-col justify-start items-center inline-flex">
            <div className="justify-start items-end gap-7 inline-flex">
                <div className="flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="self-stretch text-center capitalize">Total</div>
                <div className="w-24 h-48 bg-white rounded-lg flex-col justify-end items-center flex">
                    <div className="text-center text-black">0/6</div>
                    <div className="self-stretch h-5 bg-neutral-500" />
                </div>
                </div>
                <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch justify-center items-start gap-1 inline-flex">
                    <div className="text-justify capitalize">Str</div>
                    <div className="w-6 aspect-square relative" />
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="w-24 h-5 bg-stone-100 rounded-lg" />
                    <div className="w-24 h-5 bg-stone-100 rounded-lg" />
                    <div className="w-24 h-5 bg-stone-100 rounded-lg" />
                    <div className="w-24 h-5 bg-orange-600 rounded-lg" />
                    <div className="w-24 h-5 bg-orange-600 rounded-lg" />
                    <div className="w-24 h-5 bg-orange-600 rounded-lg" />
                </div>
                </div>
                <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch justify-center items-start gap-1 inline-flex">
                    <div className="text-justify capitalize">Dex</div>
                    <div className="w-6 aspect-square relative" />
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="w-24 h-5 bg-stone-100 rounded-lg" />
                    <div className="w-24 h-5 bg-stone-100 rounded-lg" />
                    <div className="w-24 h-5 bg-stone-100 rounded-lg" />
                    <div className="w-24 h-5 bg-stone-100 rounded-lg" />
                    <div className="w-24 h-5 bg-sky-500 rounded-lg" />
                    <div className="w-24 h-5 bg-sky-500 rounded-lg" />
                </div>
                </div>
                <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch justify-center items-start gap-1 inline-flex">
                    <div className="text-justify capitalize">Wil</div>
                    <div className="w-6 aspect-square relative" />
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="w-24 h-5 bg-stone-100 rounded-lg" />
                    <div className="w-24 h-5 bg-stone-100 rounded-lg" />
                    <div className="w-24 h-5 bg-lime-500 rounded-lg" />
                    <div className="w-24 h-5 bg-lime-500 rounded-lg" />
                    <div className="w-24 h-5 bg-lime-500 rounded-lg" />
                    <div className="w-24 h-5 bg-lime-500 rounded-lg" />
                </div>
                </div>
                <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch justify-center items-start gap-1 inline-flex">
                    <div className="text-justify capitalize">Att</div>
                    <div className="w-6 aspect-square relative" />
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="w-24 h-5 bg-stone-100 rounded-lg" />
                    <div className="w-24 h-5 bg-stone-100 rounded-lg" />
                    <div className="w-24 h-5 bg-stone-100 rounded-lg" />
                    <div className="w-24 h-5 bg-stone-100 rounded-lg" />
                    <div className="w-24 h-5 bg-stone-100 rounded-lg" />
                    <div className="w-24 h-5 bg-fuchsia-600 rounded-lg" />
                </div>
                </div>
            </div>
        </div>
    )
}


