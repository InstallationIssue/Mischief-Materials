import Header from "../header"
import Link from "next/link"
//import Add from "../add"
import { getScenarios } from "@/prisma/scripts/scenario"

export default async function Scenario(){
    const data = await getScenarios()

    return (
        <main className="flex flex-col justify-around p-5">
            <div className="flex flex-row justify-between">
                <h1 className="font-mono font-bold text-3xl">Developed Scenarios</h1>
                <Link href="/scenario/add" className="font-mono font-bold px-4">+</Link>
                {/*<button className="bg-emerald rounded-lg m-2 w-16 text-3xl">+</button>*/}
            </div>
            <div className="space-y-2">
                {data.map((id, index) => (
                    <Header key={id.id} id={id.id} name={id.name} description={id.description}/>
                ))}
            </div>
        </main>
    )
}