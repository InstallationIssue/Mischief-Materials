import IcelandLupin from "/public/landscapes/Iceland-Lupin.svg";
import MistyValley from "/public/landscapes/Misty-Valley.svg";
import NeonCity from "/public/landscapes/Neon-City.svg";
import NightMountains from "/public/landscapes/Night-Mountains.svg";
import SunsetDesert from "/public/landscapes/Sunset-Desert.svg";
import Default from "/public/landscapes/Default.svg";
import React from "react";

type scenarioImage = {
  key: string;
  node: React.ReactNode;
};

const scenarioImageOptions: scenarioImage[] = [
  { key: "Default", node: <Default /> },
  { key: "IcelandLupin", node: <IcelandLupin /> },
  { key: "MistyValley", node: <MistyValley /> },
  { key: "NeonCity", node: <NeonCity /> },
  { key: "NightMountains", node: <NightMountains /> },
  { key: "SunsetDesert", node: <SunsetDesert /> },
];

export function getScenarioImageOptions() {
  var keyList: string[] = [];
  scenarioImageOptions.forEach((option) => keyList.push(option.key));
  return keyList;
}

export default function ScenarioImage({ image }: { image: string }) {
  return (
    scenarioImageOptions.find((option) => option.key === image)?.node || (
      <Default />
    )
  );
}
