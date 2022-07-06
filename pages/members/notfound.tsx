import type { InferGetStaticPropsType } from "next";
import MembersPage from "../members/index";

import { getStaticProps } from "./index";

const NotFoundMembers = (
   props: InferGetStaticPropsType<typeof getStaticProps>
) => {
   return (
      <MembersPage members={props.members}>
         <div
            className="text-bold my-2 text-center text-5xl text-red-500"
            style={{ fontFamily: "Roboto Slab" }}
         >
            That person was not found
         </div>
      </MembersPage>
   );
};

export { getStaticProps };

export default NotFoundMembers;
