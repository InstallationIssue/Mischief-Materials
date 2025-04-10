import { Metadata } from "next";
import Link from "next/link";
import Logo from "/public/icons/logo.svg";
import HomeChoiceButton from "../_components/homeChoiceButton";
import Image from "next/image";

export const metadata: Metadata = {
  title: "RiTs Home",
};

export default function Page() {
  process.title = "RiTs Home";

  return (
    <div className="flex flex-col items-center w-full relative">
      <Link
        href="/"
        className="flex flex-row items-center absolute top-2 left-2 z-10"
      >
        <div className="h-16 aspect-square">
          <Logo />
        </div>
        <p className="text-4xl font-smooch shadow-sm">Rats in Transit</p>
      </Link>
      <div className="flex relative overflow-clip w-full h-96 justify-center">
        <Image
          src={"/images/death-valley.png"}
          alt={"Image of Death Valley Desert"}
          width={1940}
          height={1096}
          priority
          className="absolute object-cover -z-10 top-1/2 -m-[25%]"
        />
        <span className="flex flex-row justify-between w-2/3 items-center">
          <HomeChoiceButton text="Dungeon Master" hyperlink="/scenario" />
          <HomeChoiceButton text="Character" hyperlink="/character" />
        </span>
      </div>
      <div className="flex flex-col bg-primary-dark-grey px-10 py-6 gap-4 w-full">
        <h2 className="font-header font-bold text-2xl">What is Maze Rats?</h2>
        <p>
          Maze Rats is a table top role playing game similar to DND but designed
          to be much simpler and a more digestible format for newer or less
          patient players
        </p>
      </div>
      <div className="flex flex-col bg-primary-dark px-10 py-6 gap-4 w-full">
        <h2 className="font-header font-bold text-2xl">About The Site</h2>
        <p>
          Welcome to my Rats in Transit Web app. This is designed to be a
          companion app to the table top game maze rats. Please choose either of
          the options below to begin playing
        </p>
      </div>
      <div className="flex flex-col bg-primary-dark-grey px-10 py-6 gap-4 w-full">
        <h2 className="font-header font-bold text-2xl">About The Creator</h2>
        <p>
          This site was created by Angus Frost, a recently graduated Software
          Engineer for the purpose of developing skills in web development and
          as a way to more easily run and develop Maze Rats sessions
        </p>
      </div>
    </div>
  );
}
