import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";

import Footer from "./Footer";

import "./App.css";


function App() {
 

  return (
    <Router>
      <div className="App">
        <Navbar />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
