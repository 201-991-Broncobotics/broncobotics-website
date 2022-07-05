import { db } from "../../../components/firebase/db";
import { collection, query, where, getDocs } from "firebase/firestore";

import type { NextApiRequest, NextApiResponse } from "next";
import type { MemberType } from "../../members/index";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   let a = await getDocs(query(collection(db, "realNames")));

   let b = a.docs.map(async (m) => {
      let a = m.data();
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

   Promise.all(b).then((a) => res.send(a));
   // holy fuck that was so painful i hate async javascript why does Array.map return an array
   // of promises instead of a promise of an array i am so glad i remembered Promise.all exists
}
