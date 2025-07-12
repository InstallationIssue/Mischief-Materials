// prettier-ignore
'use client'

import { useFormState, useFormStatus } from "react-dom";
import TextInput from "../../_form-fields/textInput";
import TraitsMonster from "../../_form-fields/traitsMonster";
import IconsSize from "../../_form-fields/iconsSize";
import Attributes from "../../_form-fields/attributes";
import { createMonster } from "@/prisma/scripts/monster";
import Accessibility, { IAppState } from "@/app/_form-fields/accessibility";
import FormButtons from "@/app/_form-fields/formButtons";

const initialState: IAppState = {
  message: "",
};

export default function AddMonster() {
  const [state, formAction] = useFormState(createMonster, initialState);

  return (
    <form className="w-[660px] flex flex-col gap-2 py-2" action={formAction}>
      <TextInput
        id={"name"}
        name={"name"}
        multiline={false}
        showRandom={false}
      />
      <TextInput
        id={"background"}
        name={"background"}
        multiline={true}
        showRandom={false}
      />
      <TraitsMonster
        id={"traits"}
        personality={"Personality"}
        tactic={"Tactic"}
        weakness={"Weakness"}
      />
      <IconsSize name={"size"} />
      <Attributes idArmor={"armor"} idLevel={"level"} />
      <FormButtons showRandom={true} />
      <Accessibility state={state} />
    </form>
  );
}
