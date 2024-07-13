import MagicCard from "./magicCard"
import Header from "../../_components/header"
import CardList from "@/app/_components/cardList"
import AnimationContainer from "@/app/_components/animationContainer"
import { getMagics } from "@/prisma/scripts/magic"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Magic'
}

export default async function Page() {
    const data = await getMagics()

    return (
        <div>
            <Header title="Magics" link="/magic/add"></Header>
            <CardList>
                {data.map((id, index) => (
                    <AnimationContainer className={"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-2"}>
                        <MagicCard key={id.id} id={id.id} name={id.name} medium={id.medium} spells={id.spells.length}/>
                    </AnimationContainer>
                ))}
            </CardList>
        </div>
    )
}