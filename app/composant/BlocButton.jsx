import React from "react";
import "./blocButton.scss";
export default function blocButton() {
  return (
    <div className="flex flex-col ">
      <div className=" w-[100%] bg-red-200 rounded-[15px] p-[15px]">
        <span className="w-[100%] h-[10px] bg-[#000] flex before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500"></span>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
