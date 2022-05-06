import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RobotsList from "../../components/RobotsList";
import { RobotType } from "../../components/RobotsList";

let PlaceholderImage = "/logo.svg"

let robotConfig: RobotType[] = [
   {
      robotImage: PlaceholderImage,
      robotNameShort: "BS9K",
      robotNameLong: "Ball Shooter 9000",
      robotType: "FTC",
      robotEndYear: 2022,
      robotTeamNumber: "201",
      robotDescription:
         "BS9K has 3 major components, an intake, a linear slide, and a bucket mounted on the linear slide. The intake is made with surgical tubing, allowing BS9K to pick up both the spherical and cubical cargo in Freight Frenzy. The intake throws the cargo into the 3d printed bucket ",
      seasonName: "Freight Frenzy",
   },
   {
      robotImage: PlaceholderImage,
      robotNameShort: "DIRT",
      robotNameLong: "Da Interesting Robot Thing",
      robotType: "FRC",
      robotEndYear: 2022,
      robotTeamNumber: "991",
      robotDescription:
         "BS9K has 3 major components, an intake, a linear slide, and a bucket mounted on the linear slide. The intake is made with surgical tubing, allowing BS9K to pick up both the spherical and cubical cargo in Freight Frenzy. The intake throws the cargo into the 3d printed bucket ",
      seasonName: "Rapid React",
   },
   {
      robotImage: PlaceholderImage,
      robotNameShort: "TARS",
      robotNameLong: "T-Shirt Air Repellant System",
      robotType: "FRC",
      robotEndYear: 2022,
      robotTeamNumber: "991",
      robotDescription:
         "BS9K has 3 major components, an intake, a linear slide, and a bucket mounted on the linear slide. The intake is made with surgical tubing, allowing BS9K to pick up both the spherical and cubical cargo in Freight Frenzy. The intake throws the cargo into the 3d printed bucket ",
      seasonName: "Freight Frenzy",
   },
];

function Robots() {
   return (
      <>
         <Header currentPage="robots" />
         <div className="mt-8">
            {robotConfig.map((robot, index) => {
               return (
                  <RobotsList alignment={index % 2} robot={robot}></RobotsList>
               );
            })}
         </div>
         <Footer />
      </>
   );
}

export default Robots;
