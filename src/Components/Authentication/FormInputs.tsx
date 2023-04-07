import React, { useContext } from "react";

import SignUpContext from "../../Context/SignUpContext";
import PasswordContext from "../../Context/PasswordContext";

import CreateAccount from "./SignUpForm/CreateAccount";
import CompanyInformation from "./SignUpForm/CompanyInfo";
import CheckEmail from "./SignUpForm/CheckEmail";

import NewPassword from "./PasswordForm/NewPassword";

interface FormInputsProps {
  from: string;
}

const FormInputs = ({ from }: FormInputsProps) => {
  const { step: stepSignUp } = useContext(SignUpContext);
  const { step: stepForgot } = useContext(PasswordContext);

  const displaySignUp = {
    0: <CheckEmail />,
    1: <CreateAccount />,
    2: <CompanyInformation />,
  };

  const displayForgot = {
    0: <CheckEmail />,
    1: <NewPassword />,
  };

  if (from === "signup") {
    return displaySignUp[
      stepSignUp as keyof { 0: string; 1: string; 2: string }
    ];
  } else if (from === "forgot") {
    return displayForgot[stepForgot as keyof { 0: string; 1: string }];
  } else return null;
};

export default FormInputs;
