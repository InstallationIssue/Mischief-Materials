// prettier-ignore
'use client'

import Level from "../_components/level";
import Armor from "../_components/armor";
import HealthCircle from "../_components/vitality";
import { useState } from "react";

export default function VitalityLevel({ id }: { id: string }) {
  const [health, setHealth] = useState(4);

  return (
    <div className="w-64 p-2.5 bg-primary-dark-grey rounded-lg flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="self-stretch grow shrink basis-0 justify-between items-start inline-flex relative gap-4">
        <Armor />
        <Level />
        <div className="absolute z-10 aspect-square h-10 -bottom-2 left-1/2 -ml-5">
          <HealthCircle health_max={health} health_lost={0} armor={0} />
        </div>
      </div>
    </div>
  );
}
