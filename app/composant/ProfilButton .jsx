import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import "./ProfilButton.scss";
export default function ProfilButton() {
  return (
    <div>
      <div id="containeProfilButton">
        <div className="containeButton1">
          <div className="containeButton2">
            <button>
              <IoPersonOutline className="h-[70px] w-[70px] " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
