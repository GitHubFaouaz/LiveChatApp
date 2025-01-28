import React from "react";

export default function MiniBtnPageBody() {
  return (
    <div className="absolute z-[2] w-[100%] h-[100%] ">
      <span className="absolute top-[250px] left-[10px] text-[#000]  bg-red-200 rounded-3xl w-[25px] h-[25px]"></span>
      <span className="absolute top-[100px] right-[200px] text-[#000]  bg-red-200 rounded-3xl w-[25px] h-[25px]"></span>
      <span className="absolute bottom-[150px] left-[200px] text-[#000]  bg-red-200 rounded-3xl w-[25px] h-[25px]"></span>
    </div>
  );
}
