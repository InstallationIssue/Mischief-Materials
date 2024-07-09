import PlayerCard from "./characterCard"
import Header from "../../_components/header"
import { getCharacters } from "@/prisma/scripts/character"
import { Metadata } from "next"
import CardList from "@/app/_components/cardList"

export const metadata: Metadata = {
    title: 'Characters'
}

export default async function Character(){
    const data = await getCharacters()

    function filterByName(term: string){}

    return (
        <div>
            <Header title="Characters" link="/character/add"></Header>
            <CardList>
                {data.map((id) => (
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
            </CardList>
        </div>
    )
}