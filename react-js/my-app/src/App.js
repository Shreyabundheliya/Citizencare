import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Service from "./Components/Pages/Service";
import Registration1 from "./Components/Registration/Registration1"
import Login1 from "./Components/Login/Login1";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/about" element={<About></About>} />
          <Route exact path="/service" element={<Service></Service>} />
          <Route exact path="/login1" element={<Login1></Login1>} />
          <Route exact path="/registration" element={<Registration1></Registration1>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
