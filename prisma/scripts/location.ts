import prisma from "./main"

export async function getLocations(){
    return await prisma.location.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            color: true,
            icon: true
        }
    })
}

export async function createLocation(name: string, description: string, color: string, icon: string){

    const location = await prisma.location.create({
        data: {
            name: name,
            description: description,
            color: color,
            icon: icon
        }
      })
    return location
}

export async function updateLocation(id: number, name?: string, description?: string, color?: string, icon?: string) {
    const location = await prisma.location.update({
        where: {
            id: id
        },
        data: {
            name: name,
            description: description,
            color: color,
            icon: icon
        }
    })
    return location
}

export async function getLocationById(id: number){
    return await prisma.location.findUniqueOrThrow({
        where: {
            id: id
        },
        select: {
            name: true,
            description: true,
            color: true,
            icon: true
        }
    })
}

export async function deleteLocation(id: number){
    return await prisma.location.delete({
        where: {
            id: id
        }
    })
}
