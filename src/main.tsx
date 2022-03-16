import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import About from "./About"

import Photos from "./Photos"
import Join from "./Join"
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes >
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/photos" element={<Photos />}></Route>
      <Route path="/join" element={<Join />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
