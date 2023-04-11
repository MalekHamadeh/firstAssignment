import React, { useEffect, useState } from "react";
import { AlertWrapper, StyledAlert } from "../Shared/StyledShared";

interface AlertProps {
  message: string;
  isSuccess?: boolean;
  isError?: boolean;
}

const Alert = ({ message, isSuccess = false, isError = false }: AlertProps) => {
  const [showAlert, shouldShowAlert] = useState(false);

  useEffect(() => {
    if (isSuccess || isError) {
      shouldShowAlert(true);
      const timer = setTimeout(() => {
        shouldShowAlert(false);
        console.log("here");
      }, 2000);
    }
  }, [isSuccess, isError]);

  return (
    <AlertWrapper>
      {showAlert && isError && (
        <StyledAlert severity='error'>{message}</StyledAlert>
      )}
      {showAlert && isSuccess && (
        <StyledAlert severity='success'>{message}</StyledAlert>
      )}
    </AlertWrapper>
  );
};

export default Alert;
