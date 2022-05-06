import type { StaticImageData } from 'next/image';
import React from 'react';
import PlaceholderImage from './robotImages/FTC_2022.png';
import Image from 'next/image';

interface RobotType {
	robotImage: string | StaticImageData;
	robotNameShort: string;
	robotNameLong: string;
	robotType: 'VEX' | 'FTC' | 'FRC' | 'other';
	robotTeamNumber: '201A' | '201B' | '201' | '991' | 'other';
	robotEndYear: number;
	robotDescription: string;
	seasonName: string;
}

type RobotProps = { alignment: number; robot: RobotType };

function RobotsList(props: RobotProps) {
	if (props.alignment === 0) {
		let a = 'left';
	} else if (props.alignment === 1) {
		let a = 'right';
	}

	return (
		<div className="m-4 ml-20 flex flex-row">
			{/* <Image
				src={props.robot.robotImage}
				alt={props.robot.robotNameShort}
				className={'h-72 w-96 object-cover '.concat('')}
			/> */}
			<div className="ml-10">
				<div
					className=" text-2xl text-white "
					style={{ fontFamily: 'Serif' }}
				>
					This is {props.robot.robotNameLong} ({props.robot.robotNameShort}
					), used in the {props.robot.robotType}{' '}
					{props.robot.robotEndYear - 1}-{props.robot.robotEndYear} season,{' '}
					{props.robot.seasonName}!
				</div>
				<div
					className="mt-2 text-lg text-white"
					style={{ fontFamily: 'Serif' }}
				>
					{' '}
					{props.robot.robotDescription}
				</div>
			</div>
		</div>
	);
}

export default RobotsList;
export type { RobotType };
