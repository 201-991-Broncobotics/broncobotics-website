/**
 *
 * Checks if a title exists using fetch.
 *
 * @param title The title to check.
 * @returns {Promise<boolean>} True if the title exists, false if it is useable.
 */
let checkTitle = async (title: string): Promise<boolean> => {
   let a = await fetch(`/api/members/memberPages/${title}`);
   let b = await a.json();

   if (Array.isArray(b)) {
      return false; // does not exist
   } else {
      return true; // does exist
   }
};

export default checkTitle;
