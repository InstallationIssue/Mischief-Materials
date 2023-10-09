import Header from "./header"
import Link from "next/link"
import { getMonsters } from "@/prisma/scripts/monster"

export default async function Monster(){
    const data = await getMonsters()

    return (
        <div className="flex flex-col justify-around p-5">
            <div className="flex flex-row justify-between">
                <h1 className="font-mono font-bold text-3xl">Developed Monsters</h1>
                <Link href="/monster/add" className="font-mono font-bold px-4">+</Link>
                {/*<button className="bg-emerald rounded-lg m-2 w-16 text-3xl">+</button>*/}
            </div>
            <div className="space-y-2">
                {data.map((id, index) => (
                    <Header key={id.id} id={id.id} name={id.name} background={id.background}/>
                ))}
            </div>
        </div>
    )
}