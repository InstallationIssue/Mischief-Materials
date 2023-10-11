import Header from "./card"
import Link from "next/link"
import Plus from '/public/icons/system/clean-plus.svg'
import { getMonsters } from "@/prisma/scripts/monster"

export default async function Monster(){
    const data = await getMonsters()

    return (
        <div>
            <div className="flex flex-row justify-between">
                <h2>Monsters</h2>
                <Link href={"monster/add"}>
                    <Plus className="stats-icon"/>
                </Link>
            </div>
            <div className="space-y-4">
                {data.map((id, index) => (
                    <Header key={id.id} params={{
                        id: id.id,
                        name: id.name, 
                        health_max: id.health_max, 
                        health_lost: id.health_lost, 
                        armor: id.armor,
                        str: id.str, 
                        dex: id.dex, 
                        wil: id.wil, 
                        size: id.size,
                        attack: id.attack}}/>
                ))}
            </div>
        </div>
    )
}