import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Log/Login" 
import React from "react";
import Frist from "../Main/Frist";

const Logroute = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Frist />} />  
          <Route path="/Login" element={<Login />} /> 

        </Routes>
      </Router>
    </div>
  );
};

export default Logroute;
