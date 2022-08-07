import React from "react";
import { IoIosRocket } from "react-icons/io";
import { AiOutlineTeam } from "react-icons/ai";
import CompanyLogo from "../assets/company-logo.png";
import LooprLogo from "../assets/loopr-logo.png";

function Sidebar() {
  return (
    <div className="left w-auto px-6 float-left h-full flex flex-col justify-between items-center border-r-2 border-grey">
      <div>
        <div className="flex justify-center items-center mt-4">
          <img src={CompanyLogo} alt="generic-logo" />
        </div>

        <div className="justify-self-start mt-16">
          <button className="flex justify-center items-center pr-24 pl-12 py-3 bg-grey rounded-md text-base font-bold text-purple my-1">
            <IoIosRocket size={20} />
            <div className="ml-1">Projects</div>
          </button>
          <button className="flex justify-center items-center pr-24 pl-12 py-3 rounded-md text-base font-bold text-black my-1">
            <AiOutlineTeam size={20} />
            <div className="ml-1">Team</div>
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mb-9">
        <img src={LooprLogo} alt="loopr-logo" />
      </div>
    </div>
  );
}

export default Sidebar;
