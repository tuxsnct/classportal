import { ApolloServer, gql } from 'apollo-server-express'
import express from 'express'
import classportal from '../../../classportal.json'

const PORT = classportal.server.port

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => {
      return 'Hello world!'
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()
server.applyMiddleware({ app })

app.listen(
  { port: PORT },
  () => {
    return console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  }
)
