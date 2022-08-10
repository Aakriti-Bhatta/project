import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";

const theme = {
  colors: {
    header: "#ebfbff",
    body:"#fff",
    footer: "#003333"
  },
  mobile:"768px"
}
function App() {
  return (
    <ThemeProvider theme={theme}> 
    <>
    <GlobalStyles/>
    <Header/>

   <Container>
    <h1>hello World</h1>
   </Container>
    </>
    </ThemeProvider>
  );
}

export default App;
