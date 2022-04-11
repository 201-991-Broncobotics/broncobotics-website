import Navbar from "./Navbar";

interface HeaderProps {
  currentPage: "about" | "home" | "competitions" | "socials" | "robots" | "brophy";
}

function Header(props: HeaderProps) {
  let a = (
    <div className='bg-inherit'>
      <div className='text-center text-white' style={{ marginTop: "3rem", fontFamily: "Martel", fontSize: "7.5rem" }}>
        BroncoBotics
      </div>
      <div className='text-center text-white' style={{ marginTop: "-.75rem", fontFamily: "Martel", fontSize: "3rem" }}>
        Together to Create
      </div>
    </div>
  );

  return (
    <>
      <Navbar currentPage={props.currentPage} aboveImageText={a} />
    </>
  );
}

export default Header;
