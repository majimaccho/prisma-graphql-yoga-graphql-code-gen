import { PrismaClient } from '@prisma/client'
import { v4 } from 'uuid'
const prisma = new PrismaClient()


const main = async () => {
  const tasks = await prisma.task.createMany({
    data: [
      {
        id: v4(),
        content: 'hogehoge',
        hasDone: false,
      }
    ]
  })
  console.log({ tasks });
}

void main()