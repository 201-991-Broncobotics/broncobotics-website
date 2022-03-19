import Navbar from './Navbar'

interface HeaderProps {
    currentPage: string,
}

let a: React.ReactNode;

function Header(props: HeaderProps) {


  if  (props.currentPage === 'join') {
    a = <div className='bg-inherit'><div className='text-center text-white' style={{marginTop:'3rem', fontFamily: "Martel", fontSize: "7.5rem"}}>BroncoBotics</div><div className='text-center text-white' style={{marginTop:'-.75rem', fontFamily: "Martel", fontSize: "3rem"}}>Together to Create</div></div>
  }
  else if (props.currentPage === 'about') {
    a = <div className='bg-inherit'><div className='text-center text-white' style={{marginTop:'3rem', fontFamily: "Martel", fontSize: "7.5rem"}}>BroncoBotics</div><div className='text-center text-white' style={{marginTop:'-.75rem', fontFamily: "Martel", fontSize: "3rem"}}>Together to Create</div></div>
  }

  else if (props.currentPage === 'photos') {
    a = <div className='bg-inherit'><div className='text-center text-white' style={{marginTop:'3rem', fontFamily: "Martel", fontSize: "7.5rem"}}>BroncoBotics</div><div className='text-center text-white' style={{marginTop:'-.75rem', fontFamily: "Martel", fontSize: "3rem"}}>Together to Create</div></div>
  }

  else (props.currentPage === 'home'); {
    a = <div className='bg-inherit'><div className='text-center text-white' style={{marginTop:'3rem', fontFamily: "Martel", fontSize: "7.5rem"}}>BroncoBotics</div><div className='text-center text-white' style={{marginTop:'-.75rem', fontFamily: "Martel", fontSize: "3rem"}}>Together to Create</div></div>
  }
  


  return (
    <>
      <Navbar currentPage={props.currentPage} aboveImageText= {a}/>
      
      
        

    </>
  )
}

export default Header