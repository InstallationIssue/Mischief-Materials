export default async function Switch (){

    return (
        <div className="w-[180px] h-10 rounded-[5px] border border-purple-500 justify-center items-center gap-5 inline-flex">
        <div className="w-20 h-10 relative bg-neutral-500 rounded-[100px]">
            <div className="w-8 h-8 left-[4px] top-[4px] absolute bg-stone-100 rounded-full" />
        </div>
        <div className="w-20 h-10 relative bg-red-400 rounded-[100px]">
            <div className="w-8 h-8 left-[44px] top-[4px] absolute bg-stone-100 rounded-full" />
        </div>
        </div>
    )
}
