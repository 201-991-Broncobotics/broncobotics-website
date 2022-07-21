import { db } from "../../../lib/firebase/db";

import cleanMember from "../../../lib/utils/cleanMember";
import checkMember from "../../../lib/utils/checkMember";

import type { MemberPageType } from "../../members/[member]";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<MemberPageType | ["DOES NOT EXIST"] | { error: string }>
) {
   if (req.method !== "POST") {
      if (req.query.title !== undefined) {
         let title = decodeURI(req.query.title as string);
         // const docRef = doc(db, "members", title);
         const docRef = db.collection("members").doc(title);
         let docSnap = await docRef.get();

         if (docSnap.exists) {
            let a = docSnap.data() as MemberPageType;
            a["title"] = title;
            try {
               res.send(cleanMember(a as MemberPageType));
            } catch {
               res.send(["DOES NOT EXIST"]);
            }
         } else {
            res.send(["DOES NOT EXIST"]);
         }
      } else if (req.query.email !== undefined) {
         let email = decodeURI(req.query.email as string);
         // const q = query(
         //    collection(db, "members"),
         //    where("social.email", "==", email)
         // );

         const q = await db
            .collection("members")
            .where("social.email", "==", email)
            .get()
            .catch((a) => {
               res.send(["DOES NOT EXIST"]);
               return a;
            });
         const querySnapshot = q;

         if (!querySnapshot.empty) {
            try {
               res.send(
                  cleanMember({
                     ...querySnapshot.docs[0].data(),
                     title: querySnapshot.docs[0].id,
                  } as MemberPageType)
               );
            } catch {
               res.send(["DOES NOT EXIST"]);
            }
         } else {
            res.send(["DOES NOT EXIST"]);
         }
      } else {
         res.send(["DOES NOT EXIST"]);
      }
   } else if (req.method === "POST") {
      if (req.query.title === undefined) {
         res.status(400).send({ error: "No title provided" });
      } else {
         let title = req.query.title as string;
         // const docRef = doc(db, "members", title);
         const docRef = db.collection("members").doc(title);

         let a: MemberPageType;

         if (typeof req.body === "string") {
            a = JSON.parse(req.body) as MemberPageType;
         } else {
            a = req.body as MemberPageType;
         }
         await docRef.set(a);

         res.status(200).send(a as MemberPageType);
      }
   }
}
