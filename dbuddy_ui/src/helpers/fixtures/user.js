import { faker } from "@faker-js/faker"
import { v4 as uuid4 } from "uuid"


export default function userFixtures() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return {
        id: uuid4(),
        first_name: firstName,
        last_name: lastName,
        name: firstName + " " + lastName,
        project_count: Math.floor(Math.random() * 10),
        email: `${firstName}@gmail.com`,
        bio: faker.lorem.sentence(20),
        username: firstName + lastName,
        avatar: null,
        created: faker.date.recent(),
        updated: faker.date.recent()
    }
}