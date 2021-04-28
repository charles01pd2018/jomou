import { ApolloServer } from 'apollo-server-micro'
import gql from 'graphql-tag'

const typeDefs = gql`
  type Price {
    name: String!
  }
  type Query {
    priceList: [Price]!
  }
`

const resolvers = {
  Query: {
    priceList: () => {
      return [
        {
          name: '1 million HELLO'
        }
      ]
    },
  },
}

const apolloServer = new ApolloServer( {
  typeDefs,
  resolvers,
  context: () => {
    return {
        db: null,
    };
  },
} );

/* DO NOT REMOVE THIS THIS IS VITAL FOR THE GRAPHQL API TO WORK */
export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler( { 
  path: '/api' 
} );