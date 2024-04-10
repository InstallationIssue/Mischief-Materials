'use client'

import { useFormState, useFormStatus } from "react-dom"
import SingleLineText from "../../_form-fields/singleLineText"
import MultiLineText from "../../_form-fields/multiLineText"
import ImageInput from "../../_form-fields/imageInput"
import FormButtons from "../../_form-fields/formButtons"
import { createScenario } from "../../../prisma/scripts/scenario"

interface IAppState {
  message: string;
}
const initialState: IAppState = {
  message: ""
};

export default function AddScenario() {
  const [state, formAction] = useFormState(createScenario, initialState)

  return (
      <form className="flex flex-col space-y-2 p-2 items-center w-fit" action={formAction}>
        <p className="text-2xl font-play">Add Scenario</p>
        <SingleLineText id="name" name="name" showRandom={false}/>
        <MultiLineText id="description" name="description"/>
        <ImageInput id="image" name="image"/>
        <FormButtons showRandom={false}/>
        <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
        </p>
      </form>
  )
}