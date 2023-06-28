import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

function randomNumber(num: number) {
  return Math.floor(Math.random() * num)
}

async function main() {
    // Queries
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })