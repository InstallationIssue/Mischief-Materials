import React from "react";
import SearchFilterBar from "./searchFilterBar";
import Link from "next/link";
import Plus from "/public/icons/system/plus.svg";

export default async function ModelView({
  children,
  title,
  model,
}: {
  children: React.ReactNode;
  title: string;
  model: string;
}) {
  return (
    <div className="px-2">
      <div className="flex flex-row w-full justify-between p-2 items-center">
        <p className="flex-grow font-header font-bold text-2xl w-32 capitalize">
          {title}
        </p>
        <SearchFilterBar />
        <Link href={model + "/add"} className="p-2 border rounded-lg">
          <Plus className="aspect-square h-5 cursor-pointer fill-primary-light" />
        </Link>
      </div>
      {children}
    </div>
  );
}
