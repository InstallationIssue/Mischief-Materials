import Link from "next/link";
import HoverScrollField from "@/app/_components/hoverScrollField";

import Magic from "/public/icons/magic/magic.svg";
import Flame from "/public/icons/magic/flame.svg";
import Electricity from "/public/icons/magic/electricity.svg";
import Flask from "/public/icons/magic/flask.svg";
import Golem from "/public/icons/magic/golem.svg";
import Homunculus from "/public/icons/magic/homunculus.svg";
import Ice from "/public/icons/magic/ice.svg";
import Liquid from "/public/icons/magic/liquid.svg";
import Robot from "/public/icons/magic/robot.svg";
import Sick from "/public/icons/magic/sick.svg";
import Summon from "/public/icons/magic/summon.svg";
import Wind from "/public/icons/magic/wind.svg";

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
      {medium == "magic" && <Magic className="h-8 w-8 fill-primary-light" />}
      {medium == "flame" && <Flame className="h-8 w-8 fill-primary-light" />}
      {medium == "flask" && <Flask className="h-8 w-8 fill-primary-light" />}
      {medium == "electricity" && (
        <Electricity className="h-8 w-8 fill-primary-light" />
      )}
      {medium == "golem" && <Golem className="h-8 w-8 fill-primary-light" />}
      {medium == "homunculus" && (
        <Homunculus className="h-8 w-8 fill-primary-light" />
      )}
      {medium == "ice" && <Ice className="h-8 w-8 fill-primary-light" />}
      {medium == "liquid" && <Liquid className="h-8 w-8 fill-primary-light" />}
      {medium == "robot" && <Robot className="h-8 w-8 fill-primary-light" />}
      {medium == "sick" && <Sick className="h-8 w-8 fill-primary-light" />}
      {medium == "summon" && <Summon className="h-8 w-8 fill-primary-light" />}
      {medium == "wind" && <Wind className="h-8 w-8 fill-primary-light" />}
      <HoverScrollField text={name} style={"grow"} innerStyle={""} />
      <span className="flex rounded-full border-2 border-highlight-light h-8 w-8 justify-center items-center text-highlight-light">
        <p>{spells}</p>
      </span>
    </Link>
  );
}
