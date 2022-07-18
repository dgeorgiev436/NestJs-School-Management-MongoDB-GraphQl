import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lession/lesson.module';
import {  ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lession/lesson.entity';
import { LessionService } from './lession/lession.service';


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
  ],
  providers: [LessionService]
})
export class AppModule {}
