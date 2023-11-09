import MagicCard from "../cards/magicCard"
import Header from "../components/header"
import { getMagic } from "@/prisma/scripts/magic"

export default async function Page() {
    const data = await getMagic()

    return (
        <div>
            <Header title="Magics" link="/magic/add"></Header>
            <div className="flex flex-row flex-wrap gap-4">
                {data.map((id, index) => (
                    <MagicCard key={id.id} id={id.id}/>
                ))}
            </div>
        </div>
    )
}