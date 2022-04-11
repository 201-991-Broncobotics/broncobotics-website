import FTC_2022 from "./images/FTC_2022.png"

interface RobotType {
  robotImage: string;
  robotNameShort: string;
  robotNameLong: string;
  robotType: "VEX" | "FTC" | "FRC" | "other";
  robotTeamNumber: "201A" | "201B" | "201" | "991" | "other";
  robotEndYear: number;
  robotDescription: string;
}

// organize by year, then VEX, FTC, FRC, and other
// image must be imported so it works when built
let robotConfig: RobotType[] = [
  {
    robotImage: FTC_2022,
    robotNameShort: "BS9K",
    robotNameLong: "Ball Shooter 9000",
    robotType: "FTC",
    robotEndYear: 2022,
    robotTeamNumber: "201",
    robotDescription: "This is our robot for the 2021-2022 FTC Season Freight Frenzy! ",
  },
];

export default robotConfig;
export type { RobotType };
