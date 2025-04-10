import Card from "./scenarioCard";
import CardList from "@/app/_components/cardList";
import AnimationContainer from "@/app/_components/animationContainer";
import { getScenarios, getScenariosBySearch } from "@/prisma/scripts/scenario";
import { Metadata } from "next";
import ModelView from "@/app/_components/modelView";

export const metadata: Metadata = {
  title: "Scenarios",
};

export default async function Scenario({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const data = await getScenariosBySearch(query);

  return (
    <ModelView title={"scenarios"} model={"scenario"}>
      {(data.length > 0 && (
        <CardList>
          {data.map((id) => (
            <AnimationContainer
              key={id.id}
              className={"w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-2"}
            >
              <Card
                id={id.id}
                name={id.name}
                description={id.description}
                image={id.image}
              />
            </AnimationContainer>
          ))}
        </CardList>
      )) || <span>Could not finnd anything</span>}
    </ModelView>
  );
}
