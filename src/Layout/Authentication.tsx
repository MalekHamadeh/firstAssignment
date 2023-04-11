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
import { AuthenticationProvider } from "../Context/AuthenticationContext";

const Authentication = () => {
  return (
    <Outline>
      <HeaderWrapper>
        <HeaderContainer>
          <LogoWrapper>
            <StyledLogo src={logo} />
          </LogoWrapper>
          <SloganWrapper>
            <Slogan>The Optimized Workflow </Slogan>
            <Slogan>Out Of The Box</Slogan>
          </SloganWrapper>
        </HeaderContainer>
      </HeaderWrapper>
      <StyledPaperWrapper>
        <StyledPaper elevation={3}>
          <AuthenticationProvider>
            <AuthenticationComponent />
          </AuthenticationProvider>
        </StyledPaper>
      </StyledPaperWrapper>
    </Outline>
  );
};

export default Authentication;
