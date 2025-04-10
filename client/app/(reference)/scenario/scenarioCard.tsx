import CardButtons from "../../_components/cardButtons";
import Link from "next/link";
import HoverScrollField from "@/app/_components/hoverScrollField";
import ScenarioImage from "@/app/_imageComponents/scenarioImage";

export default function ScenarioCard({
  id,
  name,
  description,
  image,
}: {
  id: number;
  name: string;
  description: string;
  image: string;
}) {
  return (
    <div className="flex flex-col border rounded-lg overflow-clip relative justify-end fill-primary-light">
      <Link href={`/scenario/${id}`}>
        <ScenarioImage image={image} />
      </Link>
      <div className="w-full px-2 absolute bg-secondary-dark bg-opacity-40 backdrop-blur-sm">
        <HoverScrollField
          text={name}
          style={""}
          innerStyle={"text-center text-lg font-header"}
        />
        <CardButtons id={id} name={name} image={image} />
      </div>
    </div>
  );
}
