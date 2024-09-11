const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function Avatar() {
  const users = await prisma.user.findMany({
    where: {
      avatar: null,
    }
  });

  console.log(users);
}

Avatar();