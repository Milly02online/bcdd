const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const data = [
    {
    name: 'Teclado',
    description: 'Teclado original',
    preco: 950.90,
    stock: 79,
    assessment: 4.8
    },

    {
    name: 'Teclado',
    description: 'Teclado usado',
    preco: 750.99,
    stock: 29,
    assessment: 3.9
    },

    {
    name: 'Mouse bluetooth',
    description: 'Mouse usado',
    preco: 150.90,
    stock: 30,
    assessment: 4.2
    },

    {
    name: 'Notebook',
    description: 'Notebook versão primária',
    preco: 990.90,
    stock: 70,
    assessment: 4.5
    },

    {
    name: 'Notebook',
    description: 'Notebook usado versão atualizada',
    preco: 850.90,
    stock: 19,
    assessment: 3.8
    }
  ];

  await prisma.product.createMany({ data });
  console.log("Usuário cadastrado com sucesso!");

  const product = await prisma.product.findMany();
  console.log(product);
}

main();