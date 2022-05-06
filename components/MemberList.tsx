import React from "react";
import { MemberType } from "../pages/members";

interface MemberProps {
   member: MemberType;
}

const MemberList = (props: MemberProps) => {
   return (
   <div className="bg-gray-50">
      {props.member.name}
   </div>);
};

export default MemberList;
