import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType) // Decorating the class with the Resolver decorator makes it a resolver. First argument tells of what type is the resolver (what does it resolve)
export class LessonResolver {
  // Inside we define queries and mutations
  // Queries are used to retrieve date
  // Mutations are used to create a new data or change existing data

  @Query(returns => LessonType) // Query decorator export from @nestjs/graphql. First argument tells what type does the query returns
  lesson() {
    return {
      id: 'asdsadsad',
      name: 'Physics Class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString()
    };
  }
}
