import Navbar from "./Navbar";
import Head from "next/head";

interface HeaderProps {
   currentPage:
      | "about"
      | "home"
      | "socials"
      | "robots"
      | "brophy"
      | "members"
      | "none";
   noHead?: true;
}

function Header(props: HeaderProps) {
   let noHead = props.noHead || false;

   return (
      <>
         {!noHead ? (
            <Head>
               <title>BroncoBotics</title>
               <meta
                  name="description"
                  content="Brophy Robotics BroncoBotics FTC team 201 FRC team 991"
               />
               <link rel="icon" href="/logo.svg" />
            </Head>
         ) : (
            <></>
         )}
         <Navbar currentPage={props.currentPage} />
      </>
   );
}

export default Header;
