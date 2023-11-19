import MonsterCard from "../../_cards/monsterCard"
import Header from "../../_components/header"
import { getMonsters } from "@/prisma/scripts/monster"

export default async function Monster(){
    const data = await getMonsters()

    return (
        <div>
            <Header title="Monsters" link="/monster/add"></Header>
            <div className="flex flex-row flex-wrap">
                {data.map((id, index) => (
                    <MonsterCard
                    key={id.id}
                    id={id.id} 
                    name={id.name} 
                    health_max={id.health_max} 
                    health_lost={0} 
                    armor={id.armor} 
                    str={id.str} 
                    dex={id.dex} 
                    wil={id.wil} 
                    att={id.attack}
                    size={id.size}/>
                ))}
            </div>
        </div>
    )
}