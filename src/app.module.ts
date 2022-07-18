import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import {  ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true, // In the code first approach, you use decorators and TypeScript classes to generate the corresponding GraphQL schema.
      driver: ApolloDriver
    }),
    LessonModule
  ]
})
export class AppModule {}
