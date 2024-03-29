import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query User {
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
      feeding_stats {
        totalAmount
        weeklyAmount
        monthlyAmount
        todayAmount
      }
      changes {
        _id
        amount
        createdAt
      }
      change_stats {
        totalAmount
        todayAmount
      }
    }
  }
`;
