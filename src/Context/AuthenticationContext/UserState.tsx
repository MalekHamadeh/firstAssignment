import { useState, useReducer } from "react";
import { PasswordData, SignUpData, UserProviderProps } from "../ContextTypes";
import AuthenticationContext from "./UserContext";
import ApiService from "../../Utils/ApiCalls";
import { IUSERSTATE, USER_INTERACTIONS, UserReducer } from "./UserReducer";

export const UserProvider = ({ children }: UserProviderProps) => {
  const [screen, setScreen] = useState<string>("Login");

  const [isSuccessfulSignUp, setIsSuccessfulSignUp] = useState(false);
  const [isSuccessfulPassword, setIsSuccessfulPassword] = useState(false);
  const [isError, setIsError] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const [signUpData, setSignUpData] = useState<SignUpData>({
    email: "",
    fullName: "",
    password: "",
    companyName: "",
    space: "",
    industry: "",
    nbOfEmployees: "",
    accpetTerms: false,
  });

  const [passwordData, setPasswordData] = useState<PasswordData>({
    email: "",
    password: "",
  });

  const [step, setStep] = useState(0);

  const signUpTitle: string[] = [
    "Lets Validate your email first",
    "Fill up your account information",
    "Create your company space",
  ];

  const passwordTitle: string[] = [
    "Enter your details below",
    "Please enter your new password",
  ];

  const initialState: IUSERSTATE = {
    email: "",
    userName: "",
    success: false,
    successMessage: "",
    error: false,
    errorMessage: "",
    canLogin: false,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const { ...requiredDataSignUp } = signUpData;

  const canContinueSignUp =
    [...Object.values(requiredDataSignUp)].every(Boolean) &&
    step === Object.keys(signUpTitle).length - 1;

  const { ...requiredDataPassword } = passwordData;

  const canContinuePassword =
    [...Object.values(requiredDataPassword)].every(Boolean) &&
    step === Object.keys(passwordTitle).length - 1;

  const handleScreens = (screen: string) => {
    setScreen(screen);
  };

  const LoginUser = async (email: string, password: string) => {
    try {
      const request = await ApiService.loginUser(email, password);
      const { userName } = request.data.data;
      const { success } = request.data.success;

      if (request.status === 200) {
        dispatch({
          type: USER_INTERACTIONS.LOGIN_USER,
          payload: {
            userName,
            error: false,
          },
        });
      } else {
        dispatch({
          type: USER_INTERACTIONS.LOGIN_USER_ERROR,
          payload: {
            error: request.data.error,
          },
        });
      }
      return request.data.success;
    } catch (error: any) {
      dispatch({
        type: USER_INTERACTIONS.REQUEST_ERROR,
        payload: {
          error: true,
          errorMessage: error.message,
        },
      });
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        screen,
        canLogin: state.canLogin,
        isSuccessfulSignUp,
        isSuccessfulPassword,
        isError: state.error,
        showAlert,
        step,
        signUpTitle,
        passwordTitle,
        signUpData,
        canContinueSignUp,
        canContinuePassword,
        handleScreens,
        setIsSuccessfulSignUp,
        setIsSuccessfulPassword,
        setIsError,
        setShowAlert,
        setStep,
        setSignUpData,
        LoginUser,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default UserProvider;
