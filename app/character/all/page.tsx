import Header from "@/app/character/header"
import Link from "next/link"
import { getCharacters } from "@/prisma/scripts/character"

export default async function Character(){
    const data = await getCharacters()
    return (
        <main className="flex flex-col justify-around">
            <div className="flex flex-row justify-between">
                <h1 className="font-mono font-bold text-3xl px-5 py-2">Available Characters</h1>
                <button className="bg-emerald rounded-lg m-2 w-16 text-3xl">+</button>
            </div>
            {data.map((id, index) => (
            <Link href={'character/' + id}>
                <Header key={id.id} id={id.id}/>
            </Link>
            ))}
        </main>
    )
}