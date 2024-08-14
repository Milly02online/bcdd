const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const data = [
    {
    title: 'Mi medicina',
    artists: 'CNCO',
    album: 'CNCO',
    genres: 'Reggaeton',
    single: false,
    release: 2017,
    duration: new Date('2024-08-14T00:04:04Z').toISOString(),
    },

    {
    title: 'Trevo (tu)',
    artists: 'Anavitória',
    album: 'Trevo',
    genres: 'MPB',
    single: true,
    release: 2016,
    duration: new Date('2024-08-14T00:03:28Z').toISOString(),
    },

    {
    title: 'Fallin (Adrenaline)',
    artists: "Why Dont't We",
    album: 'The Good Times and the Bad Ones',
    genres: 'Pop',
    single: false,
    release: 2017,
    duration: new Date('2024-08-14T00:03:38Z').toISOString(),
    },

    {
    title: 'De dentro pra fora',
    artists: 'Júlia Vitória',
    album: 'Acustico',
    genres: 'Gospel',
    single: true,
    release: 2016,
    duration: new Date('2024-08-14T00:05:19Z').toISOString(),
    },

    {
    title: 'Quédate',
    artists: 'Sou Luna',
    album: 'Sou Luna 3',
    genres: 'Pop latino',
    single: false,
    release: 2017,
    duration: new Date('2024-08-14T00:03:38Z').toISOString(),
    }
  ];

  await prisma.music.createMany({ data });
  console.log("Música cadastrada com sucesso!");

  const music = await prisma.music.findMany();
  console.log(music);
}

main();