import { getItemById } from "@/prisma/scripts/item"
import Coins from "/public/icons/items/coins.svg"

export default async function Item({ 
    params 
}: { 
    params: { id: number } 
}) {
    const item = await getItemById(Number(params.id))

    return (
        <div className="flex flex-col p-1">
            <div className="flex flex-row gap-2 h-10 items-center overflow-clip fill-primary-light">
                <span className="flex-grow whitespace-nowrap overflow-clip">
                <p className="scrolling-text capitalize font-play font-bold text-xl">{item.name}</p>
                </span>
                <p className="font-play text-xl font-bold">{item.value}</p>
                <Coins className="aspect-square h-5 cursor-pointer"/>
            </div>
            <div>
                <p className="first-letter:capitalize">{item.description}</p>
            </div>
        </div>
)}