import { getCharacterById } from "@/prisma/scripts/api/character/character"

export default async function CharacterCard({
    id,
  }: {
    id: number
  }) {
    const character = await getCharacterById(id)

    return (
        <div className="border rounded-lg flex flex-grow justify-start items-start self-stretch gap-2 p-2">
            <p className="line-clamp-1 text-clip">{character.name}</p>
        </div>
    )
}