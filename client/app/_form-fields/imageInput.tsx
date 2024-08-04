// prettier-ignore
'use client'

import { useState } from "react";
import ScenarioImage, {
  getScenarioImageOptions,
} from "../_imageComponents/scenarioImage";

export default function ImageInput({ id, name }: { id: string; name: string }) {
  const [image, setImage] = useState(getScenarioImageOptions()[0]);

  return (
    <div className="w-60 h-44 rounded-lg overflow-clip relative flex items-center justify-center">
      <select
        id={id}
        name={name}
        value={image}
        onChange={(e) => {
          e.preventDefault();
          setImage(e.target.value);
        }}
        className="w-fit h-fit p-2 rounded backdrop-blur-lg text-center z-10 bg-transparent border font-header"
      >
        {getScenarioImageOptions().map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="w-60 absolute">
        <ScenarioImage image={image} />
      </div>
    </div>
  );
}
