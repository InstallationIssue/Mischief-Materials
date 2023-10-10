import Header from "./header"
import Link from "next/link";
import Plus from '/public/icons/system/clean-plus.svg'
import { getFoundations } from "@/prisma/scripts/foundation"

export default async function Foundation(){
    const data = await getFoundations();

    return (
        <div>
            <div className="flex flex-row justify-between">
                <h2>Developed Foundations</h2>
                <Link href={"foundation/add"}>
                    <Plus className="stats-icon"/>
                </Link>
            </div>
            <div className="space-y-4 my-2">
                {data.map((id, index) => (
                    <Header key={id.id} id={id.id} name={id.name} setting={id.setting}/>
                ))}
            </div>
        </div>
    )
}