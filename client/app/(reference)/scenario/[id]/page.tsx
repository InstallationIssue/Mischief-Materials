import { getScenarioById, updateScenario } from "@/prisma/scripts/scenario";
import Thread from "../thread";
import Event from "../event";

import Party from "/public/icons/beings/party.svg";
import Npc from "/public/icons/beings/npc.svg";
import Monster from "/public/icons/beings/monster.svg";
import Items from "/public/icons/items/items.svg";
import Magic from "/public/icons/magic/magic.svg";
import Map from "/public/icons/locations/location.svg";

import { PlayButton } from "@/app/_components/playButton";
import ScenarioImage from "@/app/_components/scenarioImage";

export default async function Scenario({ params }: { params: { id: number } }) {
  const scenario = await getScenarioById(Number(params.id));

  const tabs = [
    "party",
    "actors/factions",
    "encounters",
    "items",
    "magic",
    "map",
  ];

  return (
    <div className="w-full h-full flex flex-col gap-2 pt-2">
      <div className="relative overflow-clip rounded-lg border flex h-14 mx-2">
        <PlayButton name={scenario.name} image={scenario.image} />
        <div className="absolute -z-10 left-0 w-full -top-1/2">
          <ScenarioImage image={scenario.image} />
        </div>
      </div>
      <div className="flex flex-row gap-2 h-full mx-2">
        <div className="flex flex-col w-1/3 h-full border rounded-lg overflow-clip p-1 gap-2">
          <div className="relative -m-1 border border-x-0 border-t-0">
            <ScenarioImage image={scenario.image} />
            <p className="w-full absolute z-10 top-0 bg-slate-500 bg-opacity-60 invisible">
              {scenario.description}
            </p>
          </div>
          <p className="font-header font-bold text-lg">Story Threads</p>
          <div className="flex flex-col gap-1">
            {scenario.threads.map((id) => (
              <Thread
                key={id.id}
                id={id.id}
                name={id.name}
                description={id.description}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col w-2/3 h-full gap-2">
          <div className="border rounded-lg p-1">
            <p className="font-header font-bold text-lg">Setting</p>
            <div className="font-text first-letter:capitalize">
              {scenario.setting}
            </div>
          </div>
          <div className="border rounded-lg p-1 flex-grow">
            <p className="font-header font-bold text-lg">Events</p>
            <div className="flex flex-col gap-1">
              {scenario.events.map((id) => (
                <Event
                  key={id.id}
                  id={id.id}
                  name={id.name}
                  description={id.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between bottom-0 w-full font-header text-xl h-12 border-t-2 align-middle">
        {tabs.map((item) => (
          <button
            key={item}
            className="flex w-1/6 justify-center py-1 h-full align-middle transition hover:shadow-none hover:bg-gradient-to-t from-transparent to-secondary-light focus:bg-gradient-to-t active:fill-highlight-light active:text-highlight-light"
          >
            <p className="hidden lg:inline capitalize">{item}</p>
            {item === "party" && <Party className="lg:hidden h-full" />}
            {item === "actors/factions" && <Npc className="lg:hidden h-full" />}
            {item === "encounters" && <Monster className="lg:hidden h-full" />}
            {item === "items" && <Items className="lg:hidden h-full" />}
            {item === "magic" && <Magic className="lg:hidden h-full" />}
            {item === "map" && <Map className="lg:hidden h-full" />}
          </button>
        ))}
      </div>
    </div>
  );
}
