import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true // In the code first approach, you use decorators and TypeScript classes to generate the corresponding GraphQL schema.
    }),
    LessonModule
  ]
})
export class AppModule {}
