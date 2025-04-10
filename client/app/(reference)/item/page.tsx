import ItemCard from "./itemCard";
import CardList from "@/app/_components/cardList";
import AnimationContainer from "@/app/_components/animationContainer";
import { getItems, getItemsBySearch } from "@/prisma/scripts/item";
import { Metadata } from "next";
import ModelView from "@/app/_components/modelView";

export const metadata: Metadata = {
  title: "Items",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const data = await getItemsBySearch(query);

  return (
    <ModelView title={"items"} model={"item"}>
      <CardList>
        {data.map((id) => (
          <AnimationContainer
            key={id.id}
            className={
              "w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-2"
            }
          >
            <ItemCard id={id.id} name={id.name} value={id.value} />
          </AnimationContainer>
        ))}
      </CardList>
    </ModelView>
  );
}
