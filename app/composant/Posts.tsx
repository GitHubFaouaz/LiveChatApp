import React from "react";
import Image from "next/image";

import imgProfil from "../../public/imgProfil.webp";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdOutlineMusicVideo } from "react-icons/md";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import { LuListMusic } from "react-icons/lu";
import { SiNeteasecloudmusic } from "react-icons/si";

export default function Posts() {
  return (
    <div className="flex flex-col  gap-1 bg-[#000] pr-1 pl-3 pt-4 pb-2 rounded-3xl customContainePosts ">
      <div className="grid grid-cols-[15%_70%_15%] items-center justify-center   bg-bgHomedeg px-1 py-2 ">
        {/* <div className="grid grid-cols-[15%_70%_15%] items-center justify-center   bg-gradient-to-r from-[#313030] via-[#333] to-[#313030] px-1 py-2 "> */}
        <div className=" w-[50px]  border border-[var(--colorOrange)] border-2 rounded-3xl flex items-center justify-center  ">
          <Image
            src={imgProfil}
            alt="imgProfil"
            // height={50}
            // width={50}
            className="rounded-3xl "
          />
        </div>
        <div>
          <p className="text-[var(--colorOrange)]">faouaz</p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eos
            tenetur iste unde ipsum, dolorum totam fugit ab
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <IoIosMusicalNotes className="w-[5px]  text-white" />
            <MdOutlineMusicVideo className="w-[5px] text-white" />
            <RiNeteaseCloudMusicFill className="w-[5px]   text-white" />
            <LuListMusic className="w-[9px]  rounded-3xl shadow-[0px_1px_3px_0px_#dc6e33]   " />
            <SiNeteasecloudmusic className="w-[12px]    rounded-3xl customIcon shadow-[0px_1px_3px_0px_#dc6e33]  " />
          </div>
          <button className="flex items-center justify-center py-1 px-3 rounded-2xl bg-[#000] text-white border  border-[var(--colorOrange)] border-1 rounded-1xl hover:bg-[var(--colorOrange)]   ">
            faouaz
          </button>
        </div>
      </div>

      <div className=" h-[100px] bg-bgHomedeg "></div>
      <div className=" h-[100px] bg-bgHomedeg"></div>
      <div className=" h-[100px] bg-bgHomedeg"></div>
    </div>
  );
}
