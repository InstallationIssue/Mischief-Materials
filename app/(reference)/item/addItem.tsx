// prettier-ignore
'use client'

import { createItem } from "@/prisma/scripts/item";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import TextInput from "../../_form-fields/textInput";
import Value from "../../_form-fields/value";
import FormButtons from "../../_form-fields/formButtons";

const schema = z.object({
  name: z.string(),
  description: z.string(),
  value: z.number(),
});

/*
async function create(formData: FormData) {
    'use server'

    const parsed = schema.parse({
      name: formData.get('name'),
      description: formData.get('description'),
      value: formData.get('value'),
      icon: formData.get('itemIcon')
    })

    try {
      const response = await createItem(parsed.name, parsed.description, parsed.value, parsed.icon)
    }
    catch (e) {
      return { message: 'Failed to create' }
    }
    
    revalidatePath('/scenario')
    redirect("/scenario");
}
*/

function create(formData: FormData) {}

export default function AddItem() {
  return (
    <form className="flex flex-col gap-2 p-2" action={create}>
      <span className="w-full flex flex-row gap-2">
        <TextInput id={"name"} name={""} showRandom={false} multiline={false} />
        <Value id={"value"} />
      </span>
      <TextInput
        id={"description"}
        name={""}
        multiline={true}
        showRandom={false}
      />
      <FormButtons showRandom={false} />
    </form>
  );
}
