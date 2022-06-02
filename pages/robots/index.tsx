import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PlaceholderImage from "../../public/robot.png";
import type { StaticImageData } from "next/image";
import Image from "next/image";

let lorem80 = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda nostrum ducimus quo tempora rerum. Iure fugiat enim qui quae! Beatae, consequuntur. Neque accusantium excepturi itaque, saepe deserunt, odio autem consequuntur necessitatibus placeat modi nobis dolore aliquam. Reprehenderit sapiente quia pariatur fuga autem a eveniet eos commodi voluptate laboriosam inventore doloribus reiciendis placeat sequi quae eligendi ducimus asperiores aliquid, distinctio fugiat tempora? Provident nobis odit in repellendus consequatur nulla unde non voluptatum veritatis vitae, suscipit temporibus, tempora perspiciatis. Tempore culpa qui nisi?`;
let robotConfig: RobotType[] = [
   {
      robotImage: [PlaceholderImage],
      robotImageAlt: ["Robot Image"],
      robotType: "FTC",
      robotEndYear: 2022,
      descriptionText: lorem80,
      titleText: `This is Ball Shooter 9000 `,
      robotName: { long: "Ball Shooter 9000", short: "BS9K" },
   },
   {
      robotImage: [PlaceholderImage],
      robotImageAlt: ["Robot Image"],
      robotType: "FTC",
      robotEndYear: 2022,
      descriptionText: lorem80,
      titleText: `This is Ball Shooter 9000 `,
      robotName: { long: "Ball Shooter 9000", short: "BS9K" },
   },
   {
      robotImage: [PlaceholderImage],
      robotImageAlt: ["Robot Image"],
      robotType: "FTC",
      robotEndYear: 2022,
      descriptionText: lorem80,
      titleText: `This is Ball Shooter 9000 `,
      robotName: { long: "Ball Shooter 9000", short: "BS9K" },
   },
];
function Robots() {
   return (
      <>
         <Header currentPage="robots" />
         <div className="mt-8">
            {robotConfig.map((robot, index, fullArray) => {
               let alignment: 0 | 1;
               let last: boolean = index + 1 === fullArray.length;
               if (index % 2 === 0) {
                  alignment = 0;
               } else {
                  alignment = 1;
               }

               return (
                  <RobotsList
                     key={index}
                     alignment={alignment}
                     last={last}
                     robotImage={robot.robotImage}
                     robotType={robot.robotType}
                     robotEndYear={robot.robotEndYear}
                     robotName={robot.robotName}
                     robotImageAlt={robot.robotImageAlt}
                     descriptionText={robot.descriptionText}
                     titleText={robot.titleText}
                  />
               );
            })}
         </div>
         <Footer />
      </>
   );
}

export interface RobotType {
   robotImage: StaticImageData[];
   robotImageAlt: string[];
   robotName: {
      short: string;
      long: string;
   };
   robotType: "VEX" | "FTC" | "FRC" | "other";
   robotEndYear: number;
   titleText: string;
   descriptionText: string;
}

export interface RobotProps extends RobotType {
   alignment: 0 | 1;
   last: boolean;
}

function RobotsList(props: RobotProps) {
   let a: StaticImageData[] = props.robotImage;
   return (
      <div
         className={"mx-20 flex "
            .concat(props.alignment === 0 ? "flex-row-reverse " : "flex-row ")
            .concat(props.last ? "  " : " mb-10 ")}
      >
         <Image
            src={props.robotImage[0]}
            alt={props.robotImageAlt[0]}
            className={"h-72 w-96".concat("")}
            objectFit={"cover"}
         />

         <div className={"".concat(props.alignment === 0 ? "mr-8 " : "ml-8 ")}>
            <div
               className=" text-2xl text-white "
               style={{ fontFamily: "Serif" }}
            >
               {props.titleText}
            </div>
            <div
               className="mt-2 text-lg text-white"
               style={{ fontFamily: "Serif" }}
            >
               {props.descriptionText}
            </div>
         </div>
      </div>
   );
}

export default Robots;
