const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    password: String!
    babyName: String!
    parentName: String!
    feedings: [Feeding]
  }

  type Feeding {
    _id: ID
    amount: Int
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  # input feedingInput {
  #   amount: Int
  # }

  type Query {
    user: User
    # feeding(_id: ID): Feeding
  }

  type Mutation {
    addUser(
      email: String!
      password: String!
      babyName: String!
      parentName: String!
    ): Auth

    addFeeding(amount: Int): Feeding

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
