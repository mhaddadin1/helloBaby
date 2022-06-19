import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      email
      heroName
      charAvatar
      stamina
      wins
    }
  }
`;

export const QUERY_SPIRITTOKEN = gql`
  {
    spiritToken {
      name
    }
  }
`;
