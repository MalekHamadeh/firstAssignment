import React, { useContext } from "react";
import { imageListClasses } from "@mui/material";
import CheckEmail from "./SignUpForm/CheckEmail";
import CreateAccount from "./SignUpForm/CreateAccount";
import CompanyInformation from "./SignUpForm/CompanyInfo";
import SignUpContext from "../../Context/SignUpContext";
// import NewPassword from "./PasswordForm/NewPassword";
// import SignUpContext from "../../Utils/SignUpContext/SignUpContext";
// import PasswordContext from "../../Utils/PasswordContext/PasswordContext";

interface FormInputsProps {
  from: string;
}

const FormInputs = ({ from }: FormInputsProps) => {
  const { step: stepSignUp } = useContext(SignUpContext);
  // const { step: stepForgot } = useContext(PasswordContext);

  const displaySignUp = {
    0: <CheckEmail />,
    1: <CreateAccount />,
    2: <CompanyInformation />,
  };
  // const displayForgot = {
  //   0: <CheckEmail />,
  //   1: <NewPassword />,
  // };

  if (from === "signup") {
    return displaySignUp[
      stepSignUp as keyof { 0: string; 1: string; 2: string }
    ];
  } else return null;
  // } else if (from === "forgot") {
  //   return displayForgot[stepForgot];
  // }
};

export default FormInputs;
