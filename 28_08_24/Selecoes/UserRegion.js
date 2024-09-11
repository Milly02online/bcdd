const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function Region() {
  const users = await prisma.user.findMany({
    where: {
      region: 'São Paulo',
    }
  });

  console.log(users);
}

Region();