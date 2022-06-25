import { NextApiRequest, NextApiResponse } from "next";

import type { MemberPageType } from "../../members/[member]";
import { db } from "../../../firebase/clientApp";
import { getDoc, doc } from "firebase/firestore";
import cleanMember from "../../../utils/member";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<MemberPageType | ["DOES NOT EXIST"]>
) {
   let title = req.query.title as string;
   const docRef = doc(db, "members", title);
   let docSnap = await getDoc(docRef);

   if (docSnap.exists()) {
      let a = docSnap.data();
      a["title"] = title;
      res.send(cleanMember(a as MemberPageType));
   } else {
      res.send(["DOES NOT EXIST"]);
   }
}
