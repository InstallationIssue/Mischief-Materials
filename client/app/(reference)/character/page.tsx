import Card from "./characterCard"
import Header from "../../_components/header"
import AnimationContainer from "@/app/_components/animationContainer"
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
                    <AnimationContainer className={"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-2"}>
                        <Card 
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
                    </AnimationContainer>
                ))}
            </CardList>
        </div>
    )
}