import MonsterCard from "../cards/monsterCard"
import Header from "../components/header"
import { getMonsters } from "@/prisma/scripts/api/monster/monster"

export default async function Monster(){
    const data = await getMonsters()

    return (
        <div>
            <Header title="Monsters" link="/monster/add"></Header>
            <div className="flex flex-row flex-wrap gap-4">
                {data.map((id, index) => (
                    <MonsterCard key={id.id} id={id.id}/>
                ))}
            </div>
        </div>
    )
}