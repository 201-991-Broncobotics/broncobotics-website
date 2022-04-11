import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Socials from "./pages/Socials";
import Robots from "./pages/Robots";
import Photos from "./pages/Photos";
import Brophy from "./pages/Brophy";

import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/photos' element={<Photos />}></Route>
      <Route path='/brophy' element={<Brophy />}></Route>
      <Route path='/socials' element={<Socials />}></Route>
      <Route path='/robots' element={<Robots />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
