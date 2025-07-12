// prettier-ignore
'use client'
import { useState } from "react";

import Loader from "/public/attributes/loader.svg";
import Count from "./count";
import Battery from "./battery";

export default function Attributes({
  idArmor,
  idLevel,
}: {
  idArmor: string;
  idLevel: string;
}) {
  let total = 0;

  const [remainingPoints, setRemainingPoints] = useState(total);

  return (
    <div className="w-fit h-fit p-5 bg-primary-dark-grey rounded-lg flex-col justify-start items-center inline-flex">
      <div className="justify-start items-end gap-[30px] inline-flex z-10">
        <Count remaining={50} total={total} />
        <Battery />
        <Battery />
        <Battery />
        <Battery />
      </div>
      <Loader className="mt-[-20px]" />
    </div>
  );
}
