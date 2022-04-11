import React from "react"
import { RobotType } from "./robotConfig/robotConfig"

type RobotProps = {alignment: "left" | "right" | 0 | 1, } & RobotType

function RobotsList (props: RobotProps) {
  return (
    <div>
      <img src={props.robotImage} alt={props.robotNameShort}  />
    </div>
  )
}

export default RobotsList