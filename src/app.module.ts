import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lession/lesson.module';
import {  ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lession/lesson.entity';
import { LessionService } from './lession/lession.service';
import { StudentModule } from './student/student.module';
import { Student } from "./student/student.entity"


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: "mongodb://localhost/school",
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Lesson, // TypeOrm Lesson Schema Entity
		Student // TypeOrm Student Schema Entity
      ]
    }), // TypeOrm module
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true, // In the code first approach, you use decorators and TypeScript classes to generate the corresponding GraphQL schema.
      driver: ApolloDriver
    }),
    LessonModule,
    StudentModule
  ],
  providers: [LessionService]
})
export class AppModule {}
