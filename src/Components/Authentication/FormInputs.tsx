import React, { useContext, useEffect, useState } from "react";

import CreateAccount from "./SignUpForm/CreateAccount";
import CompanyInformation from "./SignUpForm/CompanyInfo";
import CheckEmail from "./SignUpForm/CheckEmail";

import NewPassword from "./PasswordForm/NewPassword";
import AuthenticationContext from "../../Context/AuthenticationContext";

const FormInputs = () => {
  const { screen, step } = useContext(AuthenticationContext);

  const displaySignUp = [
    <CheckEmail />,
    <CreateAccount />,
    <CompanyInformation />,
  ];

  const displayForgot = [<CheckEmail />, <NewPassword />];

  if (screen === "SignUp") {
    return displaySignUp[step];
  } else if (screen === "ForgotPassword") {
    return displayForgot[step];
  } else return null;
};

export default FormInputs;
