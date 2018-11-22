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

export const GET_ME = gql`
  query getMe {
    Me {
      user {
        id
        email
        name
        phoneNumber
        description
        profileImage
      }
    }
  }
`;
