import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./Layout/Authentication";
import Home from "./Layout/Home";
import { DrawerProvider } from "./Context/DrawerContext";
import "./App.css";
import { AuthenticationProvider } from "./Context/AuthenticationContext";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <AuthenticationProvider>
              <Authentication />
            </AuthenticationProvider>
          }
        />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
