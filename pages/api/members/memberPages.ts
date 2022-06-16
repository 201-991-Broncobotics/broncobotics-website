import { NextApiRequest, NextApiResponse } from "next";
import memberPagesJson from "../../../public/memberpages.json";

export interface MemberPageType {
   title: string;
   name: string;
   graduatingYear: number;
   currentTeams: string[];
   social: {
      instagram?: string;
      email: string;
      github?: string;
      twitter?: string;
      phoneNumber?: string;
      website?: string;
   };
}

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse<MemberPageType | ["DOES NOT EXIST"]>
) {
   let title = req.query.title;
   let memberPages: MemberPageType[] = memberPagesJson;

   let a = memberPages.find((memberPage) => memberPage.title === title);

   res.send(a == undefined ? ["DOES NOT EXIST"] : a);
}
