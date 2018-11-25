import { gql } from 'apollo-boost';

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
        isTrainer
      }
    }
  }
`;
