// prettier-ignore
'use client'

import Swatch from "/public/icons/system/swatch.svg";

export default function Color({ id, name }: { id: string; name: string }) {
  function colors() {}

  return (
    <div className="w-full p-2.5 px-4 gap-4 rounded-lg justify-between items-center inline-flex font-header bg-primary-dark-grey">
      <div className="w-fit">Select Color</div>
      <input
        id={id}
        name={name}
        defaultValue={"#FFB800"}
        type="color"
        className="flex grow ms-20 bg-transparent"
      />
      <button onClick={colors}>
        <Swatch className="h-6 aspect-square" />
      </button>
      <aside className="hidden"></aside>
    </div>
  );
}
