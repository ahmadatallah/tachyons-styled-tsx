import React from "react";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import theme from "./theme";

// import pages here

import Components from "./pages/Components";

import Div from "./elements/Div";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Div>
        <Router>
          <Route exact path="/" component={Components} />
        </Router>
      </Div>
    </ThemeProvider>
  );
}

export default App;
