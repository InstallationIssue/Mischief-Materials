'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { experimental_useFormState as useFormState } from 'react-dom'
//import { createTodo } from '@/app/actions'
import { createFoundation } from "@/prisma/scripts/foundation"
import { revalidatePath } from "next/cache"






const initialState = {
  message: null,
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" aria-disabled={pending}>
      Add
    </button>
  )
}

export default async function add() {
  
  async function create(formData: FormData) {
    
    const data = 

    try {
      let x = await createFoundation("", "")
    }
    
  }

  const [state, formAction] = useFormState(createTodo, initialState)
 
  return <form action={create}>
    <label htmlFor='name'>Name</label>
    <input type="text" id="name" name='name'>Name...</input>
    <label htmlFor='setting'>Setting</label>
    <input type="text" id="setting" name='setting'></input>
    <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
  </form>
}