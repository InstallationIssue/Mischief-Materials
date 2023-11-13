'use client'

import { useFormState, useFormStatus } from "react-dom"
import SingleLineText from "../form-fields/singleLineText"
import MultiLineText from "../form-fields/multiLineText"
import Image from "../form-fields/image"
import FormButtons from "../form-fields/formButtons"
import { createScenario } from "../actions"

const initialState = {
  message: null,
}

export default function AddScenario() {
  const [state, formAction] = useFormState(createScenario, initialState)

  return (
      <form className="flex flex-col space-y-2 py-2 items-center w-fit" action={formAction}>
        <SingleLineText id="name" name="name" showRandom={false}/>
        <MultiLineText id="description" name="description"/>
        <Image id="image" name="image"/>
        <FormButtons showRandom={false}/>
        <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
        </p>
      </form>
  )
}