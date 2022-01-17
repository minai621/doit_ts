import express from 'express';
import { createConnection, getRepository } from 'typeorm';
import { Fakes } from './entity/Fakes';
import { insertCsvToMysql } from './insert-csv-to-mysql';
import { getFileNameAndNumber } from './utils';
import { findLimitSkip } from './find-limit-skip';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express(), port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({}));


createConnection(
    {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "0000",
        database: "test",
        synchronize: true,
        logging: false,
        entities: [Fakes]
    }
).then(() => {
    console.log('connect!!');
    // const [filename] = getFileNameAndNumber('./data/fake-100000.csv', 1);
    // insertCsvToMysql(filename);
    // findLimitSkip();
}).catch((error) => console.log(error));;

app.get('/users/:skip/:limit', async (req, res) => {
    const { skip, limit } = req.params;
    
    const fakesRepo = getRepository(Fakes);
    const cursor = await fakesRepo.find({
        order: {
            name: "ASC"
        },
        skip: parseInt(skip),
        take: parseInt(limit)
    });
    res.json(cursor);
})



app.listen(port, () => console.log('listen'));
