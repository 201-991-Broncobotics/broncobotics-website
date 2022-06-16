import { NextApiRequest, NextApiResponse } from "next";
import type {MemberPageType} from "../../members/[member]";
import memberPagesJson from "../../../public/memberpages.json";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<MemberPageType | "DOES NOT EXIST">
 ) {
    let title = req.query.title;
    let memberPages: MemberPageType[] = memberPagesJson; 

    let a = memberPages.find(memberPage => memberPage.title === title)

    res.send(a == undefined ? "DOES NOT EXIST" : a);

 }
 