const resolvers = require('./resolvers')
const { gql, ApolloServer } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    profile: Profile!
  }
  
  type Profile {
    id: Int!
    nickName: String!
    user: User!
  }
  
  type Query {
    getUserById(id: Int!): User
    getUsers: [User]
  }
  
  type Mutation {
    modifyProfileNickName(userId: Int!, nickName: String!): User
  }
`

const schema = new ApolloServer({
  typeDefs,
  resolvers,
})

module.exports = schema