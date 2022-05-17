import React from "react";
import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import type { InferGetStaticPropsType } from "next";

interface MemberType {
	name: string;
	graduationYear: number;
	email: string;
}

const Members = ({
	members,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	let [year, setYear] = useState(0);

	let memberYears: number[] = [];

	members = members.sort((a, b) => a.graduationYear - b.graduationYear);

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
				className="my-2 flex flex-row justify-center self-center bg-gray-50 text-center text-2xl text-white"
				style={{ fontFamily: "Times New Roman" }}
			>
				{memberYears
					.sort((a, b) => a - b)
					.map((memberYear, index) => {
						return (
							<MemberButton
								setYear={setYear}
								year={memberYear}
								key={index}
								selected={year}
							/>
						);
					})}

				<MemberButton setYear={setYear} year={0} selected={year} />
			</div>
			<div className="text-center ">
				<ul className="  m-auto w-[20%] outline-white ">
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
				</ul>
			</div>
			<Footer />
		</div>
	);
};

const MemberButton = (props: {
	year: number;
	setYear: React.Dispatch<React.SetStateAction<number>>;
	selected: number;
}): JSX.Element => {
	let b = props.year === 0;
	let a: "All" | number = b ? "All" : props.year;

	return (
		<button
			className={"mx-4 w-[10%] rounded-md border border-white text-red-500 ".concat(
				props.selected === props.year ? "bg-white" : ""
			)}
			onClick={() => {
				props.setYear(props.year);
			}}
		>
			{a}
		</button>
	);
};

interface MemberListProps {
	member: MemberType;
}

const MemberList = (props: MemberListProps) => {
	return (
		<a href={"mailto:".concat(props.member.email)}>
			<li
				className="my-2 w-full bg-gray-50 text-2xl text-white  outline outline-1 outline-black   "
				style={{ fontFamily: "Martel", listStyle: "none" }}
			>
				{props.member.name} {"'"}
				{String(props.member.graduationYear).substring(2, 4)}.
			</li>
		</a>
	);
};

export const getStaticProps = async () => {
	const res = await fetch("https://broncobotics.vercel.app/api/members/real");
	const members: MemberType[] = await res.json();

	return {
		props: {
			members,
		},
	};
};

export default Members;
export type { MemberType };
