import React from 'react';
import { useState } from 'react';

import MemberList from '../../components/MemberList';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface MemberType {
	name: string;
	graduationYear: number;
	team: 'FTC' | 'FRC' | 'VEX' | 'leadership';
}

let members: MemberType[] = [
	{
		name: 'Doer He',
		graduationYear: 2024,
		team: 'leadership',
	},
	{
		name: 'Sameer Godbole',
		graduationYear: 2023,
		team: 'leadership',
	},
	{
		name: 'Shaan Keole',
		graduationYear: 2024,
		team: 'FTC',
	},
];

const Members = () => {
	let [year, setYear] = useState(0);

	return (
		<div className='bg-gray-50'>
			<Header currentPage="members" />

			<div className='bg-gray-50 text-white my-2 self-center text-center text-2xl' style={{fontFamily: "Times New Roman"}}>
				{members.map((member) => {
					return (
						<MemberButton
							setYear={setYear}
							year={member.graduationYear}
						/>
					);
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
					return <MemberList member={members} />;
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
	let a: 'All' | number = b ? 'All' : props.year;

	return (
		<button className='outline-2 outline-black text-red-500 mx-4'
			onClick={() => {
				props.setYear(props.year);
			}}
		>
			{a}
		</button>
	);
};

export default Members;
export type { MemberType };
