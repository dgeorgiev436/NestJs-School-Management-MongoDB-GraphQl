import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid} from "uuid" 
import { CreateLessonInput } from "./lesson.input"

@Injectable()
export class LessionService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>, // Injecting the TypeOrm Lesson repository
  ) {}
	
	async getLesson(id: string): Promise<Lesson> {
		
		return this.lessonRepository.findOne({ where: {id: id} });

	}
	
	async getLessons(): Promise<Lesson[]> {
		return this.lessonRepository.find();
	}

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
	  
	  const {name, startDate, endDate, students} = createLessonInput

    const lesson = this.lessonRepository.create({
        id: uuid(),
        name,
        startDate,
        endDate,
		students
    });

    return this.lessonRepository.save(lesson)
  }
// 	Assigning students to lessons
	async assignStudentsToLesson(lessonId: string, studentIds: string[]): Promise<Lesson> {
		const lesson = await this.lessonRepository.findOne({ where: {id: lessonId} })
		
		lesson.students = [...lesson.students, ...studentIds];
		
		return this.lessonRepository.save(lesson)
	}
}
