import React from "react";
import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import type {
	NextPage,
	GetServerSideProps,
	InferGetServerSidePropsType,
} from "next";

interface MemberType {
	name: string;
	graduationYear: number;
}

const Members = ({ members }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	let [year, setYear] = useState(0);

	let memberYears: number[] = [];

	members = members.sort((a, b) => a.graduationYear- b.graduationYear)

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
				className="my-2 self-center bg-gray-50 text-center text-2xl text-white flex flex-row justify-center"
				style={{ fontFamily: "Times New Roman" }}
			>
				{memberYears.sort((a, b) => a-b ).map((memberYear, index) => {
					return (
						<MemberButton setYear={setYear} year={memberYear} key={index} selected={year}/>
					);
				})}

				<MemberButton setYear={setYear} year={0} selected={year}/>
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
	selected: number; 
}): JSX.Element => {
	let b = props.year === 0;
	let a: "All" | number = b ? "All" : props.year;

	return (
		<button
			className={"mx-4 text-red-500 border border-white rounded-md w-[10%] ".concat((props.selected === props.year ? "bg-white" : "" ))}
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
	return <div className="bg-gray-50">{props.member.name}</div>;
};

export const getServerSideProps = async () => {
	const res = await fetch("http://localhost:3000/api/members/random?limit=43&years=5");
	const members: MemberType[] = await res.json();

	return {
		props: {
			members,
		},
	};
};

export default Members;
export type { MemberType };
