import React from 'react'
import Navbar from './Navbar'

interface HeaderProps {
    currentPage: string,
}

function Header(props: HeaderProps) {
  return (
    <>
        <Navbar currentPage={props.currentPage}/>
        <img src="/src/logo.svg" alt="broncobotics logo" className=' w-full h-10'/>

    </>
  )
}

export default Header