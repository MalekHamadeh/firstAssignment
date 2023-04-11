import { createContext, useState, useEffect } from "react";

const PasswordContext = createContext<PasswordContextProps>(
  {} as PasswordContextProps
);

//#region Interfaces
interface PasswordProviderProps {
  children: React.ReactNode;
}

export interface PasswordContextProps {
  title: string[];
  step: number;
  setStep: (prev: number) => void;
  data: PasswordData;
  setData: (data: PasswordData) => void;
  canContinue: boolean;
  setCanContinue: (canContinue: boolean) => void;
}

interface PasswordData {
  email: string;
  password: string;
}
//#endregion

export const PasswordProvider = ({ children }: PasswordProviderProps) => {
  const title = ["Enter your details below", "Please enter your new password"];

  const [step, setStep] = useState(0);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [canContinue, setCanContinue] = useState(false);

  //   const handleChanges = (e) => {
  //     const { name, value } = e.target;
  //     setData({ ...data, [name]: value });
  //   };

  // const { ...requiredData } = data;

  // const canContinue =
  //   [...Object.values(requiredData)].every(Boolean) &&
  //   step === Object.keys(title).length - 1;

  return (
    <PasswordContext.Provider
      value={{
        title,
        step,
        setStep,
        data,
        setData,
        canContinue,
        setCanContinue,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordContext;
