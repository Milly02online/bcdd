const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function lastBirthday() {
  const users = await prisma.user.findMany();
  const birth = users.map(user => ({
    ...user,
    birthDate: user.birthDate.toISOString() //converte a data em string
  }));

  const filters = birth.filter(user =>
    user.birthDate.includes("-09-")
  );

  console.log(filters);

}

lastBirthday();