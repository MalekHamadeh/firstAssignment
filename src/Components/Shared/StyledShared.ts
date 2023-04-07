import { Alert } from "@mui/material";
import styled from "styled-components";

export const StyledAlert = styled(Alert)(({ severity }) => ({
  width: "28vw",
  "&&": {
    color: severity === "error" ? "#fd5461" : "#29C293",
    background: "#f4f6fc",
    fontFamily: "Rubik, sans-serif",
  },
}));
