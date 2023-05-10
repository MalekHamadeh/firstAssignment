export enum USER_INTERACTIONS {
  LOGIN_USER = "LOGIN_USER",
  LOGIN_USER_ERROR = "LOGIN_USER_ERROR",
  SIGN_UP_USER = "SIGN_UP_USER",
  CHECK_USER_EMAIL = "CHECK_USER_EMAIL",
  REQUEST_ERROR = "REQUEST_ERROR",
}

export const UserReducer = (
  state: IUSERSTATE,
  action: { type: USER_INTERACTIONS; payload: any }
): IUSERSTATE => {
  const { type, payload } = action;
  const {
    LOGIN_USER,
    LOGIN_USER_ERROR,
    SIGN_UP_USER,
    CHECK_USER_EMAIL,
    REQUEST_ERROR,
  } = USER_INTERACTIONS;
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        userName: payload.userName,
        canLogin: true,
      };

    case LOGIN_USER_ERROR:
      return {
        ...state,
        canLogin: false,
        error: payload.error,
      };

    case SIGN_UP_USER:
      return {
        ...state,
        email: payload.email,
        success: payload.success,
        successMessage: payload.successMessage,
      };

    case CHECK_USER_EMAIL:
      return {
        ...state,
        email: payload.email,
      };

    case REQUEST_ERROR:
      return {
        ...state,
        error: payload.error,
        errorMessage: payload.errorMessage,
      };

    default:
      return state;
  }
};

export interface IUSERSTATE {
  email: string;
  userName: string;
  error: boolean;
  errorMessage: string;
  success: boolean;
  successMessage: string;
  canLogin: boolean;
}
