import Link from "next/link";
import HoverScrollField from "@/app/_components/hoverScrollField";

import Coins from "/public/icons/items/coins.svg";

export default async function ItemCard({
  id,
  name,
  value,
}: {
  id: number;
  name: string;
  value: number;
}) {
  return (
    <Link
      href={`/item/${id}`}
      className="flex flex-row gap-2 h-10 items-center overflow-clip border rounded-lg p-2 border-primary-light fill-primary-light min-w-0"
    >
      <HoverScrollField text={name} style={"flex-grow"} innerStyle={""} />
      <div className="flex flex-row gap-2 items-center">
        <p>{value}</p>
        <Coins className="aspect-square h-5 cursor-pointer" />
      </div>
    </Link>
  );
}
