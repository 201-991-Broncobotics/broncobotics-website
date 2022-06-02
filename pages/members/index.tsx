import React from "react";
import { useState } from "react";
import type { InferGetStaticPropsType } from "next";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import PeopleHierarchy from "../../components/PeopleHierarchy";

interface MemberType {
   name: string;
   graduationYear: number;
   email: string;
}

const Members = ({
   members,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
   return (
      <a href={"mailto:".concat(props.member.email)}>
         <li
            className="my-2 w-full bg-gray-50 text-2xl text-white  outline outline-1 outline-black   "
            style={{ fontFamily: "Martel", listStyle: "none" }}
         >
            {props.member.name} {"'"}
            {String(props.member.graduationYear).substring(2, 4)}.
         </li>
      </a>
   );
};

export const getStaticProps = async () => {
   const res = await fetch("https://broncobotics.vercel.app/api/members/real");
   const members: MemberType[] = await res.json();

   return {
      props: {
         members,
      },
   };
};

export default Members;
export type { MemberType };
