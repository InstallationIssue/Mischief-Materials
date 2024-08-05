// prettier-ignore
'use client'

import Dice from "/public/icons/system/dice.svg";

function randomise() {}

export default function TextInput({
  id,
  name,
  multiline = false,
  showRandom = false,
}: {
  id: string;
  name: string;
  multiline: boolean;
  showRandom: boolean;
}) {
  return (
    <div className="font-header px-4 py-2.5 bg-primary-dark-grey rounded-lg w-full justify-start items-start gap-1 inline-flex transform">
      <label className="capitalize flex flex-col-reverse gap-1 justify-start items-start w-full">
        {(multiline && (
          <textarea
            id={id}
            name={name}
            placeholder={`Enter ${id}`}
            className="opacity-65 bg-transparent w-full focus:outline-none peer h-40 resize-none"
          />
        )) || (
          <input
            id={id}
            name={name}
            type="text"
            placeholder={`Enter ${id}`}
            className="opacity-65 bg-transparent w-full focus:outline-none peer"
            autoComplete="name"
          />
        )}
        <p className="text-lg peer-focus:text-sm transition-font">{id}</p>
      </label>
    </div>
  );
}

/*
<div className="px-4 py-2.5 rounded-lg justify-start items-start gap-1 inline-flex grow font-header bg-primary-dark-grey w-full">
      <label className="grow shrink basis-0 capitalize flex flex-col-reverse gap-1 self-stretch justify-end items-start h-48">
        <textarea
          id={id}
          name={name}
          placeholder={`Enter ${id}`}
          className="bg-transparent w-full h-44 resize-none peer focus:outline-none"
        />
        <p className="peer-focus:text-sm">{id}</p>
      </label>
    </div>
*/
