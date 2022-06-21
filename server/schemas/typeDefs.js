const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    password: String
    babyName: String!
    parentName: String!
    feedings: [Feeding]
  }

  type Feeding {
    _id: ID!
    amount: Int!
  }

  input inputFeeding {
    amount: Int!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    # feeding: Feeding
  }

  type Mutation {
    addUser(
      email: String!
      password: String!
      babyName: String!
      parentName: String!
    ): Auth

    # updateUser(
    #   email: String
    #   password: String
    #   babyName: String
    #   parentName: String
    # ): User

    addFeeding(amountData: inputFeeding!): User

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
