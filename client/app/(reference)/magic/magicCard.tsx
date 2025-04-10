import Link from "next/link";
import HoverScrollField from "@/app/_components/hoverScrollField";
import MagicIcon from "@/app/_imageComponents/magicIcon";

export default async function MagicCard({
  id,
  name,
  medium,
  spells,
}: {
  id: number;
  name: string;
  medium: string;
  spells: number;
}) {
  return (
    <Link
      href={`/magic/${id}`}
      className="flex flex-row gap-2 h-12 magics-center overflow-clip border rounded-lg p-2 border-primary-light items-center font-header text-lg"
    >
      <div className="flex h-8 w-8 fill-primary-light">
        <MagicIcon icon={medium} />
      </div>
      <HoverScrollField text={name} style={"grow"} innerStyle={""} />
      <span className="flex rounded-full border-2 border-highlight-light h-8 w-8 justify-center items-center text-highlight-light">
        <p>{spells}</p>
      </span>
    </Link>
  );
}
