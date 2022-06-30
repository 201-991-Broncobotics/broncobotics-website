import type { InferGetStaticPropsType } from "next";
import { collection, query, where, getDocs } from "firebase/firestore";

import MembersPage from "../members/index";
import type { MemberType } from "../members/index";
import { db } from "../../components/firebase/db";
import realNames from "../../public/realNames.json";

const NotFoundMembers = (
   props: InferGetStaticPropsType<typeof getStaticProps>
) => {
   return (
      <MembersPage members={props.members}>
         <div
            className="text-bold my-2 text-center text-5xl text-red-500"
            style={{ fontFamily: "Roboto Slab" }}
         >
            That person was not found
         </div>
      </MembersPage>
   );
};

export const getStaticProps = async () => {
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
      return c;
   });

   return {
      props: {
         members: await Promise.all(b),
      },
   };
};

export default NotFoundMembers;
