// GraphQl schema

import { Field, ID, ObjectType } from "@nestjs/graphql";
import { StudentType } from "../student/student.type"


@ObjectType("Lesson") // Decorate as a object type to tell GraphQL that this is a type. The argument in the decorator changes the name of the type from LessonType to Lesson
export class LessonType {

    @Field(type => ID) // First argument of the decorator tells graphql the type of the field. ID is a type that comes with GraphQl
    id: string;

    @Field() // The Field decorator tells GraphQL that this is a field
    name: string;

    @Field()
    startDate: string;

    @Field()
    endDate: string;
	
// 	Linking Lessons with Students
	@Field(type => [StudentType])
	students: string[];
}