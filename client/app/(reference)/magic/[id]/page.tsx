import { getMagicById } from "@/prisma/scripts/magic";
import SpellCard from "../spellCard";
import MagicIcon from "@/app/_imageComponents/magicIcon";

export default async function Magic({ params }: { params: { id: number } }) {
  const magic = await getMagicById(Number(params.id));

  return (
    <div className="flex flex-col gap-2 p-1">
      <div className="flex flex-row gap-2 magics-center overflow-clip rounded-lg items-center font-header text-lg">
        <div className="flex h-8 w-8 fill-primary-light">
          <MagicIcon icon={magic.medium} />
        </div>
        <span className="whitespace-nowrap overflow-clip grow">
          <p className="scrolling-text capitalize text-2xl">{magic.name}</p>
        </span>
        <span className="flex rounded-full border-2 border-highlight-light h-8 w-8 justify-center items-center text-highlight-light">
          <p>{magic.spells.length}</p>
        </span>
      </div>
      <p className="mt-2">{magic.description}</p>
      <div className="flex flex-row flex-wrap gap-3">
        {magic.spells.map((id) => (
          <SpellCard
            key={id.id}
            id={id.id}
            name={id.name}
            description={id.description}
          />
        ))}
      </div>
    </div>
  );
}
