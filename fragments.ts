import { gql } from "apollo-boost";

export const TRAINER_FRAGMENT = gql`
  fragment TrainerParts on Trainer {
    id
    user {
      name
      description
      profileImage
    }
    title
    description
    images
    videos
    experiences {
      text
      period
    }
    licenses {
      name
      organization
    }
    workingAreas {
      text
    }
    trainingPrograms {
      id
      title
      description
      price
      images
      videos
      problemCategories {
        id
        name
        order
      }
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
