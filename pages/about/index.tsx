/* eslint-disable @next/next/no-img-element */
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NextPage } from "next";
import Image from "next/image";

const About: NextPage = () => {
	let imgFormatting =
		"self-center object-center h-auto m-auto object-cover my-2 bg-white w-full";

	return (
		<div className="bg-gray-50">
			<Header currentPage="about" />
			<div
				className="mx-4 mt-6 px-4 text-center text-white"
				style={{ fontFamily: "Open Sans" }}
			>
				<p className="font-mono text-lg font-semibold">
					BroncoBotics is the robotics club of{" "}
					<a
						href="https://www.brophyprep.org/"
						className="text-blue-400 underline hover:text-blue-300 hover:no-underline hover:opacity-90 "
					>
						Brophy College Preparatory
					</a>
					, a Private Jesuit High School located in Central Phoenix.
				</p>
				<p className="font-mono text-lg font-semibold">
					BroncoBotics currently has four different teams, with two competing in
					VEX, one in FTC, and one in FRC.
				</p>
				<div className="mt-4 flex justify-center text-justify">
					<div className="mx-2 mr-6 flex-1 font-medium ">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/3/38/Vex-Logo.jpg"
							alt="VEX LOGO"
							className={imgFormatting}
						/>
						VRC is a team for students who are joining robotics for the first
						time because of its focus on kit parts. Currently, BroncoBotics has
						2 VRC teams, 201A and 201B. VEX is a new program that we are very
						happy with. Congrats to Team 201A who made it to States!
					</div>
					<div className="mx-2 flex-1 font-medium">
						<img
							src="https://www.firstinspires.org/sites/default/files/uploads/resource_library/brand/thumbnails/FTC-Vertical.png"
							alt="FTC LOGO"
							className={imgFormatting}
						/>
						FTC is a team for students who have more experience with robotics.
						Because of FTC&apos;s unique use of both kit parts and custom parts,
						it is the perfect competition to prepare our sophomores and juniors
						for FRC. Congrats to BroncoBotics FTC team 201 who made it to
						states!
					</div>
					<div className="mx-2 ml-6 flex-1  font-medium">
						<img
							src="https://www.firstinspires.org/sites/default/files/uploads/resource_library/brand/thumbnails/FRC-Vertical.png"
							alt="FRC LOGO"
							className={imgFormatting}
						/>
						FRC is the final level of BroncoBotics. FRC robots are made almost
						exclusively out of custom made parts manufactured in Brophy&apos;s
						Innovation Commons. FRC is made up of Juniors and Seniors who have
						lots of experience from their past years in robotics. Currently,
						Broncobotics has 1 FRC team, team 991.
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
