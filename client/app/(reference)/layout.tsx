"use client";
import Link from "next/link";
import Logo from "/public/icons/logo.svg";
import { PlayContext } from "./playContext";
import { useState } from "react";
import { PlayButton } from "../_components/playButton";

import Scenarios from "/public/icons/locations/scenario.svg";
import Locations from "/public/icons/locations/location.svg";
import Characters from "/public/icons/beings/npc.svg";
import Monsters from "/public/icons/beings/monster.svg";
import Items from "/public/icons/items/items.svg";
import Magics from "/public/icons/magic/magic.svg";

export default function ReferenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [playChoice, setPlayChoice] = useState({ name: "", image: "" });

  function TopNav() {
    return (
      <nav className="flex flex-row gap-4 justify-between items-center px-2 border-b-2 border-white">
        <Link
          className="h-12 flex items-center transition hover:shadow-none hover:bg-gradient-to-t from-transparent to-secondary-light focus:bg-gradient-to-t active:fill-highlight-light active:text-highlight-light py-1"
          href={"/"}
        >
          <Logo className="h-full" />
          <p className="text-4xl font-smooch px-1 hidden sm:line-clamp-1 md:hidden min-[896px]:line-clamp-1">
            Rats in Transit
          </p>
        </Link>
        {playChoice.name !== "" && (
          <PlayButton name={playChoice.name} image={playChoice.image} />
        )}
        <div className="flex flex-row items-center h-full">
          <Link
            href="/scenario"
            className="h-full px-4 flex items-center transition hover:shadow-none hover:bg-gradient-to-t from-transparent to-secondary-light focus:bg-gradient-to-t active:fill-highlight-light active:text-highlight-light font-header text-xl fill-primary-light"
          >
            <p className="hidden md:inline">Scenarios</p>
            <Scenarios className="md:hidden h-3/5" />
          </Link>
          <Link
            href="/location"
            className="h-full px-4 flex items-center transition hover:shadow-none hover:bg-gradient-to-t from-transparent to-secondary-light focus:bg-gradient-to-t active:fill-highlight-light active:text-highlight-light font-header text-xl fill-primary-light"
          >
            <p className="hidden md:inline">Locations</p>
            <Locations className="md:hidden h-3/5" />
          </Link>
          <Link
            href="/character"
            className="h-full px-4 flex items-center transition hover:shadow-none hover:bg-gradient-to-t from-transparent to-secondary-light focus:bg-gradient-to-t active:fill-highlight-light active:text-highlight-light font-header text-xl fill-primary-light"
          >
            <p className="hidden md:inline">Characters</p>
            <Characters className="md:hidden h-3/5" />
          </Link>
          <Link
            href="/monster"
            className="h-full px-4 flex items-center transition hover:shadow-none hover:bg-gradient-to-t from-transparent to-secondary-light focus:bg-gradient-to-t active:fill-highlight-light active:text-highlight-light font-header text-xl fill-primary-light"
          >
            <p className="hidden md:inline">Monsters</p>
            <Monsters className="md:hidden h-3/5" />
          </Link>
          <Link
            href="/item"
            className="h-full px-4 flex items-center transition hover:shadow-none hover:bg-gradient-to-t from-transparent to-secondary-light focus:bg-gradient-to-t active:fill-highlight-light active:text-highlight-light font-header text-xl fill-primary-light"
          >
            <p className="hidden md:inline">Items</p>
            <Items className="md:hidden h-3/5" />
          </Link>
          <Link
            href="/magic"
            className="h-full px-4 flex items-center transition hover:shadow-none hover:bg-gradient-to-t from-transparent to-secondary-light focus:bg-gradient-to-t active:fill-highlight-light active:text-highlight-light font-header text-xl fill-primary-light"
          >
            <p className="hidden md:inline">Magic</p>
            <Magics className="md:hidden h-3/5" />
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <>
      <TopNav />
      <PlayContext.Provider value={{ playChoice, setPlayChoice }}>
        <main className="flex flex-col h-full font-text">{children}</main>
      </PlayContext.Provider>
    </>
  );
}
