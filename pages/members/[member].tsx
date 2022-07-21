/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, GetStaticPaths } from "next";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import Head from "next/head";

import { db } from "../../lib/firebase/db";

import Header from "../../components/Header";
import cleanMember from "../../lib/utils/cleanMember";
import { SocialButton } from "../socials/index";
import noPicture from "../../public/no_picture.png";

interface Socials {
   instagram?: string;
   email: string;
   github?: string;
   twitter?: string;
   phoneNumber?: string;
}

export interface MemberPageTypeNoTitle {
   name: string;
   graduatingYear: number;
   currentTeams: string[];
   photo?: string;
   social: Socials;
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
         <Header currentPage="none" noHead />
         {JSON.stringify(member)}

         <div className="flex w-auto  flex-row ">
            <div className="flex-1 ">
               <img
                  src={member.photo || noPicture.src}
                  alt={
                     member.photo
                        ? "photo of " + member.name
                        : "This member does not have a picture"
                  }
                  className="h-full w-full object-cover "
               />
            </div>
            <div className="flex-1 ">
               <Socials social={member.social} />
            </div>
         </div>
      </div>
   );
};

type SocialsProps = { social: Socials };

let Socials = ({ social }: SocialsProps) => {
   return (
      <ul className=" min-w-[10rem] max-w-[60%] text-center text-4xl sm:w-[50%] md:w-[30%] lg:w-[30%]  ">
         {social.twitter !== undefined ? (
            <SocialButton name="Twitter" link={social.twitter}></SocialButton>
         ) : (
            ""
         )}
         {social.email !== undefined ? (
            <SocialButton
               name="Email"
               link={"mailto:" + social.email}
            ></SocialButton>
         ) : (
            ""
         )}
         {social.phoneNumber !== undefined ? (
            <SocialButton
               name="Phone Number"
               link={"tel:" + social.phoneNumber}
            ></SocialButton>
         ) : (
            ""
         )}
         {social.instagram !== undefined ? (
            <SocialButton
               name="Instagram"
               link={social.instagram}
            ></SocialButton>
         ) : (
            ""
         )}
         {social.github !== undefined ? (
            <SocialButton name="Github" link={social.github}></SocialButton>
         ) : (
            ""
         )}
      </ul>
   );
};
export const getStaticProps: GetStaticProps = async (context) => {
   let b = context.params || { member: "faewuhfiuaewhifuawefiua" };
   let title = (b.member as string) || "AsdfawiefiasiBHBSDAJFHB";

   // const docRef = doc(db, "members", title);
   // let docSnap = await getDoc(docRef);

   let docSnap = await db.collection("members").doc(title).get();

   if (docSnap.exists) {
      let a = docSnap.data() as FirebaseFirestore.DocumentData; // I can do this without being scared because if it is undefined then docSnap.exists would be false
      a["title"] = title;

      return {
         props: {
            member: cleanMember(a as MemberPageType),
         },
         revalidate: 1800,
      };
   } else {
      // res.send(["DOES NOT EXIST"]);
      return {
         redirect: {
            destination: "/members/notfound",
            permanent: false,
         },
         revalidate: 1800,
      };
   }
};

export const getStaticPaths: GetStaticPaths = async () => {
   let paths: {
      params: {
         member: string;
      };
   }[] = [];

   // let querySnapshot = await getDocs(collection(db, "members"));
   let querySnapshot = await db.collection("members").get();
   querySnapshot.forEach((doc) => {
      paths.push({ params: { member: doc.id } });
   });

   return {
      paths,
      fallback: "blocking",
   };
};

export default MemberPage;
