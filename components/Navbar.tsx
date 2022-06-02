import headerBg from "/public/header-bg-opacity.png";
import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
   currentPage: "about" | "home" | "socials" | "robots" | "brophy" | "members";
}
const Navbar = (props: NavbarProps) => {
   let [menuButton, setMenuButton] = useState(true);

   let a: NavButtonProps[] = [
      {
         url: "/about",
         name: "About Broncobotics",
         setMenuButton: setMenuButton,
         currentPage: props.currentPage,
      },
      {
         url: "/members",
         name: "Our Members",
         setMenuButton: setMenuButton,
         currentPage: props.currentPage,
      },
      {
         url: "/robots",
         name: "Our Robots",
         setMenuButton: setMenuButton,
         currentPage: props.currentPage,
      },
      {
         url: "/socials",
         name: "Social Media",
         setMenuButton: setMenuButton,
         currentPage: props.currentPage,
      },
      {
         url: "/brophy",
         name: "About Our School",
         setMenuButton: setMenuButton,
         currentPage: props.currentPage,
      },
   ];

   let homeClass =
      props.currentPage === "home"
         ? "self-center md:text-xl font-semibold whitespace-nowrap -ml-2".concat(
              " text-red-500 hover:text-[#d63838] "
           )
         : "self-center md:text-xl font-semibold whitespace-nowrap -ml-2".concat(
              " hover:text-gray-300 text-white"
           );

   let menuSvg = (
      <>
         <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               fillRule="evenodd"
               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
               clipRule="evenodd"
            ></path>
         </svg>
         <svg
            className="hidden h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               fillRule="evenodd"
               d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
               clipRule="evenodd"
            ></path>
         </svg>
      </>
   );

   return (
      <header
         className="text-red-500 "
         style={{
            backgroundImage: `url(\"${headerBg.src}\")`,
            height: "26rem",
            width: "auto",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
         }}
      >
         {" "}
         <nav className="bg-inherit px-1 py-2.5 sm:px-4">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
               <Link href="/#" passHref>
                  <a
                     className="flex items-center"
                     onClick={() => {
                        setMenuButton(false);
                     }}
                  >
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img
                        src="/logo.svg"
                        className="mr-3 h-6 sm:h-10"
                        alt="BroncoBotics Logo"
                     />
                     <span
                        className={homeClass.concat(" text-2xl")}
                        style={{ fontFamily: "DM Serif Text" }}
                     >
                        BroncoBotics
                     </span>{" "}
                  </a>
               </Link>
               <button
                  data-collapse-toggle="mobile-menu"
                  type="button"
                  className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                  onClick={() => {
                     setMenuButton(!menuButton);
                  }}
               >
                  <span className="sr-only">Open main menu</span>
                  {menuSvg}
               </button>
               <div
                  className={" w-full md:block md:w-auto ".concat(
                     menuButton ? " hidden" : " block"
                  )}
                  id="mobile-menu"
               >
                  <ul className="relative left-[50%] mt-4 -mr-2 flex w-[50%] flex-col bg-gray-600/70 object-right text-right font-semibold md:left-0 md:mt-0 md:w-full md:flex-row md:space-x-4 md:bg-inherit md:text-sm md:font-medium ">
                     <NavButton
                        url={"/"}
                        home={true}
                        name={"Home"}
                        setMenuButton={setMenuButton}
                        currentPage={props.currentPage}
                     />
                     {a.map((b, index) => {
                        return <NavButton {...b} key={index} />;
                     })}
                  </ul>
               </div>
            </div>
         </nav>
         <div className="bg-inherit">
            <div
               className="hidden text-center text-white md:block"
               style={{
                  marginTop: "3rem",
                  fontFamily: "Martel",
                  fontSize: "7.5rem",
               }}
            >
               BroncoBotics
            </div>

            <div
               className={"text-center text-white md:hidden ".concat(
                  menuButton ? " block" : " hidden"
               )}
               style={{
                  fontFamily: "Martel",
                  marginTop: "3rem",
                  maxWidth: "100%",
                  fontSize: "3.5rem",
               }}
            >
               BroncoBotics
            </div>

            <div
               className="hidden text-center text-white md:block "
               style={{
                  marginTop: "-.75rem",
                  fontFamily: "Martel",
                  fontSize: "3rem",
               }}
            >
               Together to Create
            </div>
            <div
               className={"text-center text-white md:hidden ".concat(
                  menuButton ? " block" : " hidden"
               )}
               style={{
                  fontFamily: "Martel",
                  marginTop: "-.75rem",
                  maxWidth: "100%",
                  fontSize: "2.5rem",
               }}
            >
               Together to Create
            </div>
         </div>
      </header>
   );
};

interface NavButtonProps extends NavbarProps {
   url: string;
   name: string;
   setMenuButton: React.Dispatch<React.SetStateAction<boolean>>;
   home?: boolean;
}

let NavButton = (props: NavButtonProps): JSX.Element => {
   let defaulClassName = " block py-2 pl-2 text-base  whitespace-nowrap ";
   let otherPage = " hover:text-gray-300 text-white ";
   let choosePage = " text-red-500 hover:text-[#d63838] ";
   let a: string;
   if (!props.home) {
      a =
         props.currentPage === props.url.substring(1)
            ? choosePage + defaulClassName
            : defaulClassName + otherPage;
   } else {
      a =
         props.currentPage === "home"
            ? choosePage + defaulClassName + " md:hidden"
            : defaulClassName + otherPage + " md:hidden";
   }

   return (
      <li>
         <Link href={props.url}>
            <a
               className={a}
               style={{ fontFamily: "DM Serif Text" }}
               onClick={() => {
                  props.setMenuButton(true);
               }}
            >
               {props.name}
            </a>
         </Link>
      </li>
   );
};

export default Navbar;
