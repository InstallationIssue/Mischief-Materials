import Card from "./locationCard"
import CardList from "@/app/_components/cardList"
import AnimationContainer from "@/app/_components/animationContainer"
import Header from "../../_components/header"
import { getLocations, getLocationsBySearch } from "@/prisma/scripts/location"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Locations'
}

export default async function Location({
    searchParams,
}: {
    searchParams?: {
        query?: string
        page?: string
    }
}) {
    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1
    const data = await getLocationsBySearch(query)

    return (
        <div>
            <Header title="Locations" link="/location/add"></Header>
            <CardList>
                {data.map((id) => (
                    <AnimationContainer key={id.id} className={"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-2"}>
                        <Card id={id.id} name={id.name} color={id.color} icon={id.icon}/>
                    </AnimationContainer>
                ))}
            </CardList>
        </div>
    )
}