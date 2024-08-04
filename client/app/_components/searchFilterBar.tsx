// prettier-ignore
'use client'

import SortUp from "/public/icons/system/sort-up.svg";
import Filter from "./filter";
import Search from "./search";

export default function SearchFilterBar() {
  function sort() {}

  return (
    <div className="justify-start items-center gap-2 flex flex-row grow max-w-md px-4">
      <Search />
      <Filter />
      <button onClick={sort}>
        <SortUp className="fill-primary-light w-10 h-10" />
      </button>
    </div>
  );
}
