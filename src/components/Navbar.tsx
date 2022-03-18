interface NavbarProps {
    currentPage: string, 
    aboveImageText: React.ReactNode,
}

const Navbar = (props: NavbarProps) => {
    
    let defaulClassName: string = "block py-2 pr-4 pl-3 "
    let otherPage: string = " hover:text-gray-300 text-white "
    let choosePage: string = " text-red-500 hover:text-red-400 "
    // console.log(choosePage + defaulClassName);
    let aboutClass: string = (props.currentPage === "about" ? choosePage + defaulClassName : defaulClassName + otherPage);
    let competitionsClass: string = (props.currentPage === "competitions" ? choosePage + defaulClassName : defaulClassName + otherPage);
    let photosClass: string = (props.currentPage === "photos" ? choosePage + defaulClassName : defaulClassName + otherPage);
    let joinClass: string = (props.currentPage === "join" ? choosePage + defaulClassName : defaulClassName + otherPage);
    let homeClass: string = (props.currentPage === "home" ? "self-center text-xl font-semibold whitespace-nowrap ".concat(choosePage) : "self-center text-xl font-semibold whitespace-nowrap ".concat(otherPage))
    
    return (
        <div className='' style={{"backgroundImage":"url(\"/src/header-bg-opacity.png\")", height:"26rem", width: 'auto',"backgroundPosition":"center","backgroundRepeat":"no-repeat","backgroundSize":"cover","position":"relative"}}>
            <nav className="px-2 sm:px-4 py-2.5 bg-inherit">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="/#" className="flex items-center">
                        <img src="/src/logo.svg" className="mr-3 h-6 sm:h-10" alt="BroncoBotics Logo" />
                        <span className={homeClass} style={{fontFamily: 'DM Serif Text',}}>BroncoBotics</span>
                    </a>
                    <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium" >
                        <li>
                        <a href="/about" className={aboutClass} style={{fontFamily: 'DM Serif Text',}}>About Broncobotics</a>
                        </li>
                        <li>
                        <a href="/photos" className={photosClass} style={{fontFamily: 'DM Serif Text',}}>Photos</a>
                        </li>
                        <li>
                        <a href="/join" className={joinClass} style={{fontFamily: 'DM Serif Text',}}>How to Join</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            {props.aboveImageText}
        </div>
        )
}

export default Navbar