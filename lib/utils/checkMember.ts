/**
 *
 * @param member what you want to be checked
 * @param checkTitle if the member requires a title
 * @returns {boolean} true if member is valid, false if not
 *
 * a helper function that essentially makes sure that the MemberPageType is followed
 */

let checkMember = (member: any, checkTitle?: boolean): boolean => {
   if (typeof member === "string") {
      member = JSON.parse(member);
   }

   if (checkTitle !== true) {
      if (member.title === undefined) {
         return false;
      }
   }

   if (member.title === undefined) {
      return false;
   }
   if (member.graduatingYear === undefined) {
      return false;
   }
   if (member.name === undefined) {
      return false;
   }
   if (member.social.email === undefined) {
      return false;
   }

   return true;
};

export default checkMember;
