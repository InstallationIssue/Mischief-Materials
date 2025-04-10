// prettier-ignore
'use client'

import { useFormState, useFormStatus } from "react-dom";
import TextInput from "../../_form-fields/textInput";
import ImageInput from "../../_form-fields/imageInput";
import FormButtons from "../../_form-fields/formButtons";
import { createScenario } from "../../../prisma/scripts/scenario";
import Accessibility, { IAppState } from "@/app/_form-fields/accessibility";

const initialState: IAppState = {
  message: "",
};

export default function AddScenario() {
  const [state, formAction] = useFormState(createScenario, initialState);

  return (
    <form
      className="w-80 flex flex-col p-2 items-center gap-2"
      action={formAction}
    >
      <p className="text-2xl font-header">Add Scenario</p>
      <TextInput id="name" name="name" showRandom={false} multiline={false} />
      <TextInput
        id="description"
        name="description"
        multiline={true}
        showRandom={false}
      />
      <ImageInput id="image" name="image" />
      <FormButtons showRandom={false} />
      <Accessibility state={state} />
    </form>
  );
}
