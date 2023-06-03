import { faker } from "@faker-js/faker";
import { v4 as uuid4 } from "uuid";
import userFixtures from "./user";


export default function projectFixtures(isLiked = true, isEdited = false, user = undefined) {
    return {
        id: uuid4(),
        author: user || userFixtures(),
        description: faker.lorem.sentence(20),
        edited: isEdited,
        liked: isLiked,
        likes_count: Math.floor(Math.random() * 10),
        created: faker.date.recent(),
        updated: faker.date.recent(),
    };
};