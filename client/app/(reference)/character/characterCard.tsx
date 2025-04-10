import Link from "next/link";
import HealthCircle from "../../_components/vitality";
import HoverScrollField from "@/app/_components/hoverScrollField";

import Strength from "/public/icons/stats/strength.svg";
import Dexterity from "/public/icons/stats/dexterity.svg";
import Willpower from "/public/icons/stats/willpower.svg";
import Attack from "/public/icons/stats/attack.svg";

export default function CharacterCard({
  id,
  name,
  health_max,
  health_lost,
  armor,
  str,
  dex,
  wil,
  att,
}: {
  id: number;
  name: string;
  health_max: number;
  health_lost: number;
  armor: number;
  str: number;
  dex: number;
  wil: number;
  att: number;
}) {
  return (
    <Link
      href={`/character/${id}`}
      className="w-full flex flex-row justify-center items-start self-stretch rounded-md border h-16 p-2 overflow-clip"
    >
      <div className="w-full flex justify-center items-start self-stretch gap-2">
        <HealthCircle
          health_max={health_max}
          health_lost={health_lost}
          armor={armor}
        />
        <div className="grow flex-col justify-between min-w-0">
          <HoverScrollField
            text={name}
            style={"flex flex-grow"}
            innerStyle={""}
          />
          <div className="flex items-center gap-3 self-stretch">
            <div className="flex flex-row gap-1 items-center">
              <Strength className="aspect-square h-5 fill-primary-light cursor-pointer" />
              <p>{str}</p>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <Dexterity className="aspect-square h-5 fill-primary-light cursor-pointer" />
              <p>{dex}</p>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <Willpower className="aspect-square h-5 fill-primary-light cursor-pointer" />
              <p>{wil}</p>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <Attack className="aspect-square h-5 fill-primary-light cursor-pointer" />
              <p>{att}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
