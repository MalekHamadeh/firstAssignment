import React, { createContext, useState, useEffect } from "react";
import {
  AuthenticationContextProps,
  AuthenticationProviderProps,
  PasswordData,
  SignUpData,
} from "./ContextTypes";

const AuthenticationContext = createContext<AuthenticationContextProps>({
  screen: "Login",
} as AuthenticationContextProps);

export const AuthenticationProvider = ({
  children,
}: AuthenticationProviderProps) => {
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

  return (
    <AuthenticationContext.Provider
      value={{
        screen,
        isSuccessfulSignUp,
        isSuccessfulPassword,
        isError,
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
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
