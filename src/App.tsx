import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./Layout/Authentication";
import Home from "./Layout/Home";
import { DrawerProvider } from "./Context/DrawerContext";

function App() {
  return (
    <DrawerProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Authentication />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </DrawerProvider>
  );
}

export default App;
