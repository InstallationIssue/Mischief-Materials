import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getNpcs(){
    return await prisma.npc.findMany({
        select: {
            character: {
                select: {
                    creature: true
                }
            }
        }
    })
}

async function createNpc(name: string, description: string,
    str = 0, dex = 0, wil = 0, armor = 6, health_max = 4, 
    background = '', appearance = '', physical_detail = '',
    clothing = '', personality = '', mannerism = '', 
    asset = '', liability = '', goal = '', 
    misfortune = '', mission = '', method = '') {
    const npc = await prisma.npc.create({
        data: {
          asset: asset,
          liability: liability,
          goal: goal,
          misfortune: misfortune,
          mission: mission,
          method: method,
          character: {
            create: {
                xp: 0,
                level: 1,
                background: background,
                appearance: appearance,
                physical_detail: physical_detail,
                clothing: clothing,
                personality: personality,
                mannerism: mannerism,
                creature: {
                    create: {
                        name: name,
                        description: description,
                        str: str,
                        dex: dex,
                        wil: wil,
                        armor: armor,
                        health_max: health_max,
                        health_lost: 0
                    }
                  }
            }
          }
        },
      })
    return npc
}

async function updateNpc(id: number, name?: string, description?: string,
    str?: number, dex?: number, wil?: number, armor?: number, health_max?: number,
    background?: string, appearance?: string, physical_detail?: string,
    clothing?: string, personality?: string, mannerism?: string, 
    asset?: string, liability?: string, goal?: string, 
    misfortune?: string, mission?: string, method?: string) {
    const npc = await prisma.npc.update({
        where: {
            id: id
        },
        data: {
            asset: asset,
            liability: liability,
            goal: goal,
            misfortune: misfortune,
            mission: mission,
            method: method,
            character: {
                update: {
                    background: background,
                    appearance: appearance,
                    physical_detail: physical_detail,
                    clothing: clothing,
                    personality: personality,
                    mannerism: mannerism,
                    creature: {
                        update: {
                            name: name,
                            description: description,
                            str: str,
                            dex: dex,
                            wil: wil,
                            armor: armor,
                            health_max: health_max,
                        }
                    }
                }
            }
        },
    })
    return npc
}

async function getnpcById(id: number){
    return await prisma.npc.findUniqueOrThrow({
        where: {
            id: id
        },
        select: {
            character: {
                select: {
                    creature: true
                }
            }
        }
    })
}