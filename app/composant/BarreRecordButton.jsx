import React from "react";
import "./BarreRecordButton.scss";

export default function BarreRecordButton() {
  return (
    <div
      id="containeBarreRecordButton"
      className="flex justify-center items-center flex-col gap-2   "
    >
      <div className="BarreRecordButton h-[200px] w-[50px] "></div>
      <div className="text-[var(--colorOrange)] text-[30px] font-custom ">
        99
      </div>
    </div>
  );
}
