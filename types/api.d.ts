/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllTrainers
// ====================================================

export interface getAllTrainers_GetAllTrainers_trainers_user {
  __typename: "User";
  id: number;
  username: string;
  firstName: string;
  lastName: string;
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
  licenses: (string | null)[] | null;
  experiences: (string | null)[] | null;
  images: (string | null)[] | null;
  videos: (string | null)[] | null;
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

export interface logUserIn_ConnectFB {
  __typename: "ConnectFBResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
  isNew: boolean;
}

export interface logUserIn {
  ConnectFB: logUserIn_ConnectFB;
}

export interface logUserInVariables {
  firstName: string;
  lastName: string;
  email?: string | null;
  fbId: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMe
// ====================================================

export interface getMe_Me_user {
  __typename: "User";
  id: number;
  username: string;
  phoneNumber: string | null;
  profileDescription: string | null;
  profilePhoto: string;
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
  username: string;
  firstName: string;
  lastName: string;
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
  licenses: (string | null)[] | null;
  experiences: (string | null)[] | null;
  images: (string | null)[] | null;
  videos: (string | null)[] | null;
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
