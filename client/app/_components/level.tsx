"use client";

import LevelIcon from "/public/icons/stats/level.svg";
import Circle from "/public/attributes/circle.svg";
import { useState } from "react";

export default function Level() {
  const [level, setLevel] = useState(1);

  function setCircle() {}

  return (
    <div className="relative aspect-square h-24 flex justify-center items-center">
      <p className="text-primary-dark font-header font-bold text-2xl z-20 -mt-4">
        {level}
      </p>
      <LevelIcon className="fill-primary-light stroke-stats-level stroke-[4] aspect-square h-12 absolute z-10 top-5" />
      <Circle className="absolute aspect-square h-28 fill-transparent stroke-[2] stroke-primary-light-grey" />
      <label className="absolute left-[29px] top-[16px] -ml-2 -mt-2">
        <input
          type="radio"
          className="hidden peer"
          name="level"
          id="1"
          value="1"
          onChange={setCircle}
        />
        <Circle className="h-4 aspect-square peer-checked:fill-stats-level" />
      </label>
      <label className="absolute left-[67px] top-[16px] -ml-2 -mt-2">
        <input
          type="radio"
          className="hidden peer"
          name="level"
          id="2"
          value="2"
        />
        <Circle className="h-4 aspect-square peer-checked:fill-stats-level" />
      </label>
      <label className="absolute left-[85px] top-[48px] -ml-2 -mt-2">
        <input
          type="radio"
          className="hidden peer"
          name="level"
          id="3"
          value="3"
        />
        <Circle className="h-4 aspect-square peer-checked:fill-stats-level" />
      </label>
      <label className="absolute left-[67px] top-[80px] -ml-2 -mt-2">
        <input
          type="radio"
          className="hidden peer"
          name="level"
          id="4"
          value="4"
        />
        <Circle className="h-4 aspect-square peer-checked:fill-stats-level" />
      </label>
      <label className="absolute left-[29px] top-[80px] -ml-2 -mt-2">
        <input
          type="radio"
          className="hidden peer"
          name="level"
          id="5"
          value="5"
        />
        <Circle className="h-4 aspect-square peer-checked:fill-stats-level" />
      </label>
      <label className="absolute left-[11px] top-[46px] -ml-2 -mt-2">
        <input
          type="radio"
          className="hidden peer"
          name="level"
          id="6"
          value="6"
        />
        <Circle className="h-4 aspect-square peer-checked:fill-stats-level" />
      </label>
    </div>
  );
}
