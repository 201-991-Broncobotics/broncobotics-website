import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Socials = () => {
	let a: OneSocial[] = [
		{ link: "https://discord.gg/8kH9nxjp", name: "Discord" },
		{
			link: "https://www.google.com/url?q=https%3A%2F%2Fwww.instagram.com%2Fbroncobotics%2F%3Fhl%3Den&sa=D&sntz=1&usg=AOvVaw0dXb9KKQ0da0X_02x4mMo9",
			name: "Instagram",
		},
		{
			link: "https://www.youtube.com/channel/UC4-iVzitzOrSvx6bt9QqJWA",
			name: "YouTube",
		},
		{ link: "mailto:broncobotics@brophyprep.org", name: "Email" },
		{ link: "https://github.com/201-991-Broncobotics", name: "Github" },
		{
			link: "https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fbroncobotics%3Flang%3Den&sa=D&sntz=1&usg=AOvVaw0klHfH1f4Sn2HGAagCdNcp",
			name: "Twitter",
		},
		// to add a new social media, just add a new link and name. it will add to the /socials page on the website. 
	];
	return (
		<div className="" style={{ backgroundColor: "rgb(109,110,113)" }}>
			<Header currentPage="socials" />
			<div
				className="m-auto my-4 text-center text-5xl text-white "
				style={{ fontFamily: "Roboto Slab" }}>
				Follow us on Social Media!
			</div>
			<AllSocials a={a} />
			<Footer />
		</div>
	);
};

type OneSocial = {
	link: string;
	name: string;
};

type AllSocialsProps = {
	a: OneSocial[];
};

let AllSocials = (props: AllSocialsProps): JSX.Element => {
	return (
		<ul className=" m-auto min-w-[10rem] max-w-[60%] text-center text-4xl sm:w-[50%] md:w-[30%] lg:w-[30%]  ">
			{props.a.map((a, index) => {
				return <SocialButton link={a.link} name={a.name} key={index} />;
			})}
		</ul>
	);
};

interface SocialButtonProps {
	link: string;
	name: string;
}

let SocialButton = (props: SocialButtonProps): JSX.Element => {
	return (
		<a href={props.link}>
			<li
				className={
					"my-2 w-auto rounded-xl border-2 bg-red-500  hover:border-red-500 hover:bg-white hover:text-black"
				}
				style={{ fontFamily: "Roboto Slab" }}>
				{props.name}
			</li>
		</a>
	);
};

export default Socials;
