// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { MemberType } from "../../members/index";

import lastNames from "../../../public/lastNames.json";
import firstNames from "../../../public/firstNames.json";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	let limit = Number(req.query.limit) || 10;
	let years = Number(req.query.years) || 5;

	let a: MemberType[] = [];
	let b: number[] = [];

	for (let i = 0; i < years; i++) {
		b.push(Math.floor(Math.random() * 124) + 1900);
	}

	for (let i = 0; i < limit; i++) {
		a.push({
			name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
				lastNames[Math.floor(Math.random() * lastNames.length)]
			}`,
			graduationYear: b[Math.floor(Math.random() * b.length)],
		});
	}

	res.send(a);
}
