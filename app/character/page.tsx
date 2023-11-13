import PlayerCard from "../cards/characterCard"
import Header from "../components/header"
import { getCharacters } from "@/app/api/character/character"

export default async function Character(){
    const data = await getCharacters()

    return (
        <div>
            <Header title="Characters" link="/character/add"></Header>
            <div className="flex flex-row flex-wrap gap-4">
                {data.map((id, index) => (
                    <PlayerCard key={id.id} id={id.id}/>
                ))}
            </div>
        </div>
    )
}