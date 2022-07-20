import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { LessionService } from './lession.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { StudentModule } from "../student/student.module"

@Module({
  imports: [
    TypeOrmModule.forFeature([Lesson]), // Import TypeOrmModule and the Lesson entity. It allows us to import (inject) the TypeOrm repository in our lesson service
	StudentModule
  ],
  providers: [LessonResolver, LessionService],
})
export class LessonModule {}
