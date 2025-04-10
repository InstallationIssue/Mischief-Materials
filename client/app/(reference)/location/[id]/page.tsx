import LocationIcon from "@/app/_imageComponents/locationIcon";
import { getLocationById, updateLocation } from "@/prisma/scripts/location";
import { z } from "zod";

export default async function Location({ params }: { params: { id: number } }) {
  const data = await getLocationById(Number(params.id));

  return (
    <div className="p-1">
      <span className="flex flex-row items-center rounded justify-between w-full h-10">
        <span className="flex gap-2 grow items-center">
          <svg
            className="h-10 aspect-square"
            fill={data.color}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="40"></circle>
          </svg>
          <span className="flex-grow whitespace-nowrap overflow-clip">
            <p className="capitalize font-header text-2xl">{data.name}</p>
          </span>
        </span>
        <div className="h-full aspect-square fill-primary-light">
          <LocationIcon icon={data.icon} />
        </div>
      </span>
      <p className="mt-2">{data.description}</p>
    </div>
  );
}
