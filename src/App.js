import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
import { theme, themeDark } from "./styles/theme";
import { Container } from "./styles/Container";
import Screen from "./Screen";
function App() {
  const [Dark, setDark] = useState(false);
  return (
    <ThemeProvider theme={!Dark ? theme : themeDark}>
      <>
        <GlobalStyles />
        <Container Dark={Dark}>
          <Screen setDark={setDark} Dark={Dark} />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
