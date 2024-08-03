"use client";

import { createLocation } from "@/prisma/scripts/location";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import SingleLineText from "../../_form-fields/singleLineText";
import MultiLineText from "../../_form-fields/multiLineText";
import Color from "../../_form-fields/color";
import FormButtons from "../../_form-fields/formButtons";
import IconsLocation from "../../_form-fields/iconsLocation";

const schema = z.object({
  name: z.string(),
  description: z.string(),
  color: z.string(),
  icon: z.string(),
});

/*
async function create(formData: FormData) {
    'use server'

    const parsed = schema.parse({
      name: formData.get('name'),
      description: formData.get('description'),
      color: formData.get('color'),
      icon: formData.get('locationIcon')
    })

    try {
      const response = await createLocation(parsed.name, parsed.description, parsed.color, parsed.icon)
    }
    catch (e) {
      return { message: 'Failed to create' }
    }
    
    revalidatePath('/scenario')
    redirect("/scenario");
}
*/

function create() {}

export default function AddLocation() {
  return (
    <div>
      <form className="flex flex-col space-y-2 py-2 w-fit" action={create}>
        <SingleLineText id="name" name={""} showRandom={false} />
        <MultiLineText id="description" name={""} />
        <Color id={"color"} name={""} />
        <IconsLocation id={"icon"} name={""} />
        <FormButtons showRandom={false} />
      </form>
    </div>
  );
}
