"use client";

import SearchIcon from "/public/icons/system/search.svg";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="py-2 px-3 justify-start items-center gap-2.5 flex flex-row grow bg-primary-dark-grey rounded-lg">
      <SearchIcon className="fill-primary-light h-5" />
      <input
        id="search"
        type="text"
        placeholder="Search..."
        className="font-header font-normal text-lg capitalize bg-transparent"
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
