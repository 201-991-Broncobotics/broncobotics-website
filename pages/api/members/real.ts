import type { NextApiRequest, NextApiResponse } from "next";
import type { MemberType } from "../../members/index";

import realNames from "../../../public/realNames.json";

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse<MemberType[]>
) {
   let a: MemberType[] = realNames;
   res.send(a);
}
