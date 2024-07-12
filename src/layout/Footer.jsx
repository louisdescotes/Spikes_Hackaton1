import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-between w-full items-center px-[15px]  py-10">
      <div>
        <img src="/public/fullLogoBlack.png" alt="" />
      </div>
      <div className="flex gap-[5px]">
        <a href="" className=" gap-x-[10px] gap-y-[5px] w-fit text-[10px] font-bold">Home</a>
        <a href="" className=" gap-x-[10px] gap-y-[5px] w-fit text-[10px] font-bold">Agencies</a>
        <a href="" className=" gap-x-[10px] gap-y-[5px] w-fit text-[10px] font-bold">About</a>
        <a href="" className=" gap-x-[10px] gap-y-[5px] w-fit text-[10px] font-bold">My Shortlist</a>
      </div>
    </footer>
  );
}
