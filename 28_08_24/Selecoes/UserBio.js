const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function Avatar() {
  const users = await prisma.user.findMany({
    where: {
      bio: {contains: "animi"}
    }
  });

  console.log(users);
}

Avatar();