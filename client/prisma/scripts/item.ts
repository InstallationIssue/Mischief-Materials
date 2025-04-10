"use server";

import prisma from "./db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Read
export async function getItems() {
  return await prisma.item.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      value: true,
    },
  });
}

export async function getItemById(id: number) {
  return await prisma.item.findUniqueOrThrow({
    where: {
      id: id,
    },
    select: {
      name: true,
      description: true,
      value: true,
    },
  });
}

export async function getItemExtras(id: number) {
  return await prisma.item.findUniqueOrThrow({
    where: {
      id: id,
    },
    select: {
      scenarios: true,
      characters: true,
    },
  });
}

export async function getItemsBySearch(term: string) {
  if (term === "") {
    return await prisma.item.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        value: true,
      },
    });
  } else {
    return await prisma.item.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        value: true,
      },
      where: {
        name: {
          contains: term,
          mode: "insensitive",
        },
      },
    });
  }
}

// Create
export async function createItem(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string(),
    description: z.string(),
    value: z.number(),
  });

  const parsed = schema.parse({
    name: formData.get("name"),
    description: formData.get("description"),
    value: formData.get("value"),
  });

  try {
    const item = await prisma.item.create({
      data: {
        name: parsed.name,
        description: parsed.description,
        value: parsed.value,
      },
    });
    revalidatePath("/item");
    return { message: `Added item ${item.id}` };
  } catch (e) {
    return { message: "Failed to create item" };
  }
}

// Update
export async function updateItem(prevState: any, formData: FormData) {
  const schema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    value: z.number(),
  });

  const parsed = schema.parse({
    id: formData.get("id"),
    name: formData.get("name"),
    description: formData.get("description"),
    value: formData.get("value"),
  });

  try {
    const item = await prisma.item.update({
      where: {
        id: parsed.id,
      },
      data: {
        name: parsed.name,
        description: parsed.description,
        value: parsed.value,
      },
    });
    revalidatePath("/item");
    return { message: `Updated item ${item.id}` };
  } catch (e) {
    return { message: "Failed to update item" };
  }
}

// Delete
export async function deleteItem(prevState: any, formData: FormData) {
  const schema = z.object({
    id: z.number(),
  });

  const parsed = schema.parse({
    id: formData.get("id"),
  });

  try {
    const item = await prisma.item.delete({
      where: {
        id: parsed.id,
      },
    });
    revalidatePath("/item");
    return { message: `Deleted item ${parsed.id}` };
  } catch (e) {
    return { message: "Failed to delete item" };
  }
}
