import { useEffect } from "react";
import { useRouter } from "next/router";

const Custom404 = () => {
   const router = useRouter();
   useEffect(() => {
      router.replace("/");
   });

   return (
      <div
         className="text-center text-4xl text-white "
         style={{ fontFamily: "Martel" }}
      >
         404 - Page not found. Redirecting you to the home page.
      </div>
   );
};

export default Custom404;
