import React from "react";
import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface MemberType {
	name: string;
	graduationYear: number;
}

let a: MemberType[] = [
	{
		name: "Doer He",
		graduationYear: 2024,
	},
	{
		name: "Sameer Godbole",
		graduationYear: 2023,
	},
	{
		name: "Shaan Keole",
		graduationYear: 2024,
	},
];

const Members = () => {
	let [year, setYear] = useState(0);
	let [members, setMembers] = useState(a)

	let memberYears: number[] = [];

	members.forEach((member) => {
		if (memberYears.includes(member.graduationYear)) {
		} else {
			memberYears.push(member.graduationYear);
		}
	});

	return (
		<div className="bg-gray-50">
			<Header currentPage="members" />

			<div
				className="my-2 self-center bg-gray-50 text-center text-2xl text-white"
				style={{ fontFamily: "Times New Roman" }}
			>
				{memberYears.map((memberYear, index) => {
					return <MemberButton setYear={setYear} year={memberYear} key={index} />;
				})}

				<MemberButton setYear={setYear} year={0} />
			</div>

			{members
				.filter((member) => {
					if (year === 0) {
						return member.graduationYear > 0;
					} else {
						return member.graduationYear === year;
					}
				})
				.map((members, index) => {
					return <MemberList member={members} key={index} />;
				})}

			<Footer />
		</div>
	);
};

const MemberButton = (props: {
	year: number;
	setYear: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element => {
	let b = props.year === 0;
	let a: "All" | number = b ? "All" : props.year;

	return (
		<button
			className="mx-4 text-red-500 outline-2 outline-black"
			onClick={() => {
				props.setYear(props.year);
			}}
		>
			{a}
		</button>
	);
};

interface MemberProps {
	member: MemberType;
}

const MemberList = (props: MemberProps) => {
	return <div className="bg-gray-50">{props.member.name}</div>;
};

export default Members;
export type { MemberType };
