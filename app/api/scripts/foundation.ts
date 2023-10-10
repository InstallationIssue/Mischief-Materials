import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getFoundations(){
    return await prisma.foundation.findMany({
        select: {
            id      : true,
            name    : true,
            setting : true
        }
    })
}

export async function createFoundation(name: string, setting: string){

    const foundation = await prisma.foundation.create({
        data: {
            name: name,
            setting: setting
        }
      })
    return foundation
}

export async function updateFoundation(id: number, name?: string, setting?: string) {
    const foundation = await prisma.foundation.update({
        where: {
            id: id
        },
        data: {
            name: name,
            setting: setting
        }
    })
    return foundation
}

export async function getFoundationById(id: number){
    return await prisma.foundation.findUniqueOrThrow({
        where: {
            id: id
        },
        select: {
            name: true,
            setting: true
        }
    })
}

export async function deleteFoundation(id: number){
    return await prisma.foundation.delete({
        where: {
            id: id
        }
    })
}
