import MembersPage from "../members/index";
import type { MemberType } from "../members/index";
import type { InferGetStaticPropsType } from "next";

const NotFoundMembers = (
   props: InferGetStaticPropsType<typeof getStaticProps>
) => {
   return (
      <MembersPage members={props.members}>
         <div></div>
      </MembersPage>
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

export default NotFoundMembers;
