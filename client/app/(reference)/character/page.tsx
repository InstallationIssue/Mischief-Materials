import Card from "./characterCard";
import AnimationContainer from "@/app/_components/animationContainer";
import {
  getCharacters,
  getCharactersBySearch,
} from "@/prisma/scripts/character";
import { Metadata } from "next";
import CardList from "@/app/_components/cardList";
import ModelView from "@/app/_components/modelView";

export const metadata: Metadata = {
  title: "Characters",
};

export default async function Character({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const data = await getCharactersBySearch(query);

  return (
    <ModelView title={"characters"} model={"character"}>
      <CardList>
        {data.map((id) => (
          <AnimationContainer
            key={id.id}
            className={
              "w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-2"
            }
          >
            <Card
              id={id.id}
              name={id.name}
              health_max={id.health_max}
              health_lost={id.health_lost}
              armor={id.armor}
              str={id.str}
              dex={id.dex}
              wil={id.wil}
              att={id.att}
            />
          </AnimationContainer>
        ))}
      </CardList>
    </ModelView>
  );
}
