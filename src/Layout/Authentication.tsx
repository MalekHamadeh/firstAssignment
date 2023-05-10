import {
  Outline,
  StyledPaper,
  Slogan,
  HeaderWrapper,
  StyledLogo,
  StyledPaperWrapper,
  HeaderContainer,
  SloganWrapper,
  LogoWrapper,
} from "../Components/Authentication/StyledAuthentication";
import logo from "../Images/Logo/roundRushLogo.svg";
import AuthenticationComponent from "../Components/Authentication/AuthenticationComponent";
import { useContext } from "react";
import AuthenticationContext from "../Context/AuthenticationContext/UserContext";

const Authentication = () => {
  const { screen } = useContext(AuthenticationContext);

  return (
    <Outline>
      <HeaderWrapper>
        <HeaderContainer>
          <LogoWrapper>
            <StyledLogo src={logo} />
          </LogoWrapper>
          <SloganWrapper>
            <Slogan>
              {screen === "SignUp" ? (
                "Signing Up A New Account"
              ) : (
                <>
                  The Optimized Workflow
                  <br />
                  Out Of The Box
                </>
              )}
            </Slogan>
          </SloganWrapper>
        </HeaderContainer>
      </HeaderWrapper>
      <StyledPaperWrapper>
        <StyledPaper elevation={3}>
          <AuthenticationComponent />
        </StyledPaper>
      </StyledPaperWrapper>
    </Outline>
  );
};

export default Authentication;
