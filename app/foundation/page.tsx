import Link from "next/link";
import Card from "./card"
import Plus from '/public/icons/system/clean-plus.svg'
import { getFoundations } from "@/app/api/route"

export default async function Foundation(){
    const data = await getFoundations();

    return (
        <div>
            <div className="flex flex-row justify-between">
                <h2>Developed Foundations</h2>
                <Link href={'/foundation/add'} className="add-link">
                    <Plus className="stats-icon"/>
                </Link>
            </div>
            <div className="flex flex-row h-full w-full flex-wrap">
                {data.map((id) => (
                    <Card key={id.id} id={id.id} name={id.name} setting={id.setting}/>
                ))}
            </div>
        </div>
    )
}