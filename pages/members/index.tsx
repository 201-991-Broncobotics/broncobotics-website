import type { ReactNode } from "react";
import { useState } from "react";
import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { collection, query, where, getDocs } from "firebase/firestore";

import { db } from "../../firebase/db";
import realNames from "../../public/realNames.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import PeopleHierarchy from "../../components/PeopleHierarchy";

interface MemberType {
   name: string;
   graduationYear: number;
   email: string;
   link: string;
}

interface MembersProps extends InferGetStaticPropsType<typeof getStaticProps> {
   children?: ReactNode;
}

const Members = ({ members, children }: MembersProps) => {
   let [search, setSearch] = useState("");

   let memberYears: number[] = [];

   members = members.sort((a, b) => a.graduationYear - b.graduationYear);

   members.forEach((member) => {
      if (memberYears.includes(member.graduationYear)) {
      } else {
         memberYears.push(member.graduationYear);
      }
   });

   return (
      <div className="bg-gray-50">
         <Header currentPage="members" />

         {/* <PeopleHierarchy /> */}

         {children}

         <div
            className=" text-center text-4xl font-bold text-white"
            style={{ fontFamily: "Roboto Slab" }}
         >
            Search for Current and Former Broncobotics Members
         </div>
         <div
            className="my-2 flex flex-row justify-center self-center bg-gray-50 text-center text-2xl text-white"
            style={{ fontFamily: "Times New Roman" }}
         >
            <input
               type="text"
               className="w-[20%] min-w-[15rem] text-black"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
            />
         </div>
         <div className="text-center ">
            <ul className="  m-auto w-[20%] min-w-[15rem] outline-white ">
               {members
                  .filter((member) => {
                     return member.name
                        .toLowerCase()
                        .includes(search.toLowerCase());
                  })
                  .map((members, index) => {
                     return <MemberList member={members} key={index} />;
                  })}
            </ul>
         </div>
         <Footer />
      </div>
   );
};

interface MemberListProps {
   member: MemberType;
}

const MemberList = (props: MemberListProps) => {
   if (props.member.link.startsWith("https://")) {
      return (
         <Link href={props.member.link}>
            <a>
               <li
                  className="my-2 w-full rounded-lg bg-gray-50 text-2xl  text-white outline outline-[1.5px] outline-black"
                  style={{ fontFamily: "Martel", listStyle: "none" }}
               >
                  {props.member.name} {"'"}
                  {String(props.member.graduationYear).substring(2, 4)}.
               </li>
            </a>
         </Link>
      );
   } else {
      return (
         <a href={props.member.link}>
            <li
               className="my-2 w-full rounded-lg bg-gray-50 text-2xl  text-white outline outline-[1.5px] outline-black"
               style={{ fontFamily: "Martel", listStyle: "none" }}
            >
               {props.member.name} {"'"}
               {String(props.member.graduationYear).substring(2, 4)}
            </li>
         </a>
      );
   }
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
      return await c;
   });

   return {
      props: {
         members: await Promise.all(b),
      },
   };
};

export default Members;
export type { MemberType };
