import Header from "../header"
import Link from "next/link"
import { getFoundationIds } from "@/prisma/scripts/foundation"

export default async function Foundation(){
    const data = await getFoundationIds()
    return (
        <main className="flex flex-col justify-around">
            <div className="flex flex-row justify-between">
                <h1 className="font-mono font-bold text-3xl px-5 py-2">Developed Foundations</h1>
                <button className="bg-emerald rounded-lg m-2 w-16 text-3xl">+</button>
            </div>
            {data.map((id, index) => (
            <Link href={'foundation/' + id.id}>
                <Header id={id.id}/>
            </Link>
            ))}
        </main>
    )
}