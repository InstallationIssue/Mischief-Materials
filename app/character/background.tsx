import { getCharacterById } from "@/prisma/scripts/character"
export default async function Background({
    id,
}: {
    id: number
}) {
    const character = await getCharacterById(id)

    return (
        <div className="bg-raisin-black
        border-2 border-white rounded-lg p-2 h-full">
            <h3 className="font-mono font-bold text-xl">Background</h3>
            <hr className=""></hr>
            <p className="font-mono text-ellipsis">
                {character.background}
            </p>
        </div>
    )
}