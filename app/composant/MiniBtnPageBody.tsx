import React from "react";
import "./_MiniBtnPageBody.scss";
export default function MiniBtnPageBody() {
  return (
    <div className="absolute z-[2] w-[100%] h-[100%] ">
      <div
        className="absolute top-[250px] left-[10px] text-[#000]  rounded-3xl w-[25px] h-[25px] "
        id="cube"
      >
        <div className="side" id="front"></div>
        <div className="side" id="bottom"></div>
        <div className="side" id="top"></div>
        <div className="side" id="left"></div>
        <div className="side" id="right"></div>
        <div className="side" id="back"></div>
      </div>

      <div
        className="absolute top-[100px] right-[20px] text-[#000]  rounded-3xl w-[25px] h-[25px]"
        id="cube1"
      >
        <div className="side" id="front"></div>
        {/* <div className="side" id="bottom"></div> */}
        {/* <div className="side" id="top"></div> */}
        <div className="side" id="left"></div>
        <div className="side" id="right"></div>
        <div className="side" id="back"></div>
      </div>

      <div className="absolute bottom-[150px] left-[200px] text-[#000]  bg-red-200 rounded-3xl w-[25px] h-[25px]"></div>
    </div>
  );
}
