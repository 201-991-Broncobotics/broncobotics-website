import checkTitle from "./checkTitle";

import type { UserCredential } from "firebase/auth";

/**
 * abstraction function that returns a promise of a list of possible, unused, titles for a member.
 * @param {UserCredential} user - The firebase auth user to check.
 * @returns a promise of a list of possible, unused, titles for a member.
 */
let getPossibleTitles = async (user: UserCredential): Promise<string[]> => {
   let a: Array<string> = [
      user.user.displayName?.toLowerCase().replaceAll(/([ ,-])/g, ""), // remove spaces, commas, and dashes
      user.user.email?.toLowerCase().replaceAll("@brophybroncos.org", ""), // removes @brophybroncos.org
      user.user.email
         ?.toLowerCase()
         .replaceAll(/(@brophybroncos.org)/g, "")
         .replaceAll(/([0-9])/g, ""), // removes @brophybroncos.org and the graduation year
      (user.user.displayName?.toLowerCase().split(" ")[0] || "").concat(
         user.user.displayName?.toLowerCase().split(" ")[
            user.user.displayName?.toLowerCase().split(" ").length - 1
         ] || ""
      ), // first and last name
      (user.user.displayName?.toLowerCase().split(" ")[0] || " ").concat(
         (user.user.displayName?.toLowerCase().split(" ")[
            user.user.displayName?.toLowerCase().split(" ").length - 1
         ] || " ")[0]
      ), // first name + last initial
   ].filter((title) => title !== undefined) as string[];

   let b = await Promise.all(
      a
         .map((title) => title.trim())
         .filter((title, index, array) => {
            return array.indexOf(title) === index;
         })
         .map(async (title) => {
            return await n(title);
         })
   );

   return b.filter((title) => title !== undefined) as string[];
};

let n = async (title: string): Promise<string | undefined> => {
   let a = await checkTitle(title);
   return a ? undefined : title;
};

export default getPossibleTitles;
