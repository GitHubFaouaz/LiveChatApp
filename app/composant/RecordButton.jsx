import React from "react";
import "./RecordButton.scss";
import { FaRecordVinyl } from "react-icons/fa6";
import { PiVinylRecordFill } from "react-icons/pi";

export default function RecordButton() {
  return (
    <div>
      <div id="containeRecordButton">
        <div className="containeButton1">
          <div className="containeButton2">
            <button>
              <PiVinylRecordFill className="h-[70px] w-[70px] " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
