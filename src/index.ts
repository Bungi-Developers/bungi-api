import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';
import connect from './db';

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

const options = {
  port: 1337,
  endpoint: '/api',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

connect().then(() => {
  server
    .start(
      options,
      ({ port }) => console.log(`Server is running on http://localhost:${port}`),
    )
})
