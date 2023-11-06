import ItemCard from "./card"
import Header from "../components/header"
import { getItems } from "@/prisma/scripts/item"

export default async function Page(props: {
    // ...
    add: React.ReactNode
  }) {
    const data = await getItems()

    return (
        <div>
            {props.add}
            <Header title="Items" link="/item/add"></Header>
            <div className="flex flex-row flex-wrap gap-4">
                {data.map((id, index) => (
                    <ItemCard key={id.id} id={id.id}/>
                ))}
            </div>
            {props.add}
        </div>
    )
}