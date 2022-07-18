import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';


@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true // In the code first approach, you use decorators and TypeScript classes to generate the corresponding GraphQL schema.
    })
  ]
})
export class AppModule {}
