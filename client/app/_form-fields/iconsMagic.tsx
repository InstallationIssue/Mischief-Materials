// prettier-ignore
'use client'

import { useState } from "react";
import MagicIcon, { getMagicIconOptions } from "../_imageComponents/magicIcon";

export default function IconsMagic({ id, name }: { id: string; name: string }) {
  const [icon, setIcon] = useState("magic");

  return (
    <div className="w-96 px-5 py-2.5 rounded-lg justify-between items-center flex flex-row flex-wrap">
      {getMagicIconOptions().map((option) => (
        <label
          key={option}
          className="checked:fill-highlight-light flex flex-col items-center p-2 gap-1"
        >
          <input
            type="radio"
            name="magic"
            id={option}
            value={option}
            className="hidden peer"
            defaultChecked={option === "magic"}
          />
          <div className="flex peer-checked:fill-highlight-light transition-colors peer-default:checked:fill-highlight-light h-8 aspect-square">
            <MagicIcon icon={option} />
          </div>
        </label>
      ))}
    </div>
  );
}
