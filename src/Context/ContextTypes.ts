export interface AuthenticationProviderProps {
  children: React.ReactNode;
}

export interface AuthenticationContextProps {
  screen: string | undefined;
  isSuccessfulSignUp: boolean;
  isSuccessfulPassword: boolean;
  isError: boolean;
  showAlert: boolean;
  step: number;
  signUpTitle: string[];
  passwordTitle: string[];
  signUpData: SignUpData;
  canContinueSignUp: boolean;
  canContinuePassword: boolean;
  handleScreens: (screen: string) => void;
  setIsSuccessfulSignUp: (isSuccessfulSignUp: boolean) => void;
  setIsSuccessfulPassword: (isSuccessfulPassword: boolean) => void;
  setIsError: (isError: boolean) => void;
  setShowAlert: (showAlert: boolean) => void;
  setStep: (step: number) => void;
  setSignUpData: (signUpData: SignUpData) => void;
}

export interface SignUpData {
  email: string;
  fullName: string;
  password: string;
  companyName: string;
  space: string;
  industry: string;
  nbOfEmployees: string;
  accpetTerms: boolean;
}

export interface PasswordData {
  email: string;
  password: string;
}
