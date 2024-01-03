import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route
            exact
            path="/"
            element={
              <>
                <NavBar />
                <About />
                <Project />
                <Skills />
                <Contact />
              </>
            }
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
