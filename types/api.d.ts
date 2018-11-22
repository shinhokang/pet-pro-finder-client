/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllTrainers
// ====================================================

export interface getAllTrainers_GetAllTrainers_trainers_user {
  __typename: "User";
  id: number;
  name: string | null;
  description: string | null;
  profileImage: string | null;
}

export interface getAllTrainers_GetAllTrainers_trainers_licenses {
  __typename: "License";
  text: string;
}

export interface getAllTrainers_GetAllTrainers_trainers_experiences {
  __typename: "Experience";
  text: string;
}

export interface getAllTrainers_GetAllTrainers_trainers_workingAreas {
  __typename: "WorkingArea";
  text: string;
}

export interface getAllTrainers_GetAllTrainers_trainers_trainingPrograms {
  __typename: "TrainingProgram";
  id: number;
  description: string | null;
  price: number | null;
  images: (string | null)[] | null;
  videos: (string | null)[] | null;
}

export interface getAllTrainers_GetAllTrainers_trainers {
  __typename: "Trainer";
  id: number;
  user: getAllTrainers_GetAllTrainers_trainers_user;
  description: string;
  licenses: (getAllTrainers_GetAllTrainers_trainers_licenses | null)[] | null;
  experiences: (getAllTrainers_GetAllTrainers_trainers_experiences | null)[] | null;
  images: (string | null)[] | null;
  videos: (string | null)[] | null;
  workingAreas: (getAllTrainers_GetAllTrainers_trainers_workingAreas | null)[] | null;
  trainingPrograms: (getAllTrainers_GetAllTrainers_trainers_trainingPrograms | null)[] | null;
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

export interface TrainerParts_user {
  __typename: "User";
  id: number;
  name: string | null;
  description: string | null;
  profileImage: string | null;
}

export interface TrainerParts_licenses {
  __typename: "License";
  text: string;
}

export interface TrainerParts_experiences {
  __typename: "Experience";
  text: string;
}

export interface TrainerParts_workingAreas {
  __typename: "WorkingArea";
  text: string;
}

export interface TrainerParts_trainingPrograms {
  __typename: "TrainingProgram";
  id: number;
  description: string | null;
  price: number | null;
  images: (string | null)[] | null;
  videos: (string | null)[] | null;
}

export interface TrainerParts {
  __typename: "Trainer";
  id: number;
  user: TrainerParts_user;
  description: string;
  licenses: (TrainerParts_licenses | null)[] | null;
  experiences: (TrainerParts_experiences | null)[] | null;
  images: (string | null)[] | null;
  videos: (string | null)[] | null;
  workingAreas: (TrainerParts_workingAreas | null)[] | null;
  trainingPrograms: (TrainerParts_trainingPrograms | null)[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
