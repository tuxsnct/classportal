import { ApolloServer, gql } from 'apollo-server-express'
import express from 'express'
import classportal from '../../../classportal.json'

const { config } = classportal
const port = config.server.port || 8000

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => {
      return 'Hello world!'
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: config.server.playground || false
})

const app = express()
server.applyMiddleware({ app })

app.listen(
  { port: port },
  () => {
    return console.log(
      `🚀 Server ready at localhost:${port}${server.graphqlPath}`
    )
  }
)
