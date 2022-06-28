import type { MemberPageType } from "../pages/members/[member]";

let cleanMember = (member: MemberPageType): MemberPageType => {
   let b: string[] = [];
   member.currentTeams.forEach((a) => {
      if (a !== "") {
         b.push(a.trim());
      }
   });
   member.currentTeams = b;
   member.graduatingYear = parseInt(member.graduatingYear as unknown as string); // as unknown as string ts is stupid lol

   if (member.photo === "") {
      delete member["photo"];
   }
   if (member.social.github === "") {
      delete member["social"]["github"];
   }

   if (member.social.phoneNumber === "") {
      delete member["social"]["phoneNumber"];
   }

   if (member.social.instagram === "") {
      delete member["social"]["instagram"];
   }

   if (member.social.twitter === "") {
      delete member["social"]["twitter"];
   }

   return member;
};

export default cleanMember;
