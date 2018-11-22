import { gql } from "apollo-boost";

export const TRAINER_FRAGMENT = gql`
  fragment TrainerParts on Trainer {
    id
    user {
      id
      name
      description
      profileImage
    }
    description
    licenses {
      text
    }
    experiences {
      text
    }
    images
    videos
    workingAreas {
      text
    }
    trainingPrograms {
      id
      description
      price
      images
      videos
    }
  }
`;
