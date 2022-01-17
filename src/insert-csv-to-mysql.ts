import { getRepository } from "typeorm";
import { Fakes } from "./entity/Fakes";
import { csvFileReaderGenerator } from "./csv/csvFileReaderGenerator";

export const insertCsvToMysql = async(filename) => {
    const fakesRepository = getRepository(Fakes);
    try {
        for(let object of csvFileReaderGenerator(filename)) {
            const fakes = new Fakes();
            fakes.name = object.name;
            fakes.email = object.email;
            fakes.profession = object.profession;
            fakes.sentence = object.sentence;
            fakes.birthday = object.birthday;
            console.log(fakes)
            await fakesRepository.save(fakes);
        }
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log('finish');
    }
}