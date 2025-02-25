import React from "react";
import "./blocButton.scss";
export default function blocButton() {
  return (
    <div className=" flex flex-col gap-3 " id="containeBlocButton">
      <div className=" w-[100%] rounded-[15px] p-[15px] border-4 border-[#000]  ">
        <span className="w-[100%]  bg-[#000] p-[5px] flex  spanBarre  "></span>
      </div>
      <div className=" w-[100%] rounded-[35px] p-[5px] border-4 border-[#000] flex justify-around containe-button-deco">
        <span className="w-[30px] h-[30px]   bg-[var(--colorOrange)] p-[5px] rounded-3xl bt1 "></span>
        <span className="w-[30px] h-[30px]   bg-[var(--colorOrange)] p-[5px] rounded-3xl bt2  "></span>
        <span className="w-[30px] h-[30px]   bg-[var(--colorOrange)] p-[5px] rounded-3xl bt3  "></span>
        <span className="w-[30px] h-[30px]   bg-[var(--colorOrange)] p-[5px] rounded-3xl  bt4 "></span>
      </div>
      <div></div>
    </div>
  );
}
