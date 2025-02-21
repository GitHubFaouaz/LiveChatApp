import React from "react";
import "./blocButton.scss";
export default function blocButton() {
  return (
    <div className=" flex flex-col gap-3 " id="containeBlocButton">
      <div className=" w-[100%] rounded-[15px] p-[15px] border-4 border-[#000]  ">
        <span className="w-[100%]  bg-[#000] p-[5px] flex  spanBarre  "></span>
      </div>
      <div className=" w-[100%] rounded-[35px] p-[5px] border-4 border-[#000] flex justify-around ">
        <span className="w-[50px] h-[50px]   bg-[#000] p-[5px]   rounded-3xl "></span>
        <span className="w-[50px] h-[50px]  bg-[#fff] p-[5px] rounded-3xl   "></span>
        <span className="w-[50px] h-[50px]  bg-[#333] p-[5px] rounded-3xl   "></span>
        <span className="w-[50px] h-[50px]  bg-[#555] p-[5px] rounded-3xl   "></span>
      </div>
      <div></div>
    </div>
  );
}
