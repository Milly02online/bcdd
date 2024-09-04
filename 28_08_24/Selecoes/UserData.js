const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function Data() {
  const users = await prisma.user.findMany({
    where: {
      userName: users.past({ month: 1 }),
    }
  });

  console.log(users);
}

Data();