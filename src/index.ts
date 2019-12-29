import { GraphQLServer, Options } from 'graphql-yoga';
import resolvers from './resolvers';
import connect from './db';

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

const options: Options = {
  port: 1337,
  endpoint: '/api',
  subscriptions: '/subscriptions',
  playground: '/playground',
  debug: Boolean(process.env.BUNGI_API_DEBUG) || false,
}

connect().then(() => {
  server
    .start(
      options,
      ({ port }) => console.log(`Server is running on http://localhost:${port}`),
    )
})
