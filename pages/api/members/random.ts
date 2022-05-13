// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { MemberType } from "../../members/index";

import lastNames from "../../../public/lastNames.json";
import firstNames from "../../../public/firstNames.json";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<MemberType[]>
) {
	let limit = Number(req.query.limit) || 10;
	let years = Number(req.query.years) || 5;

	let a: MemberType[] = [];
	let b: number[] = [];

	for (let i = 0; i < years; i++) {
		b.push(Math.floor(Math.random() * 124) + 1900);
	}

	let firstName: string;
	let lastName: string;

	let graduationYear: number;

	let c: MemberType;

	for (let i = 0; i < limit; i++) {
		firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
		lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
		graduationYear = b[Math.floor(Math.random() * b.length)];

		c = {
			name: `${firstName} ${lastName}`,
			graduationYear: graduationYear,
			email: `${firstName.substring(0, 1)}${lastName}${String(
				graduationYear
			).substring(2, 4)}@brophybroncos.org`.toLowerCase(),
		};

		a.push(c);
	}

	res.send(a);
}
