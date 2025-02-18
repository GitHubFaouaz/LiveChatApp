import React from "react";
import "./blocButton.scss";
export default function blocButton() {
  return (
    <div className=" flex flex-col " id="containeBlocButton">
      <div className=" w-[100%] rounded-[15px] p-[15px] ">
        <span className="w-[100%]  bg-[#000] p-[5px] flex  spanBarre  "></span>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
