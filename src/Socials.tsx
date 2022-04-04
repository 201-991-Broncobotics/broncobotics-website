import React, { JSXElementConstructor } from 'react'
import Header from "./components/Header"
import Footer from './components/Footer'

const Socials = () => {
    let liFormatting: string = "my-2 bg-red-500 rounded-xl border-2  hover:bg-white hover:text-black hover:border-red-500"
    return (      
    <div className='' style={{backgroundColor: "rgb(109,110,113)"}}>
        <Header currentPage='socials'/>
        <div className='my-4 text-white text-5xl text-center m-auto ' style={{fontFamily: "Roboto Slab"}}>Follow us on Social Media!</div>
        <ul className=' m-auto text-center w-1/5 text-4xl '  >
            <a href="https://github.com/201-991-Broncobotics"><li className={liFormatting} style={{fontFamily: "Roboto Slab"}}>GitHub</li></a>
            <a href="https://www.google.com/url?q=https%3A%2F%2Fbrophyrobotics.slack.com&sa=D&sntz=1&usg=AOvVaw01uPHac9sfJOxtBwhb2MA7"><li className={liFormatting} style={{fontFamily: "Roboto Slab"}}>Slack</li></a>
            <a href="https://www.youtube.com/channel/UC4-iVzitzOrSvx6bt9QqJWA"><li className={liFormatting} style={{fontFamily: "Roboto Slab"}}>YouTube</li></a>
            <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.instagram.com%2Fbroncobotics%2F%3Fhl%3Den&sa=D&sntz=1&usg=AOvVaw0dXb9KKQ0da0X_02x4mMo9"><li className={liFormatting} style={{fontFamily: "Roboto Slab"}}>Instagram</li></a>
            <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fbroncobotics%3Flang%3Den&sa=D&sntz=1&usg=AOvVaw0klHfH1f4Sn2HGAagCdNcp"><li className={liFormatting} style={{fontFamily: "Roboto Slab"}}>Twitter</li></a>
            <a href="mailto:broncobotics@brophyprep.org"><li className={liFormatting} style={{fontFamily: "Roboto Slab"}}>Email</li></a>
        </ul>
        <Footer />
    </div>
  )
}

export default Socials