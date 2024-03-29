import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Student } from "./student.entity"
import { Repository } from "typeorm"
import { CreateStudentInput } from "./create-student.input"
import { v4 as uuid } from "uuid"

@Injectable()
export class StudentService {
	
	constructor(
		@InjectRepository(Student) private studentRepository: Repository<Student>
	){}
	
	async getUsers(): Promise<Student[]> {
		
		return this.studentRepository.find();
	}
	
	async getUserById(id: string): Promise<Student> {
		return this.studentRepository.findOne({ where: {id: id} })
	}
	
	
	async createUser(createStudentInput: CreateStudentInput): Promise<Student> {
		
		const {firstName, lastName} = createStudentInput;
		
		const student = this.studentRepository.create({
			id: uuid(),
			firstName,
			lastName
		})
		
		return this.studentRepository.save(student)	
	}
	
	async getManyStudents(studentIds: string[]): Promise<Student[]> {
// 		Get all students with the IDS provided in the array
		return this.studentRepository.find({
			where: {
				id: {
					$in: studentIds
				}
			}
		})
	}
	
}
