import Header from "../../components/Header";
import Footer from "../../components/Footer";
import type { NextPage } from "next";
import { useState } from "react";

const Brophy: NextPage = () => {
   return (
      <div className="bg-gray-50">
         <Header currentPage="brophy" />
         <div style={{ fontFamily: "Roboto Slab" }} className="mx-16">
            <div className=" text-center text-2xl font-bold text-white">
               What is Brophy?
            </div>
            <div className="text-center text-lg text-white">
               If you want to join Brophy, go to{" "}
               <a href="https://brophyprep.org/Admissions/Learn-More">
                  this website
               </a>
               . Brophy College Preparatory is an all boys Jesuit Catholic
               Private School with financial based scholarships available to
               those who need it.
            </div>

            <div className=" -mt-4 text-center text-2xl font-bold text-white">
               Brophy&apos;s Technology Mission Statement
            </div>
            <div className="text-center text-lg text-white">
               Brophy College Preparatory maintains an innovative one-to-one
               technology program in order to provide a comprehensive and
               integrated approach to technology that facilitates creative
               opportunities for teaching and learning in the Ignatian
               tradition. In order to promote the best possible experience for
               teachers and students, we foster an environment of shared
               expectations for meaningful technology use as well as mature
               digital citizenship. Understanding that ceaseless technological
               innovation creates a dynamic landscape, the Brophy technology
               program maintains an ethos that is open to trial, error and
               improvement while making certain that every member of the
               community has the essential technology skills to work fluently
               and responsibly in the Digital Age.
            </div>
         </div>

         <Footer currentPage="Footer" />
      </div>
   );
};

export default Brophy;
