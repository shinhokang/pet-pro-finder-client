import { gql } from 'apollo-boost';

export const TRAINER_FRAGMENT = gql`
  fragment TrainerParts on Trainer {
    id
    title
    description
    images
    videos
    experiences {
      id
      period
      text
    }
    user {
      email
      name
      phoneNumber
      description
      profilePhoto
    }
    trainingPrograms {
      title
      description
      price
      images
      videos
      problemCategories {
        id
        name
      }
    }
    comments {
      id
      text
      user {
        name
      }
      childComments {
        id
        text
        user {
          name
        }
      }
    }
    reviews {
      title
      text
      ratingForExpertise
      ratingForFriendliness
      user {
        name
      }
      problemCategories {
        name
      }
    }
    favorites {
      marked
    }
    workingAreas {
      text
    }
    licenses {
      name
      organization
    }
  }
`;

export const LICENSE_FRAGMENT = gql`
  fragment LicenseParts on License {
    id
    name
    organization
  }
`;

export const PROBLEMCATEGORY_FRAGMENT = gql`
  fragment ProblemCategoryParts on ProblemCategory {
    id
    name
    order
  }
`;

export const WORKINGAREA_FRAGMENT = gql`
  fragment WorkingAreaParts on WorkingArea {
    id
    text
  }
`;
