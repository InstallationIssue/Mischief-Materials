import { getCharacterById } from "@/prisma/scripts/character"

export default async function Characteristics({
    id,
}: {
    id: number
}) {
    const character = await getCharacterById(id)

    return (
        <div className="bg-raisin-black
        border-2 border-white rounded-lg p-2 h-full">
            <h3 className="font-mono font-bold text-xl">Characteristics</h3>
            <hr className=""></hr>
            <p className="font-mono text-ellipsis">
                Appearance: {character.appearance}<br/>
                Physical Detail: {character.physical_detail}<br/> {/* Train cowcatcher covers lower face */}
                Clothing: {character.clothing}<br/>
                Personality: {character.personality}<br/>
                Mannerism: {character.mannerism}<br/>
            </p>
        </div>
    )
}