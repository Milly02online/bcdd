const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function Region() {
  const users = await prisma.user.findMany({
    where: { region: { in: ["São Paulo", "Rio de Janeiro", "Minas Gerais", "Espírito Santo"] } },
  });

  console.log(users);
}

Region();