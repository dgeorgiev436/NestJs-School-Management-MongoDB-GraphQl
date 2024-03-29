import { Resolver, Mutation, Args, Query } from "@nestjs/graphql"
import { StudentType } from "./student.type"
import { CreateStudentInput } from "./create-student.input"
import { StudentService } from "./student.service"


@Resolver(of => StudentType)
export class StudentResolver {
	
	constructor(
		private studentService: StudentService
	){}
	
	@Query(returns => [StudentType])
	async getUsers() {
		return this.studentService.getUsers();
	}
	
	@Query(returns => StudentType)
	async getUserById(@Args("id") id: string) {
		return this.studentService.getUserById(id)
	}
	
	@Mutation(returns => StudentType)
	createUser(@Args("createStudentInput") createStudentInput: CreateStudentInput) {
		return this.studentService.createUser(createStudentInput)
	}
	
}