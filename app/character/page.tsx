import Header from "@/app/character/header"
import Link from "next/link"
import Plus from '/public/icons/system/clean-plus.svg'
import { getCharacters } from "@/prisma/scripts/character"

export default async function Character(){
    const data = await getCharacters()

    return (
        <div>
            <div className="flex flex-row justify-between">
                <h2>Developed Foundations</h2>
                <Link href={"character/add"}>
                    <Plus className="stats-icon"/>
                </Link>
            </div>
            <div className="space-y-4 my-2"></div>
            {data.map((id, index) => (
                <Header id={id.id}/>
            ))}
        </div>
    )
}