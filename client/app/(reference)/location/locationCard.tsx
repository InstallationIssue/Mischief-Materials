import Link from "next/link";
import HoverScrollField from "@/app/_components/hoverScrollField";
import LocationIcon from "@/app/_imageComponents/locationIcon";

export default async function LocationCard({
  id,
  color,
  icon,
  name,
}: {
  id: number;
  color: string;
  icon: string;
  name: string;
}) {
  return (
    <Link
      href={`/location/${id}`}
      className="flex flex-row justify-between items-center border rounded-lg p-2 gap-2 h-12 w-full fill-primary-light"
    >
      <span className="h-full">
        <svg
          className="h-full aspect-square"
          fill={color}
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="40" />
        </svg>
      </span>
      <HoverScrollField text={name} style={"flex flex-grow"} innerStyle={""} />
      <span className="h-full aspect-square fill-primary-light">
        <LocationIcon icon={icon} />
      </span>
    </Link>
  );
}
