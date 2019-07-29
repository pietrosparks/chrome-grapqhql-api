const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs: './src/schema/schema.graphql',
  resolvers,
  context: req => ({ ...req })
})

server.start(() => console.log('Server is running on http://localhost:4000'))
