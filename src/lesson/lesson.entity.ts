// TypeOrm schema

import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";


@Entity() // The entity decorator makes this class an Entity
export class Lesson {

    @ObjectIdColumn() // Default Internal object ID by MongoDB
    _id: string;

    @PrimaryColumn() // The ID which will be used as a primary key
    id: string;

    @Column() // Regular column field
    name: string;

    @Column()
    startDate: string;

    @Column()
    endDate: string
}