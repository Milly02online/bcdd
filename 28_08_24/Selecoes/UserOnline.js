const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function Online() {
  const users = await prisma.user.findMany({
    where: {
      status: 'Online',
    }
  });

  console.log(users);
}

Online();