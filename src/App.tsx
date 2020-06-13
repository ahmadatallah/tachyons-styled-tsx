import React from "react";
import { ThemeProvider } from "emotion-theming";
import logo from "./logo.svg";
import "./App.css";
import Container from "components/Container";
import { Progress, H1 } from "elements";
import theme from "theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <H1>Tachyons + Emotion + Styled System + TypeScript [ WIP ]</H1>
            <Progress value={30} />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
