import { GraphQLServer } from 'graphql-yoga'
import resolvers from './resolvers'
import connect from './db'

connect()

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
})

const options = {
  port: 1337,
  endpoint: '/api',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

server.start(options, ({ port }) => console.log(`Server is running on http://localhost:${port}`))
