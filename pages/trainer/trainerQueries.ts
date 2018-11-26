import gql from "graphql-tag";
import { TRAINER_FRAGMENT } from '../../fragments';

export const GET_TRAINER = gql`
  query getTrainer($trainerId: Int!) {
    GetTrainer(trainerId: $trainerId) {
      trainer {
        ...TrainerParts
      }
    }
  }
  ${TRAINER_FRAGMENT}
`;
