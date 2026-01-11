"use server";

import prisma from "./db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Read
export async function getMonsters() {
  return await prisma.monster.findMany({
    select: {
      id: true,
      name: true,
      background: true,
      health_max: true,
      armor: true,
      str: true,
      dex: true,
      wil: true,
      size: true,
      attack: true,
    },
  });
}

export async function getMonsterById(id: number) {
  return await prisma.monster.findUniqueOrThrow({
    where: {
      id: id,
    },
    select: {
      name: true,
      background: true,
      health_max: true,
      armor: true,
      str: true,
      dex: true,
      wil: true,
      size: true,
      attack: true,
      tactics: true,
      personality: true,
      weakness: true,
    },
  });
}

export async function getMonsterExtras(id: number) {
  return await prisma.monster.findUniqueOrThrow({
    where: {
      id: id,
    },
    select: {
      tactics: true,
      personality: true,
      weakness: true,
    },
  });
}

export async function getMonstersBySearch(term: string) {
  if (term === "") {
    return await prisma.monster.findMany({
      select: {
        id: true,
        name: true,
        background: true,
        health_max: true,
        armor: true,
        str: true,
        dex: true,
        wil: true,
        size: true,
        attack: true,
      },
    });
  } else {
    return await prisma.monster.findMany({
      select: {
        id: true,
        name: true,
        background: true,
        health_max: true,
        armor: true,
        str: true,
        dex: true,
        wil: true,
        size: true,
        attack: true,
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
export async function createMonster(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string(),
    background: z.string(),
    health_max: z.number(),
    armor: z.number(),
    str: z.number(),
    dex: z.number(),
    wil: z.number(),
    attack: z.number(),
    size: z.string(),
    tactics: z.string(),
    personality: z.string(),
    weakness: z.string(),
  });

  const parsed = schema.parse({
    name: formData.get("name"),
    description: formData.get("description"),
    health_max: formData.get("health_max"),
    armor: formData.get("armor"),
    str: formData.get("str"),
    dex: formData.get("dex"),
    wil: formData.get("wil"),
    attack: formData.get("attack"),
    size: formData.get("size"),
    tactics: formData.get("tactics"),
    personality: formData.get("personality"),
    weakness: formData.get("weakness"),
  });

  try {
    const monster = await prisma.monster.create({
      data: {
        name: parsed.name,
        background: parsed.background,
        health_max: parsed.health_max,
        armor: parsed.armor,
        str: parsed.str,
        dex: parsed.dex,
        wil: parsed.wil,
        size: parsed.size,
        attack: parsed.attack,
        tactics: parsed.tactics,
        personality: parsed.personality,
        weakness: parsed.weakness,
      },
    });
    revalidatePath("/monster");
    return { message: `Added monster ${monster.id}` };
  } catch (e) {
    return { message: "Failed to create monster" };
  }
}

// Update
export async function updateMonster(prevState: any, formData: FormData) {
  const schema = z.object({
    id: z.number(),
    name: z.string(),
    background: z.string(),
    health_max: z.number(),
    armor: z.number(),
    str: z.number(),
    dex: z.number(),
    wil: z.number(),
    attack: z.number(),
    size: z.string(),
    tactics: z.string(),
    personality: z.string(),
    weakness: z.string(),
  });

  const parsed = schema.parse({
    id: formData.get("id"),
    name: formData.get("name"),
    description: formData.get("description"),
    health_max: formData.get("health_max"),
    armor: formData.get("armor"),
    str: formData.get("str"),
    dex: formData.get("dex"),
    wil: formData.get("wil"),
    attack: formData.get("attack"),
    size: formData.get("size"),
    tactics: formData.get("tactics"),
    personality: formData.get("personality"),
    weakness: formData.get("weakness"),
  });

  try {
    const monster = await prisma.monster.update({
      where: {
        id: parsed.id,
      },
      data: {
        name: parsed.name,
        background: parsed.background,
        health_max: parsed.health_max,
        armor: parsed.armor,
        str: parsed.str,
        dex: parsed.dex,
        wil: parsed.wil,
        size: parsed.size,
        attack: parsed.attack,
        tactics: parsed.tactics,
        personality: parsed.personality,
        weakness: parsed.weakness,
      },
    });
    revalidatePath("/monster");
    return { message: `Updated monster ${monster.id}` };
  } catch (e) {
    return { message: "Failed to update monster" };
  }
}

// Delete
export async function deleteMonster(prevState: any, formData: FormData) {
  const schema = z.object({
    id: z.number(),
  });

  const parsed = schema.parse({
    id: formData.get("id"),
  });

  try {
    const monster = await prisma.monster.delete({
      where: {
        id: parsed.id,
      },
    });
    revalidatePath("/monster");
    return { message: `Deleted monster ${parsed.id}` };
  } catch (e) {
    return { message: "Failed to delete monster" };
  }
}
