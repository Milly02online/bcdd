import { PrismaClient } from '@prisma/client';
import { Faker, pt_BR } from '@faker-js/faker';

const prisma = new PrismaClient();

const seed = async () => {
  await prisma.user.deleteMany();

	const faker = new Faker({ locale: [pt_BR] });

	faker.seed(1);

	const data = Array.from({ length: 1000 }, () => {
    const status = faker.helpers.arrayElement(['Online', 'Offline', 'Ocupado', 'Na escola', 'No trabalho']);
		const fullName = faker.person.fullName();
		const userName = faker.internet.userName({ firstName: fullName });
    const birthDate = faker.date.birthdate({ mode: 'age' });
    const city = faker.location.city();
    const region = faker.helpers.arrayElement(['Rio de janeiro', 'São Paulo', 'Minas Gerais', 'Espírito Santo', 'Rio Grande do Sul', 'Santa Catarina', 'Paraná', 'Mato Grosso do Sul', 'Mato Grosso']);
    const phone = faker.phone.number();
    const avatar = faker.helpers.maybe(() => faker.image.urlPicsumPhotos(), 0.5);
		const bio = faker.helpers.maybe(() => faker.lorem.text(), 0.2);
		const createdAt = faker.date.past({ years: 1 });

		return { status, userName, birthDate, city, region, phone, avatar, bio, createdAt };
	});

	await prisma.user.createMany({ data, skipDuplicates: true });
};

//console.log(data)
seed()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});