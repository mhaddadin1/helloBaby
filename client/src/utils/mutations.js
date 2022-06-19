import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        heroName
        charAvatar
        stamina
        spiritTokens {
          name
          description
          image
          type
        }
        wins
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation Mutation(
    $email: String!
    $password: String!
    $heroName: String! # $charAvatar: Int
  ) {
    addUser(
      email: $email
      password: $password
      heroName: $heroName # charAvatar: $charAvatar
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $charAvatar: String!
    $email: String
    $password: String
    $heroName: String
    $spiritTokens: [ID]
    $wins: Int
  ) {
    updateUser(
      charAvatar: $charAvatar
      email: $email
      password: $password
      heroName: $heroName
      spiritTokens: [InputSpiritToken]
      wins: $wins
    )
  }
`;

export const ADD_SPIRIT_TOKEN = gql`
  mutation Mutation($spiritToken: InputSpiritToken) {
    addSpiritToken(spiritToken: $spiritToken) {
      spiritTokens {
        name
        description
        image
      }
    }
  }
`;
