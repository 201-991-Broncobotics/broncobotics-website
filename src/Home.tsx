import { useState } from 'react'
import logo from './logo.svg'
import Header from "./components/Header"
import Footer from './components/Footer'

function Home() {

  return (
    <div className="app">
      <Header currentPage='home'/>
      <div className='text-red-500 text-center text-3xl'>Mission Statement</div>
      <div>BroncoBotics brings Fun and Friendly to Robotics while helping fellow students with Teamwork, Respect, Creativity, and Problem-Solving Skills through Coding, Digital Design, and Engineering.</div>
      <Footer />
    </div>
  )
}

export default Home
