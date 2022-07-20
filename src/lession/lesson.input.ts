import { InputType, Field, ID } from "@nestjs/graphql";
import { MinLength, IsDateString, IsUUID } from "class-validator";

@InputType()
export class CreateLessonInput {
	@MinLength(1)
	@Field()
	name: string;
	
	@IsDateString()
	@Field()
	startDate: string;
	
	@IsDateString()
	@Field()
	endDate: string;
	
	@IsUUID("4", {each: true})
	@Field(() => [ID], { defaultValue: [] } ) // Setting the default value as an empty array (When lession is initioally created without students assigned)
	students: string[]
}