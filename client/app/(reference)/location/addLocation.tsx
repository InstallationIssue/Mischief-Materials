// prettier-ignore
'use client'

import { useFormState, useFormStatus } from "react-dom";
import TextInput from "../../_form-fields/textInput";
import Color from "../../_form-fields/color";
import FormButtons from "../../_form-fields/formButtons";
import IconsLocation from "../../_form-fields/iconsLocation";
import { createLocation } from "@/prisma/scripts/location";
import Accessibility, { IAppState } from "@/app/_form-fields/accessibility";

const initialState: IAppState = {
  message: "",
};

export default function AddLocation() {
  const [state, formAction] = useFormState(createLocation, initialState);

  return (
    <form
      className="w-80 flex flex-col p-2 items-center gap-2"
      action={formAction}
    >
      <TextInput id="name" name={"name"} multiline={false} showRandom={false} />
      <TextInput
        id="description"
        name={"description"}
        multiline={true}
        showRandom={false}
      />
      <Color name={"color"} />
      <IconsLocation name={"icon"} />
      <FormButtons showRandom={false} />
      <Accessibility state={state} />
    </form>
  );
}
