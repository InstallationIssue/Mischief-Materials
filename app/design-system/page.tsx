import Button from "./button"
import AlertMonster from "./alert-monster"
import { getFoundations } from "@/prisma/scripts/foundation"
import { text } from "stream/consumers"

export default async function Foundation(){
    const data = await getFoundations()

    return (
        <main className="flex flex-col justify-around p-5">
            <div className="flex flex-row justify-between">
                <h1 className="font-mono font-bold text-3xl">Developed Foundations</h1>
            </div>
            <div className="space-y-2">
                <Button text={"Button"}/>
                <AlertMonster params={{
                    id: 1,
                    name: "The Throngler",
                    background: "Sea Beast",
                    health_max: 27,
                    health_lost: 0,
                    armor: 9,
                    str: 4,
                    dex: 2,
                    wil: 2,
                    size: "Colossal",
                    attack: 2
                }} />
            </div>
        </main>
    )
}