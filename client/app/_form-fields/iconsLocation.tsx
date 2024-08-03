"use client";

import { useState } from "react";
import RadioInput from "./locationRadioInput";

export default function IconsLocation({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const icons = [
    "boat",
    "building",
    "campground",
    "city",
    "dungeon",
    "entrance",
    "factory",
    "headquarters",
    "hospital",
    "institution",
    "landmark",
    "medical",
    "mountown",
    "mountain",
    "outpost",
    "store",
    "tent",
    "volcano",
    "warehouse",
    "worship",
  ];
  const [icon, setIcon] = useState("building");

  return (
    <div className="w-96 px-5 py-2.5 rounded-lg justify-between items-center flex flex-row flex-wrap">
      <RadioInput id={icons[4]} name={"location"} defaultCheck={true} />
      <RadioInput id={icons[0]} name={"location"} defaultCheck={false} />
      <RadioInput id={icons[1]} name={"location"} defaultCheck={false} />
      <RadioInput id={icons[2]} name={"location"} defaultCheck={false} />
      <RadioInput id={icons[3]} name={"location"} defaultCheck={false} />
      <RadioInput id={icons[5]} name={"location"} defaultCheck={false} />
      <RadioInput id={icons[6]} name={"location"} defaultCheck={false} />
      <RadioInput id={icons[7]} name={"location"} defaultCheck={false} />
      <RadioInput id={icons[8]} name={"location"} defaultCheck={false} />
      <RadioInput id={icons[9]} name={"location"} defaultCheck={false} />
      <RadioInput id={icons[10]} name={"location"} defaultCheck={false} />
      <RadioInput id={icons[11]} name={"location"} defaultCheck={false} />
      <RadioInput id={icons[12]} name={"location"} defaultCheck={false} />
      <RadioInput id={icons[13]} name={"location"} defaultCheck={false} />
      <RadioInput id={icons[14]} name={"location"} defaultCheck={false} />
      <RadioInput id={icons[15]} name={"location"} defaultCheck={false} />
      <RadioInput id={icons[16]} name={"location"} defaultCheck={false} />
      <RadioInput id={icons[17]} name={"location"} defaultCheck={false} />
      <RadioInput id={icons[18]} name={"location"} defaultCheck={false} />
      <RadioInput id={icons[19]} name={"location"} defaultCheck={false} />
    </div>
  );
}
