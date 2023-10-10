import { getCharacterById } from "@/app/api/scripts/character"

export default async function Header({
    id,
  }: {
    id: number
  }) {
    const character = await getCharacterById(id)

    return (
            <div className="
            flex justify-between flex-row 
            rounded-lg items-center mx-2 my-3
            align-middle w-full pr-6
            ">
                <div className="flex flex-col mr-2 
                aspect-square border-2 rounded-lg text-2xl bg-blue-500 h-20 
                border-white z-10 absolute left-2">
                    <div className="h-5/6 flex flex-col justify-center text-center">
                        <h1 className="font-mono text-4xl">{character.level}</h1>
                    </div>
                    <div className="h-1/6 w-full
                    rounded-b-md bg-gray-500">
                        <div className="bg-green-400 w-1/2 h-full rounded-bl-md"/>
                    </div>
                </div>
                <div className="flex flex-row bg-raisin-black justify-start
                border-2 border-white w-full mx-10 rounded-lg pl-11">
                    <h1 className="font-mono font-bold border-white mr-2
                    px-4 py-2 rounded-lg text-2xl bg-black border-2 w-60
                    text-clip whitespace-nowrap overflow-scroll my-1
                    ">
                        {character.name}
                    </h1>
                    <div className="flex flex-col justify-center">                        
                        <h4 className="font-mono px-1">Str: {character.str} | Dex: {character.dex}</h4>                        
                        <h4 className="font-mono px-1">Wil: {character.wil} | Arm: {character.armor}</h4>
                    </div>
                </div>
                <div className="
                rounded-full p-2 flex flex-col justify-center
                w-20 h-20 border-2 border-white z-10 text-center
                absolute right-2 overflow-hidden
                ">
                    <div className=" rounded-full bg-gray-500 absolute
                    w-20 h-20 z-20 right-0 flex flex-col justify-end">
                        <div className=" bg-red-900
                        w-full h-3/4 z-30">
                        </div>
                    </div>
                    <h1 className="text-5xl font-mono tabular-nums 
                    whitespace-nowrap overflow-hidden z-20">{character.health_max}</h1>
                </div>
            </div>
        )
}