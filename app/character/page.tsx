import PlayerCard from "./card"
import Link from "next/link"
import Plus from '/public/icons/system/clean-plus.svg'
import { getCharacters } from "@/prisma/scripts/character"

export default async function Character(){
    const data = await getCharacters()

    return (
        <div>
            <div className="flex flex-row justify-between mb-2">
                <h2>Characters</h2>
                <Link href={"character/add"}>
                    <Plus className="stats-icon"/>
                </Link>
            </div>
            <div className="flex flex-row flex-wrap gap-4">
                {data.map((id, index) => (
                    <PlayerCard key={id.id} id={id.id}/>
                ))}
            </div>
        </div>
    )
}