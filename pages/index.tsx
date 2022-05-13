import type { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const Home: NextPage = () => {
	let [easterEgg, setEasterEgg] = useState(false);

	return (
		<div className="bg-gray-50">
			<Header currentPage="home" />
			<button
				className="bg-gray-50 text-gray-50 "
				onClick={() => {
					setEasterEgg(!easterEgg);
				}}>
				s
			</button>
			<h2
				className=" -mt-4 text-center text-4xl text-white"
				style={{ fontFamily: "Times New Roman" }}>
				Mission Statement
			</h2>
			<div
				className="mx-8 mt-2 text-center text-xl text-white"
				style={{ fontFamily: "Times New Roman" }}>
				BroncoBotics brings Fun and Friendly to Robotics while helping fellow
				students with Teamwork, Respect, Creativity, and Problem-Solving Skills
				through Coding, Digital Design, and Engineering.{" "}
				{easterEgg ? "We like robots <3 :3 :0🥵" : ""}
			</div>
			<div className="mt-4">
				<iframe
					src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23000000&ctz=America%2FPhoenix&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&showTitle=0&src=YnJvcGh5YnJvbmNvcy5vcmdfbnVxdTN0bmNyM3RubW02bXR0YzhlYXZmMGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F6BF26"
					style={{ border: "solid 1px #777" }}
					width="90%"
					height="700"
					frameBorder="0"
					scrolling="no"
					className="m-auto "></iframe>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
