const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const data = [
    {
    complete_name: 'Julia Oliveira',
    user: 'Julinha_02',
    type: 'User',
    email: 'Juliaonline@gmail.com',
    password: '020809',
    date_birth: new Date('2008-08-14').toISOString()
    },

    {
    complete_name: 'Julio Oswaldo Silva',
    user: 'Julioswaldo_054',
    type: 'User',
    email: 'JulinhoGato@gmail.com',
    password: 'online',
    date_birth: new Date('2000-10-24').toISOString()
    },

    {
    complete_name: 'Camila Santos',
    user: 'CamiSan',
    type: 'User',
    email: 'CamiSan2030@gmail.com',
    password: 'Camisan',
    date_birth: new Date('2000-08-06').toISOString()
    },

    {
    complete_name: 'Thiago Matos',
    user: 'Mato_sThiago',
    type: 'Adm',
    email: 'Thiago_Matos@gmail.com',
    password: 'ThiMa11',
    date_birth: new Date('1993-02-23').toISOString()
    },

    {
    complete_name: 'Rebeca Teixeira',
    user: 'RebecaTeix_44',
    type: 'Adm',
    email: 'RebeTeix44@gmail.com',
    password: '090870re',
    date_birth: new Date('1994-08-03').toISOString()
    }
  ];

  await prisma.user.createMany({ data });
  console.log("Usuário cadastrado com sucesso!");

  const user = await prisma.user.findMany();
  console.log(user);
}

main();