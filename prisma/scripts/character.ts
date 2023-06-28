import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getCharacters(){
    return await prisma.creature.findMany()
}

async function createCharacter(name: string, description: string,
    str = 0, dex = 0, wil = 0, armor = 6, health_max = 4, 
    background = '', appearance = '', physical_detail = '',
    clothing = '', personality = '', mannerism = ''){

    const character = await prisma.character.create({
        data: {
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
      })
    return character
}

async function updateCharacter(id: number, name?: string, description?: string,
    str?: number, dex?: number, wil?: number, armor?: number, health_max?: number, 
    background?: string, appearance?: string, physical_detail?: string,
    clothing?: string, personality?: string, mannerism?: string) {
    const character = await prisma.character.update({
        where: {
            id: id
        },
        data: {
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
                    health_max: health_max
                }
            }
        }
    })
    return character
}

async function getCharacterById(id: number){
    return await prisma.character.findUniqueOrThrow({
        where: {
            id: id
        }
    })
}

async function addXp(id: number, xp: number){
    const character = await getCharacterById(id)
    
    let total_xp = character.xp + xp

    //x(x+1) = xp boundary
    //x = (-1 - Math.sqrt(-1+4*this.xp))/2;
    let x = (-1 + Math.sqrt(-1+4*total_xp))/2;
    //xp boundaries
    //2 6 12 20 30 42
    let lev = Math.ceil(x);

    const new_character = await prisma.character.update({
        where: {
            id: id
        },
        data: {
            xp: total_xp,
            level: lev,
            creature: {
                update: {
                    health_max: 2+2*lev
                }
            }
        }
    })
    return new_character
}