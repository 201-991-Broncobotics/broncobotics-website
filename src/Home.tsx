import { useState } from 'react'
import logo from './logo.svg'
import Header from "./components/Header"
import Footer from './components/Footer'

function Home() {

  return (
    <div className="app">
      <Header currentPage='home'/>
      <div className='text-white text-center text-4xl mt-4' style={{fontFamily: "Times New Roman"}}>Mission Statement</div>
      <div className='text-white text-center text-xl mx-8 mt-2' style={{fontFamily: "Times New Roman"}}>BroncoBotics brings Fun and Friendly to Robotics while helping fellow students with Teamwork, Respect, Creativity, and Problem-Solving Skills through Coding, Digital Design, and Engineering.</div>
      <Footer />
    </div>
  )
}

export default Home
