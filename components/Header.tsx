import Navbar from './Navbar';
import Head from "next/head"

interface HeaderProps {
	currentPage:
		| 'about'
		| 'home'
		| 'competitions'
		| 'socials'
		| 'robots'
		| 'brophy'
		| 'members';
}

function Header(props: HeaderProps) {
	let a = (
		<div className="bg-inherit">
			<div
				className="text-center text-white"
				style={{
					marginTop: '3rem',
					fontFamily: 'Martel',
					fontSize: '7.5rem',
				}}
			>
				BroncoBotics
			</div>
			<div
				className="text-center text-white"
				style={{
					marginTop: '-.75rem',
					fontFamily: 'Martel',
					fontSize: '3rem',
				}}
			>
				Together to Create
			</div>
		</div>
	);

	return (
		<>
			<Head>
				<title>Broncobotics Website</title>
				<meta name="description" content="BroncoBotics FTC team 201 FRC team 991" />
				<link rel="icon" href="/logo.svg" />
			</Head>
			<Navbar currentPage={props.currentPage} aboveImageText={a} />
		</>
	);
}

export default Header;
