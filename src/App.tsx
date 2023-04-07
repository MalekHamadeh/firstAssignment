import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./Layout/Authentication";
import Home from "./Layout/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Authentication />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
