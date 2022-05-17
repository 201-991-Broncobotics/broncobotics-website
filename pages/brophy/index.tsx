import Header from "../../components/Header";
import Footer from "../../components/Footer";
import type { NextPage } from "next";
import { useState } from "react";

const Brophy: NextPage = () => {
	let [button, setButton] = useState(".1rem");
	let [color, setColor] = useState("text-gray-50");

	return (
		<div className="bg-gray-50">
			<Header currentPage="brophy" />

			<button
				className="-mt-10 text-gray-50"
				onClick={() => {
					setButton(button === "3rem" ? ".1rem" : "3rem");
					setColor(color === "text-white" ? "text-gray-50" : "text-white");
				}}
			>
				s
			</button>

			<div style={{ fontFamily: "Roboto Slab" }} className="mx-16">
				<div className=" text-center text-2xl font-bold text-white">
					What is Brophy?
				</div>
				<div className="text-center text-lg text-white">
					If you want to join Brophy, go to to{" "}
					<a href="https://brophyprep.org/Admissions/Learn-More">
						this website
					</a>
					. Brophy College Preparatory is an all boys Jesuit Catholic Private
					School with financial based scholarships available to those who need
					it.
					<span className="text-gray-50">
						<br />i had a dermatolgy appointment on friday may 6th
					</span>
				</div>

				<div className=" -mt-4 text-center text-2xl font-bold text-white">
					Brophy&apos;s Technology Mission Statement
				</div>
				<div className="text-center text-lg text-white">
					Brophy College Preparatory maintains an innovative one-to-one
					technology program in order to provide a comprehensive and integrated
					approach to technology that facilitates creative opportunities for
					teaching and learning in the Ignatian tradition. In order to promote
					the best possible experience for teachers and students, we foster an
					environment of shared expectations for meaningful technology use as
					well as mature digital citizenship. Understanding that ceaseless
					technological innovation creates a dynamic landscape, the Brophy
					technology program maintains an ethos that is open to trial, error and
					improvement while making certain that every member of the community
					has the essential technology skills to work fluently and responsibly
					in the Digital Age.
				</div>
				<span
					className={"-mt-4 text-xs ".concat(color)}
					style={{ fontSize: button, lineHeight: button }}
				>
					<br />
					Estimates of the casualties from the Iraq War (beginning with the 2003
					invasion of Iraq, and the ensuing occupation and insurgency and civil
					war) have come in several forms, and those estimates of different
					types of Iraq War casualties vary greatly. Estimating war-related
					deaths poses many challenges.[1][2] Experts distinguish between
					population-based studies, which extrapolate from random samples of the
					population, and body counts, which tally reported deaths and likely
					significantly underestimate casualties.[3] Population-based studies
					produce estimates of the number of Iraq War casualties ranging from
					151,000 violent deaths as of June 2006 (per the Iraq Family Health
					Survey) to 1,033,000 excess deaths (per the 2007 Opinion Research
					Business (ORB) survey). Other survey-based studies covering different
					time-spans find 461,000 total deaths (over 60% of them violent) as of
					June 2011 (per PLOS Medicine 2013), and 655,000 total deaths (over 90%
					of them violent) as of June 2006 (per the 2006 Lancet study). Body
					counts counted at least 110,600 violent deaths as of April 2009
					(Associated Press). The Iraq Body Count project documents
					185,000–208,000 violent civilian deaths through February 2020 in their
					table. All estimates of Iraq War casualties are disputed.[4][5]
					<a
						href="https://www.youtube.com/watch?v=xpNFINzNUqo"
						className="text-blue-500"
					>
						only a spoonful.mov
					</a>
				</span>
			</div>

			<Footer currentPage="Footer" />
		</div>
	);
};

export default Brophy;
