import memberPagesInfoJson from "../../public/memberpages.json";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Header from "../../components/Header";
import { useEffect } from "react";
import { useRouter } from "next/router";

export type teamTypes = "VEX" | "FTC" | "FRC" | "LEADERSHIP";

export interface MemberPageType {
   title: string;
   name: string;
   graduatingYear: number;
   currentTeams: string[];
   social: {
      instagram?: string;
      email: string;
      github?: string;
      twitter?: string;
      phoneNumber?: string;
      website?: string;
   };
}

const MemberPage = ({
   member,
}: {
   member: MemberPageType | ["DOES NOT EXIST"];
}) => {
   let router = useRouter();
   let a: string = "";
   useEffect(() => {
      if (Array.isArray(member)) {
         router.replace("/members/notfound");
      }
   });

   return (
      <div>
         <Header currentPage="none" noHead></Header>
      </div>
   );
};

export const getStaticProps: GetStaticProps = async (context) => {
   let b = context.params || { member: "faewuhfiuaewhifuawefiua" };

   let a = await fetch(
      `https://broncobotics.vercel.app/api/members/memberPages?title=${
         b.member || "AsdfawiefiasiBHBSDAJFHB"
      }`
   );

   let member: MemberPageType | ["DOES NOT EXIST"] = await a.json();

   return {
      props: {
         member,
      },
      revalidate: 10800, // rebuilds it every 3 hours if it is requested
   };
};

export async function getStaticPaths() {
   const memberPagesInfo: MemberPageType[] = memberPagesInfoJson;
   return {
      paths: memberPagesInfo.map((member) => ({
         params: {
            member: member.title,
         },
      })),
      fallback: true,
   };
}
export default MemberPage;
