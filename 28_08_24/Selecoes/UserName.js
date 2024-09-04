const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function Unico() {
  const users = await prisma.user.findUnique({
    where: {
      userName: 'LiviaMoraes.Xavier27',
    }
  });

  console.log(users);
}

Unico();