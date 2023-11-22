import PlayerCard from "./characterCard"
import Header from "../../_components/header"
import { getCharacters } from "@/prisma/scripts/character"

export default async function Character(){
    const data = await getCharacters()

    return (
        <div>
            <Header title="Characters" link="/forms/addCharacter"></Header>
            <div className="flex flex-row flex-wrap">
                {data.map((id, index) => (
                    <PlayerCard 
                    key={id.id} 
                    id={id.id} 
                    name={id.name} 
                    health_max={id.health_max} 
                    health_lost={id.health_lost} 
                    armor={id.armor} 
                    str={id.str} 
                    dex={id.dex} 
                    wil={id.wil} 
                    att={id.att}/>
                ))}
            </div>
        </div>
    )
}