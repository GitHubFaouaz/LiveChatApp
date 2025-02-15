import React from "react";
import "./blocButton.scss";
export default function blocButton() {
  return (
    <div className="flex flex-col ">
      <div className=" w-[100%] bg-red-200 rounded-[15px] p-[15px]">
        <span className="w-[100%] h-[5px] bg-[#000] flex"></span>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
