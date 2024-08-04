// prettier-ignore
'use client'

import { createCharacter } from "@/prisma/scripts/character";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import SingleLineText from "../../_form-fields/singleLineText";
import SwitchField from "../../_form-fields/switchField";
import MultiLineText from "../../_form-fields/multiLineText";
import VitalityLevel from "../../_form-fields/vitalityLevel";
import TraitsCharacter from "../../_form-fields/traitsCharacter";
import Details from "../../_form-fields/details";
import Attributes from "../../_form-fields/attributes";
import FormButtons from "../../_form-fields/formButtons";

const schema = z.object({
  name: z.string(),
  background: z.string(),
  level: z.number(),
});

function create() {}

export default function AddCharacter() {
  return (
    <form className="flex flex-col p-2 gap-2 w-[676px]" action={create}>
      <div className="flex flex-row gap-2">
        <SingleLineText id={"name"} name={"name"} showRandom={false} />
        <SwitchField id={"npc"} />
      </div>
      <div className="flex flex-row gap-2">
        <MultiLineText id="background" name={"background"} />
        <VitalityLevel id={""} />
      </div>
      <TraitsCharacter
        id={""}
        clothing={"Clothing"}
        appearance={"Appearance"}
        physical_detail={"Physical Detail"}
        personality={"Personality"}
        mannerism={"Mannerism"}
        hobby={"Hobby"}
      />
      <Details
        id={""}
        profession={"Profession"}
        reputation={"Reputation"}
        misfortune={"Misfortune"}
        goal={"Goal"}
        secret={"Secret"}
        asset={"Asset"}
        liability={"Liability"}
      />
      <Attributes idArmor={""} idLevel={""} />
      <FormButtons showRandom={false} />
    </form>
  );
}
