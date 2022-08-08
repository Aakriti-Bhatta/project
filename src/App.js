import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";

const theme = {
  colors: {
    header: "#ebfbff",
    body:"#fff",
    footer: "#003333"
  }
}
function App() {
  return (
    <ThemeProvider theme={theme}> 
    <>
    <Header/>

   <Container>
    <h1>hello World</h1>
   </Container>
    </>
    </ThemeProvider>
  );
}

export default App;
