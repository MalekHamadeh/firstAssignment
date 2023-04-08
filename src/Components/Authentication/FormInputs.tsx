import React, { useContext, useEffect, useState } from "react";

import CreateAccount from "./SignUpForm/CreateAccount";
import CompanyInformation from "./SignUpForm/CompanyInfo";
import CheckEmail from "./SignUpForm/CheckEmail";

import NewPassword from "./PasswordForm/NewPassword";

interface FormInputsProps {
  from: string;
  formStep: number;
}

const FormInputs = ({ from, formStep }: FormInputsProps) => {
  const displaySignUp = [
    <CheckEmail />,
    <CreateAccount />,
    <CompanyInformation />,
  ];

  const displayForgot = [<CheckEmail />, <NewPassword />];

  if (from === "signup") {
    return displaySignUp[formStep];
  } else if (from === "forgot") {
    return displayForgot[formStep];
  } else return null;
};

export default FormInputs;
