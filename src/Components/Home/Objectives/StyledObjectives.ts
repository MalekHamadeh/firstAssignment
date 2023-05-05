import styled from "styled-components";
import { Grid } from "@mui/material";

export const GridContainer = styled(Grid).attrs({
  container: true,
})``;

export const GridItem = styled(Grid).attrs({
  item: true,
})``;

export const ItemNestedGrid = styled(Grid).attrs({
  container: true,
  item: true,
});

export const ObjectivesWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;
