import realNames from "../../../public/realNames.json";
import { db } from "../../../firebase/db";
import { collection, query, where, getDocs } from "firebase/firestore";

import type { NextApiRequest, NextApiResponse } from "next";
import type { MemberType } from "../../members/index";

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse<MemberType[]>
) {
   let a = realNames;

   let b = a.map(async (a) => {
      const q = query(
         collection(db, "members"),
         where("social.email", "==", a.email)
      );
      const querySnapshot = await getDocs(q);
      let c: MemberType;
      if (!querySnapshot.empty) {
         c = {
            link: "/members/" + querySnapshot.docs[0].id,
            name: a.name,
            graduationYear: a.graduationYear,
            email: a.email,
         };
      } else {
         c = {
            link: "mailto:".concat(a.email),
            name: a.name,
            graduationYear: a.graduationYear,
            email: a.email,
         };
      }
      return await c;
   });

   let c = Promise.all(b).then((a) => res.send(a));
   // holy fuck that was so painful i hate async javascript why does Array.map return an array
   // of promises instead of a promise of an array i am so glad i remembered Promise.all exists
}
