import { Route, Routes } from "react-router-dom";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Balance } from "./pages/Balance";
import { Withdraw } from "./pages/Withdraw";
import { Deposit } from "./pages/Deposit";
import { Register } from "./pages/Register";
import { AllData } from "./pages/AllData";

import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/register" element={<Register />} />
          <Route path="/alldata" element={<AllData />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
