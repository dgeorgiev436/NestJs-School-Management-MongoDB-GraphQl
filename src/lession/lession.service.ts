import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid} from "uuid" 

@Injectable()
export class LessionService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>, // Injecting the TypeOrm Lesson repository
  ) {}
	
	async getLesson(id: string): Promise<Lesson> {
		
		return this.lessonRepository.findOne({ where: {id: id} });

	}

  async createLesson(name, startDate, endDate): Promise<Lesson> {

    const lesson = this.lessonRepository.create({
        id: uuid(),
        name,
        startDate,
        endDate
    });

    return this.lessonRepository.save(lesson)
  }
}
