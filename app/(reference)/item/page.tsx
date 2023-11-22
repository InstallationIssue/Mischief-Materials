import ItemCard from "./itemCard"
import Header from "../../_components/header"
import { getItems } from "@/prisma/scripts/item"

export default async function Page() {
    const data = await getItems()

    return (
        <div>
            <Header title="Items" link="/item/add"></Header>
            <div className="flex flex-row flex-wrap">
                {data.map((id, index) => (
                    <ItemCard key={id.id} id={id.id}/>
                ))}
            </div>
        </div>
    )
}