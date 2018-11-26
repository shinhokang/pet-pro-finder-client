import gql from 'graphql-tag';
import { TRAINER_FRAGMENT } from '../../fragments';

export const GET_ALL_TRAINERS = gql`
  query getAllTrainers {
    GetAllTrainers {
      trainers {
        ...TrainerParts
      }
    }
  }
  ${TRAINER_FRAGMENT}
`;
