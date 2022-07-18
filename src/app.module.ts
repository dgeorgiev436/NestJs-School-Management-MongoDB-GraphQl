import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import {  ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: "mongodb://localhost/school",
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Lesson // TypeOrm Schema Entity
      ]
    }), // TypeOrm module
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true, // In the code first approach, you use decorators and TypeScript classes to generate the corresponding GraphQL schema.
      driver: ApolloDriver
    }),
    LessonModule
  ]
})
export class AppModule {}
