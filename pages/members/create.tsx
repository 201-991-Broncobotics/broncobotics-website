import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import type { UserCredential } from "firebase/auth";
import type {
   MemberPageType,
   MemberPageTypeUndefined,
   MemberPageTypeNoTitle,
} from "./[member]";

import { liteDb } from "../../components/firebase/litedb";
import cleanMember from "../../components/utils/cleanMember";
import checkTitle from "../../components/utils/checkTitle";

import Header from "../../components/Header";
import { auth } from "../../components/firebase/auth";
import Footer from "../../components/Footer";
import getPossibleTitles from "../../components/utils/getPossibleTitles";

/*
 * holy fuck this is so unreadable i am so sorry to anyone who is trying to work on this page
 * it also has way too many js imports so it will take forever to load :)
 * it also exposes firebase api keys but i think thats fine?? but this is definitely react hell
 * at least its strongly typed that should help??
 */

const Create = () => {
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

   if (error) {
      return (
         <div>
            <p>Error: {error.message}</p>
         </div>
      );
   }
   if (loading) {
      return <p>A Google Auth window should have been opened</p>;
   }
   if (user) {
      return <UserReal user={user} />;
   }
   return (
      <div className="App">
         <button onClick={() => signInWithGoogle()}>
            Sign In With your Brophy Google Account!
         </button>
      </div>
   );
};

