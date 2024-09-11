const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function lastMonth() {
  const lastMonth = new Date();

  lastMonth.setMonth(lastMonth.getMonth() - 1)
  const registeredUsers = await prisma.user.findMany({
    where: {
      createdAt: { gte: lastMonth }}
    },
  );

  console.log(registeredUsers);
}

lastMonth();