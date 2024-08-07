const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const data = [
    { name: 'Fulano' },
    { name: 'Beltrano' },
    { name: 'Ciclano' }
  ];
  await prisma.user.createMany({ data });
  console.log("Música cadastrada com sucesso!");
}

main();