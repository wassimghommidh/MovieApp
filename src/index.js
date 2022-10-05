// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="Login" element={<Login />} />
        <Route path="Navbar" element={<Navbar />} />
        <Route path="Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
