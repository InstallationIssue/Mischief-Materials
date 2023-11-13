import { getCharacterById } from "@/app/api/character/character"
import ItemCard from "@/app/cards/itemCard";

export default async function Character({ 
    params 
}: { 
    params: { id: number } 
}) {
    const character = await getCharacterById(Number(params.id));

    return (
        <div className="flex flex-row h-full w-full my-2 gap-2">
            <div className="flex flex-col h-full w-1/4 border rounded-lg p-2 border-primary-light">
                <p>{character.name}</p>
                <p>Background</p>
                <p>{character.background}</p>
            </div>
            <div className="flex flex-col h-full w-1/2 border rounded-lg p-2 border-primary-light">
                <div className="flex flex-row">
                    <div className="flex flex-col w-1/2"></div>
                </div>
                <p>Stats</p>
                <p>Str: {character.str}</p>
                <p>Dex: {character.dex}</p>
                <p>Wil: {character.wil}</p>
                <p>Items</p>
                <p>
                    {character.items.map((id, index) => (
                        <ItemCard key={id.id} id={id.id}/>
                    ))}
                </p>
            </div>
            <div className="flex flex-col h-full w-1/4 border rounded-lg p-2 border-primary-light">
                <p>Relationships</p>
                <p>Goals</p>
            </div>
        </div>
    )
}