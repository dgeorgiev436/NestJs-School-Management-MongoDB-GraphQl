import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessionService } from "./lession.service"
import { CreateLessonInput } from "./lesson.input"
import { AssignStudentsToLessonInput } from "./assign-students-to-lesson.input"
import { Lesson } from "./lesson.entity"
import { StudentService } from "../student/student.service"

@Resolver((of) => LessonType) // Decorating the class with the Resolver decorator makes it a resolver. First argument tells of what type is the resolver (what does it resolve)
export class LessonResolver {
  // Inside we define queries and mutations
  // Queries are used to retrieve date
  // Mutations are used to create a new data or change existing data
	
  	constructor(
		private lessonService: LessionService,  // Injet lessonService
		private studentService: StudentService // Inject StudentService 
 	){}

  @Query(returns => LessonType) // Query decorator export from @nestjs/graphql. First argument tells what type does the query returns
  lesson(
	@Args("id") id: string 
	) {
		return this.lessonService.getLesson(id);
	}
	
	@Query(returns => [LessonType]) // Returns an array of LessonTypes
	lessons() {
		return this.lessonService.getLessons()
	}

  @Mutation(returns => LessonType) // The Mutation decorator allows GraphQl to recognise this function as a mutation. First argument specifies the return type of the function.
 	createLession(@Args("createLessonInput") createLessonInput: CreateLessonInput){
    	return this.lessonService.createLesson(createLessonInput)
  }
	
	@Mutation(returns => LessonType)
	assignStudentsToLesson(
		@Args("assignStudentsToLessonInput") assignStudentsToLessonInput: AssignStudentsToLessonInput
	) {
		const {studentIds, lessonId} = assignStudentsToLessonInput
			
		return this.lessonService.assignStudentsToLesson(lessonId, studentIds)
	}
	
	
	@ResolveField() // Reolsver for a field decorator
	async students(@Parent() lesson: Lesson){ // Parent decorator to hlep with resolving the students field
		return this.studentService.getManyStudents(lesson.students)
	}
}
