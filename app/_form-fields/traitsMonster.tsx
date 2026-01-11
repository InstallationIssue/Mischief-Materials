import TextInputResize from "./textInputResizer";

export default function TraitsMonster({
  personality,
  tactic,
  weakness,
}: {
  id: string;
  personality: string;
  tactic: string;
  weakness: string;
}) {
  return (
    <div className="w-full h-fit p-2.5 px-4 bg-primary-dark-grey rounded-lg flex-col justify-start items-start gap-2.5 inline-flex font-header">
      <div className="text-justify capitalize text-lg">Traits</div>
      <div className="self-stretch justify-start items-start gap-1 inline-flex">
        <span className="flex flex-row flex-wrap leading-relaxed items-baseline">
          A <TextInputResize id={"personality"} placeholder={personality} />
          creature, they tend to
          <TextInputResize id={"tactic"} placeholder={tactic} /> when attacked
          or hunting its prey.
          <TextInputResize id={"weakness"} placeholder={weakness} /> can be used
          to fend them off or weaken them
        </span>
      </div>
    </div>
  );
}
