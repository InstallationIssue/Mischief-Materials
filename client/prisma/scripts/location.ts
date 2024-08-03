"use server";

import prisma from "./db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Read
export async function getLocations() {
  return await prisma.location.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      color: true,
      icon: true,
    },
  });
}

export async function getLocationById(id: number) {
  return await prisma.location.findUniqueOrThrow({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      description: true,
      color: true,
      icon: true,
    },
  });
}

export async function getLocationExtras(id: number) {
  return await prisma.location.findUniqueOrThrow({
    where: {
      id: id,
    },
    select: {
      scenarios: true,
    },
  });
}

export async function getLocationsBySearch(term: string) {
  if (term === "") {
    return await prisma.location.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        color: true,
        icon: true,
      },
    });
  } else {
    return await prisma.location.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        color: true,
        icon: true,
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
export async function createLocation(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string(),
    description: z.string(),
    color: z.string(),
    icon: z.string(),
  });

  const parsed = schema.parse({
    name: formData.get("name"),
    description: formData.get("description"),
    color: formData.get("color"),
    icon: formData.get("icon"),
  });

  try {
    const location = await prisma.location.create({
      data: {
        name: parsed.name,
        description: parsed.description,
        color: parsed.color,
        icon: parsed.icon,
      },
    });
    revalidatePath("/location");
    return { message: `Added location ${location.id}` };
  } catch (e) {
    return { message: "Failed to create location" };
  }
}

// Update
export async function updateLocation(prevState: any, formData: FormData) {
  const schema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    color: z.string(),
    icon: z.string(),
  });

  const parsed = schema.parse({
    id: formData.get("id"),
    name: formData.get("name"),
    description: formData.get("description"),
    color: formData.get("color"),
    icon: formData.get("icon"),
  });

  try {
    const location = await prisma.location.update({
      where: {
        id: parsed.id,
      },
      data: {
        name: parsed.name,
        description: parsed.description,
        color: parsed.color,
        icon: parsed.icon,
      },
    });
    revalidatePath("/location");
    return { message: `Updated location ${location.id}` };
  } catch (e) {
    return { message: "Failed to update location" };
  }
}

// Delete
export async function deleteLocation(prevState: any, formData: FormData) {
  const schema = z.object({
    id: z.number(),
  });

  const parsed = schema.parse({
    id: formData.get("id"),
  });

  try {
    const location = await prisma.location.delete({
      where: {
        id: parsed.id,
      },
    });
    revalidatePath("/location");
    return { message: `Deleted location ${parsed.id}` };
  } catch (e) {
    return { message: "Failed to delete location" };
  }
}
