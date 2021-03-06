import { useMemo } from "react";
import { useState } from "react";
import Link from "next/link";
import Fuse from "fuse.js";

import type { ReactNode } from "react";
import type { InferGetStaticPropsType } from "next";

import { db } from "../../lib/firebase/db";

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

   const fuse = useMemo(() => {
      return new Fuse(members, {
         includeScore: true,
         isCaseSensitive: false,
         keys: [
            { name: "name", weight: 5 },
            {
               name: "graduationYear",
               weight: 9,
               getFn: (member) => member.graduationYear.toString(),
            },
            { name: "email", weight: 1 },
         ],
      });
   }, [members]);

   // fuzzy search with fuse
   let membersList: MemberType[] = useMemo(() => {
      if (search !== "") {
         return fuse.search(search).map((a) => a.item);
      } else {
         return members;
      }
   }, [search, members, fuse]);

   return (
      <div className="bg-gray-50">
         <Header currentPage="members" />

         {/* <PeopleHierarchy /> */}

         {children}

         <p
            className=" text-center text-2xl font-bold text-white "
            style={{ fontFamily: "Roboto Slab" }}
         >
            Create your page if you are a BroncoBotics member by clicking
            <Link href="/members/create" className=" text-center font-normal">
               <a className="text-blue-500 hover:cursor-pointer">{" here"}</a>
            </Link>
         </p>

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
               {(membersList || members).map((members) => {
                  return <MemberList member={members} key={members.email} />;
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
   // let a = await getDocs(query(collection(db, "realNames")));

   let a = await db.collection("realNames").get();

   let b = a.docs.map(async (m) => {
      let a = m.data();
      // const q = query(
      //    collection(db, "members"),
      //    where("social.email", "==", a.email)
      // );
      // const querySnapshot = await getDocs(q);
      const querySnapshot = await db
         .collection("members")
         .where("social.email", "==", a.email)
         .get();
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
      revalidate: 1800,
   };
};

export default Members;
export type { MemberType };
