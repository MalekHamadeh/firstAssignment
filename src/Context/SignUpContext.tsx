import { createContext, useState, useEffect } from "react";

const SignUpContext = createContext<SignUpContextProps>({
  title: { 0: "", 1: "", 2: "" },
  step: 0,
  setStep: (step: number) => {},
  data: {
    email: "",
    fullName: "",
    password: "",
    companyName: "",
    space: "",
    industry: "",
    nbOfEmployees: "",
    accpetTerms: false,
  },
  setData: () => {},
  canContinue: false,
});

//#region Interfaces
interface SignUpProviderProps {
  children: React.ReactNode;
}

export interface SignUpContextProps {
  title: Title;
  step: number;
  setStep: (prev: number) => void;
  data: SignUpData;
  setData: (data: SignUpData) => void;
  canContinue: boolean;
}

interface SignUpData {
  email: string;
  fullName: string;
  password: string;
  companyName: string;
  space: string;
  industry: string;
  nbOfEmployees: string;
  accpetTerms: boolean;
}

interface Title {
  0: string;
  1: string;
  2: string;
}
//#endregion

export const SignUpProvider = ({ children }: SignUpProviderProps) => {
  const title: Title = {
    0: "Lets Validate your email first",
    1: "Fill up your account information",
    2: "Create your company space",
  };

  const [step, setStep] = useState<number>(0);

  const [data, setData] = useState<SignUpData>({
    email: "",
    fullName: "",
    password: "",
    companyName: "",
    space: "",
    industry: "",
    nbOfEmployees: "",
    accpetTerms: false,
  });

  //   const handleChanges = (e) => {
  //     const { name, value } = e.target;
  //     setData({ ...data, [name]: value });
  //   };

  const { ...requiredData } = data;

  const canContinue =
    [...Object.values(requiredData)].every(Boolean) &&
    step === Object.keys(title).length - 1;

  return (
    <SignUpContext.Provider
      value={{ title, step, setStep, data, setData, canContinue }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

export default SignUpContext;
