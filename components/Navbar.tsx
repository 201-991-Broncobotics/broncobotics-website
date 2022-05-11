import headerBg from "/public/header-bg-opacity.png";
import Link from "next/link";

interface NavbarProps {
	currentPage:
		| "about"
		| "home"
		| "competitions"
		| "socials"
		| "robots"
		| "brophy"
		| "members";
}
const Navbar = (props: NavbarProps) => {	let defaulClassName = "block py-2 pl-2 text-base";
let otherPage = " hover:text-gray-300 text-white";
	let choosePage = " text-red-500 hover:text-[#d63838] ";	// console.log(choosePage + defaulClassName);
	let aboutClass =
	props.currentPage === "about"
			? choosePage + defaulClassName
			: defaulClassName + otherPage;
let competitionsClass =
		props.currentPage === "competitions"
	? choosePage + defaulClassName
		: defaulClassName + otherPage;
	let photosClass =
		props.currentPage === "socials"
		? choosePage + defaulClassName
		: defaulClassName + otherPage;
	let robotsClass =		props.currentPage === "robots"
			? choosePage + defaulClassName
			: defaulClassName + otherPage;
	let brophyClass =
		props.currentPage === "brophy"
			? choosePage + defaulClassName
			: defaulClassName + otherPage;
	let membersClass =
		props.currentPage === "members"
			? choosePage + defaulClassName
			: defaulClassName + otherPage;
	let homeClass =
		props.currentPage === "home"
			? "self-center md:text-xl font-semibold whitespace-nowrap -ml-2".concat(
					choosePage
			  )
			: "self-center md:text-xl font-semibold whitespace-nowrap -ml-2".concat(
					otherPage
			  );

	return (
		<header
			className="text-red-500 "
			style={{
				backgroundImage: `url(\"${headerBg.src}\")`,
				height: "26rem",			width: "auto",
				backgroundPosition: "center",			backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				position: "relative",
			}}>			<nav className="bg-inherit px-1 py-2.5 sm:px-4">
				<div className="container mx-auto flex flex-wrap items-center justify-between">
				<Link href="/#" passHref>
						<a className="flex items-center">
							{/* eslint-disable-next-line @next/next/no-img-element */}
						<img						src="/logo.svg"
								className="mr-3 h-6 sm:h-10"
							alt="BroncoBotics Logo"
						/>
							<span
								className={homeClass.concat(" sm:text-2xl")}
							style={{ fontFamily: "DM Serif Text" }}>
								BroncoBotics
						</span>						</a>
				</Link>
					<button
						data-collapse-toggle="mobile-menu"
			type="button"
						className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
		aria-controls="mobile-menu-2"
						aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<svg
							className="h-6 w-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"></path>
						</svg>
						<svg
							className="hidden h-6 w-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"></path>
						</svg>
					</button>
					<div className="hidden w-full md:block md:w-auto" id="mobile-menu">
						<ul className="mt-4 flex flex-col font-semibold md:mt-0 md:flex-row md:space-x-4 md:text-sm md:font-medium">
							<li>
								<Link passHref href="/about">
									<a
										className={aboutClass}
										style={{ fontFamily: "DM Serif Text" }}>
										About Broncobotics
									</a>
								</Link>
							</li>
							<li>
								<Link href="/members" passHref>
									<a
										className={membersClass}
										style={{ fontFamily: "DM Serif Text" }}>
										Our Members
									</a>
								</Link>
							</li>
							<li>
								<Link href="/robots" passHref>
									<a
										className={robotsClass}
										style={{ fontFamily: "DM Serif Text" }}>
										Our Robots
									</a>
								</Link>
							</li>
							<li>
								<Link href="/socials" passHref>
									<a
										className={photosClass}
										style={{ fontFamily: "DM Serif Text" }}>
										Social Media
									</a>
								</Link>
							</li>
							<li>
								<Link href="/brophy">
									<a
										className={brophyClass}
										style={{ fontFamily: "DM Serif Text" }}>
										About Our School
									</a>
								</Link>
							</li>
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
					}}>
					BroncoBotics
				</div>

				<div
					className="text-center text-white md:hidden"
					style={{
						fontFamily: "Martel",
						marginTop: "3rem",
						maxWidth: "100%",
						fontSize: "3.5rem",
					}}>
					BroncoBotics
				</div>

				<div
					className="hidden text-center text-white md:block "
					style={{
						marginTop: "-.75rem",
						fontFamily: "Martel",
						fontSize: "3rem",
					}}>
					Together to Create
				</div>
				<div
					className="text-center text-white md:hidden"
					style={{
						fontFamily: "Martel",
						marginTop: "-.75rem",
						maxWidth: "100%",
						fontSize: "2.5rem",
					}}>
					Together to Create
				</div>
			</div>
		</header>
	);
};

export default Navbar;
