const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    password: String!
    babyName: String!
    parentName: String!
    feedings: [Feeding]
    # amountStats: FeedingStats
  }

  type Feeding {
    _id: ID
    amount: Int
    createdAt: String
  }

  # type FeedingStats {
  #   totalAmount: Int
  #   todayAmount: Int
  # }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(
      email: String!
      password: String!
      babyName: String!
      parentName: String!
    ): Auth

    login(email: String!, password: String!): Auth

    removeUser(userId: ID!): User

    addFeeding(amount: Int): Feeding
  }
`;

module.exports = typeDefs;
