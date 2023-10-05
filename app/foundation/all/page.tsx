import Header from "../header"
import Link from "next/link"
import Add from "../add"
import { getFoundations } from "@/prisma/scripts/foundation"

export default async function Foundation(){
    const data = await getFoundations()

    return (
        <main className="flex flex-col justify-around p-5">
            <div className="flex flex-row justify-between">
                <h1 className="font-mono font-bold text-3xl">Developed Foundations</h1>
                <Link href="/foundation/add" className="font-mono font-bold px-4">+</Link>
                {/*<button className="bg-emerald rounded-lg m-2 w-16 text-3xl">+</button>*/}
            </div>
            <div className="space-y-2">
                {data.map((id, index) => (
                    <Header key={id.id} id={id.id} name={id.name} setting={id.setting}/>
                ))}
            </div>
        </main>
    )
}