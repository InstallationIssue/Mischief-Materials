import Link from "next/link";
import Play from "/public/icons/system/play.svg";
import ScenarioImage from "./scenarioImage";

export function PlayButton({ name, image }: { name: string; image: string }) {
  return (
    <Link
      className="flex flex-row items-center h-full gap-2 bg-secondary-light transition active:text-highlight-light active:fill-highlight-light overflow-clip relative grow"
      href={"/play"}
    >
      <div className="absolute w-full">
        <ScenarioImage image={image} />
      </div>
      <div className="px-2 backdrop-blur-sm z-10 w-full flex flex-row h-3/5 items-center justify-center gap-2">
        <p className="leading-loose grow font-header text-xl capitalize overflow-x-auto whitespace-nowrap scroll-m-0 hidden sm:inline">
          {name}
        </p>
        <Play className="fill-primary-light h-full aspect-square" />
      </div>
    </Link>
  );
}
