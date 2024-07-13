import Card from "./locationCard"
import CardList from "@/app/_components/cardList"
import AnimationContainer from "@/app/_components/animationContainer"
import Header from "../../_components/header"
import { getLocations } from "@/prisma/scripts/location"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Locations'
}

export default async function Location(){
    const data = await getLocations()

    return (
        <div>
            <Header title="Locations" link="/location/add"></Header>
            <CardList>
                {data.map((id) => (
                    <AnimationContainer className={"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-2"}>
                        <Card key={id.id} id={id.id} name={id.name} color={id.color} icon={id.icon}/>
                    </AnimationContainer>
                ))}
            </CardList>
        </div>
    )
}