import { insertCsvToMysql } from './../insert-csv-to-mysql';
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Fakes extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    sentence: string;

    @Column()
    profession: string;

    @Column()
    birthday: Date;
}
