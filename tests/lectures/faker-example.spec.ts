import(faker) from "@faker-js/faker";

const fullName = faker.person.fullName();
const email = faker.internet.email({provider: 'example.com'});

await fullNameInput.fill(fullName);
await emailInput.fill(email);
