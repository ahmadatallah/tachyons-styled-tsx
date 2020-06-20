import React from "react";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import theme from "./theme";

// import pages here

import Components from "pages/Components";
import Home from "pages/Home";
import JSXPlayground from "pages/JSXPlayground";
import Styles from "pages/Styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/components" component={Components} />
          <Route exact path="/jsx-playground" component={JSXPlayground} />
          <Route exact path="/styles" component={Styles} />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
