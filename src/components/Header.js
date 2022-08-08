import { Container } from "./styles/Container.styled";
import { StyledHeader, Nav,Logo } from "./styles/Header.styled";
import { Button } from "./styles/Button.styles";

export default function Header() {
  return (
    <StyledHeader>
    <Container>
    <Nav>
      <Logo src="./images/logo.svg" alt=""/>
      <Button>Try It Free</Button>
    </Nav>

        <h1>Hubble</h1>
    </Container>
    </StyledHeader>
  )
}
