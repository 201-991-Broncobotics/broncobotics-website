import type { GetStaticProps, GetStaticPaths } from "next";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import Head from "next/head";

import { db } from "../../firebase/db";
import Header from "../../components/Header";
import cleanMember from "../../utils/member";

export interface MemberPageTypeNoTitle {
   name: string;
   graduatingYear: number;
   currentTeams: string[];
   photo?: string;
   social: {
      instagram?: string;
      email: string;
      github?: string;
      twitter?: string;
      phoneNumber?: string;
   };
}

export interface MemberPageType extends MemberPageTypeNoTitle {
   title: string;
}

export interface MemberPageTypeUndefined {
   title?: string;
   name?: string;
   graduatingYear?: number;
   currentTeams?: Array<string>;
   photo?: string;
   social?: {
      instagram?: string;
      email?: string;
      github?: string;
      twitter?: string;
      phoneNumber?: string;
   };
}

const MemberPage = (props: { member: MemberPageType }) => {
   let member: MemberPageType = props.member;
   return (
      <div>
         <Head>
            <title>{"BroncoBotics - " + member.name}</title>
            <link rel="icon" href="/logo.svg" />
            <meta
               name="description"
               content={"The BroncoBotics member " + member.name}
            />
         </Head>
         <Header currentPage="none" noHead></Header>

         {JSON.stringify(member)}
      </div>
   );
};

export const getStaticProps: GetStaticProps = async (context) => {
   let b = context.params || { member: "faewuhfiuaewhifuawefiua" };
   let title = (b.member as string) || "AsdfawiefiasiBHBSDAJFHB";

   const docRef = doc(db, "members", title);
   let docSnap = await getDoc(docRef);

   if (docSnap.exists()) {
      let a = docSnap.data();
      a["title"] = title;

      return {
         props: {
            member: cleanMember(a as MemberPageType),
         },
         revalidate: 3600,
      };
   } else {
      // res.send(["DOES NOT EXIST"]);
      return {
         redirect: {
            destination: "/members/notfound",
            permanent: false,
         },
         revalidate: 3600,
      };
   }
};

export const getStaticPaths: GetStaticPaths = async () => {
   let paths: {
      params: {
         member: string;
      };
   }[] = [];

   let querySnapshot = await getDocs(collection(db, "members"));
   querySnapshot.forEach((doc) => {
      paths.push({ params: { member: doc.id } });
   });

   return {
      paths,
      fallback: "blocking",
   };
};

export default MemberPage;
