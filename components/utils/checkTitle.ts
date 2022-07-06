/**
 *
 * Checks if a title exists using fetch.
 *
 * @param title The title to check.
 * @returns {Promise<boolean>} True if the title exists, false if it is useable.
 */
let checkTitle = async (title: string): Promise<boolean> => {
   let a = await fetch(`/api/members/memberPages?title=${title}`);

   // console.log(a);
   let b = await a.json();

   if (Array.isArray(b)) {
      console.log(title, false);
      return false; // does not exist
   } else {
      console.log(title, true);
      return true; // does exist
   }
};

export default checkTitle;
