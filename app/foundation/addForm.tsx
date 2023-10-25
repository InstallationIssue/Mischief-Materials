'use client'

//import { experimental_useFormState as useFormState } from 'react-dom'
//import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { createFoundation } from '@/prisma/scripts/foundation'

const initialState = {
  message: null,
}

/*
function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" aria-disabled={pending}>
      Add
    </button>
  )
}
*/

export function AddForm() {
  //const [state, formAction] = useFormState(createFoundation, initialState)

  return (
    <form className="flex flex-col space-y-2 py-2" action={""/*formAction*/}>
        <label htmlFor='name'>Name</label>
        <input type="text" id="name" name='name'></input>
        <label htmlFor='setting'>Setting</label>
        <input type="text" id="setting" name='setting'></input>
        <button type='submit'/>
        <p aria-live="polite" className="sr-only" role="status">
        {""/*state?.message*/}
      </p>
    </form>
  )
}
