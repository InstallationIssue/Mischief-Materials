import MonsterCard from "./monsterCard"
import Header from "../../_components/header"
import CardList from "@/app/_components/cardList"
import AnimationContainer from "@/app/_components/animationContainer"
import { getMonsters, getMonstersBySearch } from "@/prisma/scripts/monster"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Monsters'
}

export default async function Monster({
    searchParams,
}: {
    searchParams?: {
        query?: string
        page?: string
    }
}) {
    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1
    const data = await getMonstersBySearch(query)

    return (
        <div>
            <Header title="Monsters" link="/monster/add"></Header>
            <CardList>
                {data.map((id) => (
                    <AnimationContainer key={id.id} className={"w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 p-2"}>
                        <MonsterCard
                        id={id.id} 
                        name={id.name} 
                        health_max={id.health_max} 
                        health_lost={0} 
                        armor={id.armor} 
                        str={id.str} 
                        dex={id.dex} 
                        wil={id.wil} 
                        att={id.attack}
                        size={id.size}/>
                    </AnimationContainer>
                ))}
            </CardList>
        </div>
    )
}