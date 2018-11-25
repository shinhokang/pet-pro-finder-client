import { gql } from "apollo-boost";

export const LOG_USER_IN = gql`
  mutation logUserIn($email: String!, $password: String!) {
    Login(email: $email, password: $password) {
      ok
      error
      token
    }
  }
`;
