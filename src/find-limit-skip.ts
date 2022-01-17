import { getRepository } from "typeorm";
import { Fakes } from "./entity/Fakes";

export const findLimitSkip = async() => {
    const fakesRepository = getRepository(Fakes);
    let cursor;
    try {
        cursor = await fakesRepository.find({
            order: {
                birthday: "DESC",
                name: "ASC"
            },
            skip: 100,
            take: 5,
        });
        console.log(cursor);
    } catch(e) {
        console.log(e);
    }
}