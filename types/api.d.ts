/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: logUserIn
// ====================================================

export interface logUserIn_Login {
  __typename: "LoginResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface logUserIn {
  Login: logUserIn_Login;
}

export interface logUserInVariables {
  email: string;
  password: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTrainer
// ====================================================

export interface getTrainer_GetTrainer_trainer_experiences {
  __typename: "Experience";
  id: number;
  period: string;
  text: string;
}

export interface getTrainer_GetTrainer_trainer_user {
  __typename: "User";
  email: string;
  name: string | null;
  phoneNumber: string | null;
  description: string | null;
  profilePhoto: string;
}

export interface getTrainer_GetTrainer_trainer_trainingPrograms_problemCategories {
  __typename: "ProblemCategory";
  id: number;
  name: string;
}

export interface getTrainer_GetTrainer_trainer_trainingPrograms {
  __typename: "TrainingProgram";
  title: string | null;
  description: string | null;
  price: number | null;
  images: string[] | null;
  videos: string[] | null;
  problemCategories: getTrainer_GetTrainer_trainer_trainingPrograms_problemCategories[] | null;
}

export interface getTrainer_GetTrainer_trainer_comments_user {
  __typename: "User";
  name: string | null;
}

export interface getTrainer_GetTrainer_trainer_comments_childComments_user {
  __typename: "User";
  name: string | null;
}

export interface getTrainer_GetTrainer_trainer_comments_childComments {
  __typename: "Comment";
  id: number;
  text: string;
  user: getTrainer_GetTrainer_trainer_comments_childComments_user;
}

export interface getTrainer_GetTrainer_trainer_comments {
  __typename: "Comment";
  id: number;
  text: string;
  user: getTrainer_GetTrainer_trainer_comments_user;
  childComments: getTrainer_GetTrainer_trainer_comments_childComments[] | null;
}

export interface getTrainer_GetTrainer_trainer_reviews_user {
  __typename: "User";
  name: string | null;
}

export interface getTrainer_GetTrainer_trainer_reviews_problemCategories {
  __typename: "ProblemCategory";
  name: string;
}

export interface getTrainer_GetTrainer_trainer_reviews {
  __typename: "Review";
  title: string;
  text: string;
  ratingForExpertise: number;
  ratingForFriendliness: number;
  user: getTrainer_GetTrainer_trainer_reviews_user;
  problemCategories: getTrainer_GetTrainer_trainer_reviews_problemCategories[] | null;
}

export interface getTrainer_GetTrainer_trainer_favorites {
  __typename: "Favorite";
  marked: boolean;
}

export interface getTrainer_GetTrainer_trainer_workingAreas {
  __typename: "WorkingArea";
  text: string;
}

export interface getTrainer_GetTrainer_trainer_licenses {
  __typename: "License";
  name: string;
  organization: string | null;
}

export interface getTrainer_GetTrainer_trainer {
  __typename: "Trainer";
  id: number;
  title: string;
  description: string;
  images: string[] | null;
  videos: string[] | null;
  experiences: getTrainer_GetTrainer_trainer_experiences[] | null;
  user: getTrainer_GetTrainer_trainer_user;
  trainingPrograms: getTrainer_GetTrainer_trainer_trainingPrograms[] | null;
  comments: getTrainer_GetTrainer_trainer_comments[] | null;
  reviews: getTrainer_GetTrainer_trainer_reviews[] | null;
  favorites: getTrainer_GetTrainer_trainer_favorites[] | null;
  workingAreas: getTrainer_GetTrainer_trainer_workingAreas[] | null;
  licenses: getTrainer_GetTrainer_trainer_licenses[] | null;
}

export interface getTrainer_GetTrainer {
  __typename: "GetTrainerResponse";
  trainer: getTrainer_GetTrainer_trainer | null;
}

export interface getTrainer {
  GetTrainer: getTrainer_GetTrainer;
}

export interface getTrainerVariables {
  trainerId: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllTrainers
// ====================================================

export interface getAllTrainers_GetAllTrainers_trainers_experiences {
  __typename: "Experience";
  id: number;
  period: string;
  text: string;
}

export interface getAllTrainers_GetAllTrainers_trainers_user {
  __typename: "User";
  email: string;
  name: string | null;
  phoneNumber: string | null;
  description: string | null;
  profilePhoto: string;
}

export interface getAllTrainers_GetAllTrainers_trainers_trainingPrograms_problemCategories {
  __typename: "ProblemCategory";
  id: number;
  name: string;
}

export interface getAllTrainers_GetAllTrainers_trainers_trainingPrograms {
  __typename: "TrainingProgram";
  title: string | null;
  description: string | null;
  price: number | null;
  images: string[] | null;
  videos: string[] | null;
  problemCategories: getAllTrainers_GetAllTrainers_trainers_trainingPrograms_problemCategories[] | null;
}

export interface getAllTrainers_GetAllTrainers_trainers_comments_user {
  __typename: "User";
  name: string | null;
}

export interface getAllTrainers_GetAllTrainers_trainers_comments_childComments_user {
  __typename: "User";
  name: string | null;
}

export interface getAllTrainers_GetAllTrainers_trainers_comments_childComments {
  __typename: "Comment";
  id: number;
  text: string;
  user: getAllTrainers_GetAllTrainers_trainers_comments_childComments_user;
}

export interface getAllTrainers_GetAllTrainers_trainers_comments {
  __typename: "Comment";
  id: number;
  text: string;
  user: getAllTrainers_GetAllTrainers_trainers_comments_user;
  childComments: getAllTrainers_GetAllTrainers_trainers_comments_childComments[] | null;
}

export interface getAllTrainers_GetAllTrainers_trainers_reviews_user {
  __typename: "User";
  name: string | null;
}

export interface getAllTrainers_GetAllTrainers_trainers_reviews_problemCategories {
  __typename: "ProblemCategory";
  name: string;
}

export interface getAllTrainers_GetAllTrainers_trainers_reviews {
  __typename: "Review";
  title: string;
  text: string;
  ratingForExpertise: number;
  ratingForFriendliness: number;
  user: getAllTrainers_GetAllTrainers_trainers_reviews_user;
  problemCategories: getAllTrainers_GetAllTrainers_trainers_reviews_problemCategories[] | null;
}

export interface getAllTrainers_GetAllTrainers_trainers_favorites {
  __typename: "Favorite";
  marked: boolean;
}

export interface getAllTrainers_GetAllTrainers_trainers_workingAreas {
  __typename: "WorkingArea";
  text: string;
}

export interface getAllTrainers_GetAllTrainers_trainers_licenses {
  __typename: "License";
  name: string;
  organization: string | null;
}

export interface getAllTrainers_GetAllTrainers_trainers {
  __typename: "Trainer";
  id: number;
  title: string;
  description: string;
  images: string[] | null;
  videos: string[] | null;
  experiences: getAllTrainers_GetAllTrainers_trainers_experiences[] | null;
  user: getAllTrainers_GetAllTrainers_trainers_user;
  trainingPrograms: getAllTrainers_GetAllTrainers_trainers_trainingPrograms[] | null;
  comments: getAllTrainers_GetAllTrainers_trainers_comments[] | null;
  reviews: getAllTrainers_GetAllTrainers_trainers_reviews[] | null;
  favorites: getAllTrainers_GetAllTrainers_trainers_favorites[] | null;
  workingAreas: getAllTrainers_GetAllTrainers_trainers_workingAreas[] | null;
  licenses: getAllTrainers_GetAllTrainers_trainers_licenses[] | null;
}

export interface getAllTrainers_GetAllTrainers {
  __typename: "GetAllTrainersResponse";
  trainers: (getAllTrainers_GetAllTrainers_trainers | null)[] | null;
}

export interface getAllTrainers {
  GetAllTrainers: getAllTrainers_GetAllTrainers;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMe
// ====================================================

export interface getMe_Me_user {
  __typename: "User";
  id: number;
  email: string;
  name: string | null;
  phoneNumber: string | null;
  description: string | null;
  profileImage: string | null;
  isTrainer: boolean;
}

export interface getMe_Me {
  __typename: "MeResponse";
  user: getMe_Me_user | null;
}

export interface getMe {
  Me: getMe_Me;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TrainerParts
// ====================================================

export interface TrainerParts_experiences {
  __typename: "Experience";
  id: number;
  period: string;
  text: string;
}

export interface TrainerParts_user {
  __typename: "User";
  email: string;
  name: string | null;
  phoneNumber: string | null;
  description: string | null;
  profilePhoto: string;
}

export interface TrainerParts_trainingPrograms_problemCategories {
  __typename: "ProblemCategory";
  id: number;
  name: string;
}

export interface TrainerParts_trainingPrograms {
  __typename: "TrainingProgram";
  title: string | null;
  description: string | null;
  price: number | null;
  images: string[] | null;
  videos: string[] | null;
  problemCategories: TrainerParts_trainingPrograms_problemCategories[] | null;
}

export interface TrainerParts_comments_user {
  __typename: "User";
  name: string | null;
}

export interface TrainerParts_comments_childComments_user {
  __typename: "User";
  name: string | null;
}

export interface TrainerParts_comments_childComments {
  __typename: "Comment";
  id: number;
  text: string;
  user: TrainerParts_comments_childComments_user;
}

export interface TrainerParts_comments {
  __typename: "Comment";
  id: number;
  text: string;
  user: TrainerParts_comments_user;
  childComments: TrainerParts_comments_childComments[] | null;
}

export interface TrainerParts_reviews_user {
  __typename: "User";
  name: string | null;
}

export interface TrainerParts_reviews_problemCategories {
  __typename: "ProblemCategory";
  name: string;
}

export interface TrainerParts_reviews {
  __typename: "Review";
  title: string;
  text: string;
  ratingForExpertise: number;
  ratingForFriendliness: number;
  user: TrainerParts_reviews_user;
  problemCategories: TrainerParts_reviews_problemCategories[] | null;
}

export interface TrainerParts_favorites {
  __typename: "Favorite";
  marked: boolean;
}

export interface TrainerParts_workingAreas {
  __typename: "WorkingArea";
  text: string;
}

export interface TrainerParts_licenses {
  __typename: "License";
  name: string;
  organization: string | null;
}

export interface TrainerParts {
  __typename: "Trainer";
  id: number;
  title: string;
  description: string;
  images: string[] | null;
  videos: string[] | null;
  experiences: TrainerParts_experiences[] | null;
  user: TrainerParts_user;
  trainingPrograms: TrainerParts_trainingPrograms[] | null;
  comments: TrainerParts_comments[] | null;
  reviews: TrainerParts_reviews[] | null;
  favorites: TrainerParts_favorites[] | null;
  workingAreas: TrainerParts_workingAreas[] | null;
  licenses: TrainerParts_licenses[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LicenseParts
// ====================================================

export interface LicenseParts {
  __typename: "License";
  id: number;
  name: string;
  organization: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProblemCategoryParts
// ====================================================

export interface ProblemCategoryParts {
  __typename: "ProblemCategory";
  id: number;
  name: string;
  order: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: WorkingAreaParts
// ====================================================

export interface WorkingAreaParts {
  __typename: "WorkingArea";
  id: number;
  text: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
