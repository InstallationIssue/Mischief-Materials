export default function Header(){
    return (
            <div className="
            flex justify-between flex-row 
            rounded-lg items-center m-2
            align-middle w-full pr-6
            ">
                <div className="flex flex-row bg-slate-800 justify-start
                p-1 border-2 border-white w-full mr-10">
                    <h1 className="font-mono font-bold border-white mr-2
                    px-4 py-2 rounded-lg text-2xl bg-black border-2 w-60
                    text-clip whitespace-nowrap overflow-scroll
                    ">
                        Locomotive Maw
                    </h1>
                    <div>
                        <div className="flex justify-center">
                            <h3 className="font-mono font-bold px-2">Level: 3</h3>
                            <h3 className="font-mono font-bold px-2">Xp: 10</h3>
                        </div>
                        <div className="flex flex-row">
                            <h4 className="font-mono px-1">Str:1</h4>
                            <h4 className="font-mono px-1">Dex:1</h4>
                            <h4 className="font-mono px-1">Wil:1</h4>
                            <h4 className="font-mono px-1">Arm:6</h4>
                        </div>
                    </div>
                </div>
                <button className="
                rounded-full bg-red-900 p-2
                w-20 h-20 border-2 border-white text-center
                hover:bg-red-400 z-10 absolute right-2 overflow-hidden
                text-5xl font-mono tabular-nums whitespace-nowrap
                ">
                    4
                </button>
            </div>
        )
}