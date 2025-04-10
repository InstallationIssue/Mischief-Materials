"use server";

import prisma from "./db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Read
export async function getSpells() {
  return await prisma.spell.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      magic_id: true,
    },
  });
}

export async function getSpellById(id: number) {
  return await prisma.spell.findUniqueOrThrow({
    where: {
      id: id,
    },
    select: {
      name: true,
      description: true,
      magic_id: true,
    },
  });
}

// Create
export async function createSpell(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string(),
    description: z.string(),
    magic_id: z.number(),
  });

  const parsed = schema.parse({
    name: formData.get("name"),
    description: formData.get("description"),
    magic_id: formData.get("magic_id"),
  });

  try {
    const spell = await prisma.spell.create({
      data: {
        name: parsed.name,
        description: parsed.description,
        magic_id: parsed.magic_id,
      },
    });
    revalidatePath("/spell");
    return { message: `Added spell ${spell.id}` };
  } catch (e) {
    return { message: "Failed to create spell" };
  }
}

// Update
export async function updateSpell(prevState: any, formData: FormData) {
  const schema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    magic_id: z.number(),
  });

  const parsed = schema.parse({
    id: formData.get("id"),
    name: formData.get("name"),
    description: formData.get("description"),
    magic_id: formData.get("magic_id"),
  });

  try {
    const spell = await prisma.spell.update({
      where: {
        id: parsed.id,
      },
      data: {
        name: parsed.name,
        description: parsed.description,
        magic_id: parsed.magic_id,
      },
    });
    revalidatePath("/spell");
    return { message: `Updated spell ${spell.id}` };
  } catch (e) {
    return { message: "Failed to update spell" };
  }
}

// Delete
export async function deleteSpell(prevState: any, formData: FormData) {
  const schema = z.object({
    id: z.number(),
  });

  const parsed = schema.parse({
    id: formData.get("id"),
  });

  try {
    const spell = await prisma.spell.delete({
      where: {
        id: parsed.id,
      },
    });
    revalidatePath("/spell");
    return { message: `Deleted spell ${parsed.id}` };
  } catch (e) {
    return { message: "Failed to delete spell" };
  }
}
