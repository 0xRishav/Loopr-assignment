import React from "react";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";

function Header() {
  return (
    <div className="p-7 pb-0 flex flex-col border-b-2 border-grey">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">My Company</div>
        <div>
          <div className="flex justify-between items-center">
            <CgProfile size={40} className="mr-3" />
            <div className="flex flex-col justify-center items-start mr-8">
              <div className="text-sm font-medium">John Jack</div>
              <div className="text-xs font-normal text-slate-400">Admin</div>
            </div>
            <div>
              <RiArrowDropDownLine />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center mt-7">
        <div className="mx-6 ml-0 font-normal">
          <div>Details</div>
          <div className="w-full h-1 mt-1.5 bg-purple" />
        </div>
        <div>
          <div className="mx-6 font-normal text-slate-400">Configuration</div>
          <div className="w-full h-1 mt-1.5 bg-transparent" />
        </div>
      </div>
    </div>
  );
}

export default Header;
