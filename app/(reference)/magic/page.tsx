import MagicCard from "./magicCard";
import CardList from "@/app/_components/cardList";
import AnimationContainer from "@/app/_components/animationContainer";
import { getMagics, getMagicsBySearch } from "@/prisma/scripts/magic";
import { Metadata } from "next";
import ModelView from "@/app/_components/modelView";

export const metadata: Metadata = {
  title: "Magic",
};

export default async function Page({
  searchParams,
}: {
  searchParams: {
    query: string;
    page: string;
  };
}) {
  const params = await searchParams
  const query = params.query || "";
  const currentPage = Number(params.page) || 1;
  const data = await getMagicsBySearch(query);

  return (
    <ModelView title="Magic" model="magic">
      <CardList>
        {data.map((id, index) => (
          <AnimationContainer
            key={id.id}
            className={
              "w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-2"
            }
          >
            <MagicCard
              id={id.id}
              name={id.name}
              medium={id.medium}
              spells={id.spells.length}
            />
          </AnimationContainer>
        ))}
      </CardList>
    </ModelView>
  );
}
