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
import React from "react";

type magicIcon = {
  key: string;
  node: React.ReactNode;
};

const magicImageOptions: magicIcon[] = [
  { key: "magic", node: <Magic /> },
  { key: "flame", node: <Flame /> },
  { key: "electricity", node: <Electricity /> },
  { key: "flask", node: <Flask /> },
  { key: "golem", node: <Golem /> },
  { key: "homunculus", node: <Homunculus /> },
  { key: "ice", node: <Ice /> },
  { key: "liquid", node: <Liquid /> },
  { key: "robot", node: <Robot /> },
  { key: "sick", node: <Sick /> },
  { key: "summon", node: <Summon /> },
  { key: "wind", node: <Wind /> },
];

export function getMagicIconOptions() {
  var keyList: string[] = [];
  magicImageOptions.forEach((option) => keyList.push(option.key));
  return keyList;
}

export default function MagicIcon({ icon }: { icon: string }) {
  return (
    magicImageOptions.find((option) => option.key === icon)?.node || <Magic />
  );
}
