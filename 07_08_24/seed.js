const { PrismaClient } = require('@prisma/client');
const { fakerPT_BR: faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {

  const data = Array.from({ length: 10 }).map(function () {
    const name = faker.person.firstName();
    //const username = 
    //const type =
    const email = faker.internet.email();
    //const password =
    //const birthday =
    //const createAt =

    return { name, username, type, email, password, birthday, createAt }
  });

  await prisma.user.createMany({ data });
}

main();