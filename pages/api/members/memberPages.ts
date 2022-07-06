import { NextApiRequest, NextApiResponse } from "next";
import { getDoc, doc } from "firebase/firestore";

import type { MemberPageType } from "../../members/[member]";
import { db } from "../../../components/firebase/db";
import cleanMember from "../../../components/utils/cleanMember";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<MemberPageType | ["DOES NOT EXIST"]>
) {
   let title = decodeURI(req.query.title as string);
   const docRef = doc(db, "members", title);
   let docSnap = await getDoc(docRef);

   if (docSnap.exists()) {
      let a = docSnap.data();
      a["title"] = title;
      try {
         res.send(cleanMember(a as MemberPageType));
      } catch {
         res.send(["DOES NOT EXIST"]);
      }
   } else {
      res.send(["DOES NOT EXIST"]);
   }
}