let UserReal = ({ user }: { user: UserCredential }) => {
   let [member, setMember] = useState<undefined | MemberPageTypeUndefined>(
      undefined
   );

   let title = member?.title;
   let setTitle = (title: string) => {
      setMember({ ...member, title: title.trim().toLowerCase() });
   };

   let [vex, setVex] = useState<boolean>(false);
   let [ftc, setftc] = useState<boolean>(false);
   let [frc, setfrc] = useState<boolean>(false);
   let [leadership, setleadership] = useState<boolean>(false);

   let [possibleTitles, setPossibleTitles] = useState<string[]>([]);

   let router = useRouter();

   useEffect(() => {
      let a = async () => {
         setPossibleTitles(await getPossibleTitles(user));
         setMember({ ...member, title: possibleTitles[0] });
      };
      a();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [user]);

   useEffect(() => {
      const q = query(
         collection(liteDb, "members"),
         where("social.email", "==", user.user.email)
      );
      getDocs(q).then((querySnapshot) => {
         if (!querySnapshot.empty) {
            setMember(
               cleanMember(querySnapshot.docs[0].data() as MemberPageType)
            );
            console.log(querySnapshot.docs[0].data());
            setTitle(querySnapshot.docs[0].id);
            router.replace("/members/edit");
         } else {
            let a = user.user?.email as string;
            setMember({
               ...member,
               name: user.user.displayName as string,
               graduatingYear: parseInt(a.replaceAll(/([a-z@])/gi, "")) + 2000,
               social: {
                  ...member?.social,
                  email: user.user.email as string,
               },
            });
         }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {}, []);

   useEffect(() => {
      setMember({
         ...member,
         currentTeams: [
            vex ? "VEX" : "",
            ftc ? "FTC" : "",
            frc ? "FRC" : "",
            leadership ? "Leadership" : "",
         ],
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [vex, ftc, frc, leadership]);

   let handleSubmit = async () => {
      console.log("test");

      if (member?.title === undefined) {
         alert("Please add a title");
         return;
      }
      if (member?.graduatingYear === undefined) {
         alert("Please add a graduating year");
         return;
      }

      if (member?.name === undefined) {
         alert(
            "There was an error getting your name. please reload and try again"
         );
         return;
      }
      if (member?.social?.email === undefined) {
         alert(
            "There was an error getting your email. please reload and try again"
         );
         return;
      }

      const { doc, setDoc } = await import("firebase/firestore/lite");

      // now we know that all of the required things are here
      if (member?.title !== undefined) {
         if (member.name !== undefined) {
            if (member.graduatingYear !== undefined) {
               if (Array.isArray(member.currentTeams)) {
                  if (member.social?.email !== undefined) {
                     /*the only reason this exists is for typescript */ let a: MemberPageTypeNoTitle =
                        {
                           name: member.name,
                           graduatingYear: member.graduatingYear,
                           currentTeams: member.currentTeams,
                           photo: member.photo || "",
                           social: {
                              instagram: member.social.instagram || "",
                              email: member.social.email,
                              github: member.social.github || "",
                              twitter: member.social.twitter || "",
                              phoneNumber:
                                 member.social.phoneNumber?.replaceAll(
                                    /( ,-\(\))/g,
                                    ""
                                 ) || "",
                           },
                        };

                     setDoc(doc(liteDb, "members", member.title), a)
                        .then(async () => {
                           let a = await fetch(
                              `/api/revalidate/${member?.title || "aefawfea"}`
                           );
                           return a.status;
                        })
                        .then((a) => {
                           if (a) {
                              if (a === 500) {
                                 alert(
                                    "Data set in database, but the page was not rerendered. It might take up to 3 hours to notice the changes on your page"
                                 );
                              } else {
                                 alert(
                                    `Data set in database, and your page (/members/${
                                       member?.title || "aefawfea"
                                    }) should be revalidated`
                                 );
                              }
                           }
                        })
                        .catch((err) => {
                           alert(`An error occurred ${err}`);
                        });
                  }
               }
            }
         }
      }
   };

   // happens if they try to sign in with a non brophy email
   if (!user.user.email?.endsWith("@brophybroncos.org")) {
      return (
         <>
            <p>Please Sign in with your Brophy Email</p>
            <button
               onClick={() => {
                  signOut(auth);
                  router.reload();
               }}
            >
               Sign Out
            </button>
         </>
      );
   }

   return (
      <div>
         {/* <div>{user.user.email}</div>
         <div>{user.user.displayName}</div> */}
         {typeof window}
         <div>{JSON.stringify(member)}</div>
         {/* <div>{JSON.stringify(possibleTitles)}</div> */}
         <div>
            <p>Name: {member?.name}</p>
            <p>Graduating Year: {member?.graduatingYear}</p>
            <p className="w-full">
               Title: {title}. This means the link to your page will be{" "}
               {`/members/${title}`}
               <select
                  name="title"
                  id="title"
                  className="ml-5"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
               >
                  {possibleTitles.map((title, index) => {
                     return (
                        <option key={index} value={title}>
                           {title}
                        </option>
                     );
                  })}
               </select>
            </p>
            <p>
               Current Teams:
               <br /> VEX:{" "}
               <input
                  type="checkbox"
                  checked={vex}
                  onChange={() => {
                     setVex(!vex);
                  }}
               />
               <br /> FTC:{" "}
               <input
                  type="checkbox"
                  checked={ftc}
                  onChange={() => {
                     setftc(!ftc);
                  }}
               />
               <br /> FRC:{" "}
               <input
                  type="checkbox"
                  checked={frc}
                  onChange={() => setfrc(!frc)}
               />
               <br /> Leadership:{" "}
               <input
                  type="checkbox"
                  checked={leadership}
                  onChange={() => setleadership(!leadership)}
               />
            </p>
            <p>
               Photo (url):{" "}
               <input
                  type="url"
                  name="photo"
                  value={member?.photo}
                  onChange={(event) => {
                     setMember({ ...member, photo: event.target.value });
                  }}
               />
            </p>
            <p>
               Instagram (url):{" "}
               <input
                  type="url"
                  name="Instagram"
                  value={member?.social?.instagram}
                  onChange={(event) =>
                     setMember({
                        ...member,
                        social: {
                           ...member?.social,
                           instagram: event.target.value,
                        },
                     })
                  }
               />
            </p>
            <p>
               Github (url):{" "}
               <input
                  type="url"
                  name="Github"
                  value={member?.social?.github}
                  onChange={(event) =>
                     setMember({
                        ...member,
                        social: {
                           ...member?.social,
                           github: event.target.value,
                        },
                     })
                  }
               />
            </p>
            <p>
               Twitter (url):{" "}
               <input
                  type="url"
                  name="Twitter"
                  value={member?.social?.twitter}
                  onChange={(event) =>
                     setMember({
                        ...member,
                        social: {
                           ...member?.social,
                           twitter: event.target.value,
                        },
                     })
                  }
               />
            </p>
            <p>
               Phone Number:{" "}
               <input
                  type="text"
                  name="Phone Number"
                  value={member?.social?.phoneNumber || ""}
                  onChange={(event) =>
                     setMember({
                        ...member,
                        social: {
                           ...member?.social,
                           phoneNumber: event.target.value,
                        },
                     })
                  }
               />
            </p>
            <p>Email: {member?.social?.email}</p>
         </div>
         <div>
            <input
               type="submit"
               value="Submit"
               className="bg-white text-3xl text-gray-700 outline outline-1 outline-black hover:cursor-pointer hover:text-gray-600 "
               onClick={handleSubmit}
            />
         </div>
      </div>
   );
};

const Wrapper = () => {
   return (
      <>
         <Header currentPage="none" />
         <Create />
         <Footer />
      </>
   );
};

export default Wrapper;
