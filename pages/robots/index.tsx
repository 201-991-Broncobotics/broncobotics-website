import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PlaceholderImage from "../../public/robot.png";
import type { StaticImageData } from "next/image";
import Image from "next/image";

let robotConfig: RobotType[] = [
	{
		robotImage: PlaceholderImage,
		robotNameShort: "BS9K",
		robotNameLong: "Ball Shooter 9000",
		robotType: "FTC",
		robotEndYear: 2022,
		robotTeamNumber: "201",
		robotDescription:
			"lorem ipsum id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam ",
		seasonName: "Freight Frenzy",
	},
	{
		robotImage: PlaceholderImage,
		robotNameShort: "DIRT",
		robotNameLong: "Da Interesting Robot Thing",
		robotType: "FRC",
		robotEndYear: 2022,
		robotTeamNumber: "991",
		robotDescription:
			"lorem ipsum id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam",
		seasonName: "Rapid React",
	},
	{
		robotImage: PlaceholderImage,
		robotNameShort: "TARS",
		robotNameLong: "T-Shirt Air Repellant System",
		robotType: "FRC",
		robotEndYear: 2022,
		robotTeamNumber: "991",
		robotDescription:
			"lorem ipsum id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam",
		seasonName: "Freight Frenzy",
	},
];

function Robots() {
	return (
		<>
			<Header currentPage="robots" />
			<div className="mt-8">
				{robotConfig.map((robot, index, fullArray) => {
					let alignment: 0 | 1;
					if (index % 2 === 0) {
						alignment = 0;
					} else {
						alignment = 1;
					}

					let last: boolean = index + 1 === fullArray.length;

					return (
						<RobotsList
							alignment={alignment}
							robot={robot}
							key={index}
							last={last}
						></RobotsList>
					);
				})}
			</div>
			<Footer />
		</>
	);
}

export interface RobotType {
	robotImage: StaticImageData;
	robotNameShort: string;
	robotNameLong: string;
	robotType: "VEX" | "FTC" | "FRC" | "other";
	robotTeamNumber: "201A" | "201B" | "201" | "991" | "other";
	robotEndYear: number;
	robotDescription: string;
	seasonName: string;
}

export type RobotProps = { alignment: 0 | 1; robot: RobotType; last: boolean };

function RobotsList(props: RobotProps) {
	return (
		<div
			className={"mx-20 flex "
				.concat(props.alignment === 0 ? "flex-row-reverse " : "flex-row ")
				.concat(props.last ? "  " : " mb-10 ")}
		>
			<Image
				src={props.robot.robotImage}
				alt={props.robot.robotNameShort}
				className={"h-72 w-96".concat("")}
				objectFit={"cover"}
			/>
			<div className={"".concat(props.alignment === 0 ? "mr-8 " : "ml-8 ")}>
				<div className=" text-2xl text-white " style={{ fontFamily: "Serif" }}>
					This is {props.robot.robotNameLong} ({props.robot.robotNameShort}
					), used in the {props.robot.robotType} {props.robot.robotEndYear - 1}-
					{props.robot.robotEndYear} season, {props.robot.seasonName}!
				</div>
				<div
					className="mt-2 text-lg text-white"
					style={{ fontFamily: "Serif" }}
				>
					{" "}
					{props.robot.robotDescription}
				</div>
			</div>
		</div>
	);
}

export default Robots;
