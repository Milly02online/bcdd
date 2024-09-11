const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function Phone() {
  const users = await prisma.user.findMany({
    where: {
      phone: {not: null}
    }
  });

  console.log(users);
}

Phone();