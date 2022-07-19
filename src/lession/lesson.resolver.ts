import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessionService } from "./lession.service"
import { CreateLessonInput } from "./lesson.input"

@Resolver((of) => LessonType) // Decorating the class with the Resolver decorator makes it a resolver. First argument tells of what type is the resolver (what does it resolve)
export class LessonResolver {
  // Inside we define queries and mutations
  // Queries are used to retrieve date
  // Mutations are used to create a new data or change existing data
	
  	constructor(
		private lessonService: LessionService  // Injet lessonService
 	){}

  @Query(returns => LessonType) // Query decorator export from @nestjs/graphql. First argument tells what type does the query returns
  lesson(
	@Args("id") id: string 
	) {
		return this.lessonService.getLesson(id);
	}

  @Mutation(returns => LessonType) // The Mutation decorator allows GraphQl to recognise this function as a mutation. First argument specifies the return type of the function.
 	createLession(@Args("createLessonInput") createLessonInput: CreateLessonInput){
    	return this.lessonService.createLesson(createLessonInput)
  }
}
