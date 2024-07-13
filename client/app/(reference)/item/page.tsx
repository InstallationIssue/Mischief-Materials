import ItemCard from "./itemCard"
import Header from "../../_components/header"
import CardList from "@/app/_components/cardList"
import AnimationContainer from "@/app/_components/animationContainer"
import { getItems } from "@/prisma/scripts/item"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Items'
}

export default async function Page() {
    const data = await getItems()

    return (
        <div>
            <Header title="Items" link="/item/add"/>
            <CardList>
                {data.map((id) => (
                    <AnimationContainer className={"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-2"}>
                        <ItemCard key={id.id} id={id.id} name={id.name} value={id.value}/>
                    </AnimationContainer>
                ))}
            </CardList>
        </div>
    )
}