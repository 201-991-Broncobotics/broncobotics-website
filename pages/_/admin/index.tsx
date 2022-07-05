import Link from "next/link";
import Head from "next/head";

let adminPage = () => {
   return (
      <div>
         <Head>
            <title>Admin Page</title>
         </Head>
         <p>
            Note: both of these are only available to someone signed in with the
            broncobotics@brophybroncos.org email{" "}
         </p>
         <Link href={"/_/admin/memberPages"}>
            <a className="text-blue-600">Adminsitrate the members pages </a>
         </Link>
         <br />
         <Link href={"/_/admin/realNames"}>
            <a className="text-blue-600">
               Adminsitrate the names of members (what shows up on the list in
               /members)
            </a>
         </Link>
      </div>
   );
};

export default adminPage;
