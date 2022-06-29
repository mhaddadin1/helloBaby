import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      _id
      email
      password
      babyName
      parentName
      feedings {
        _id
        amount
        createdAt
      }
    }
  }
`;
