import React from "react";
import { SlPhone } from "react-icons/sl";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiDiscordLine } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";

const WhatsApp = () => {
  return (
    <div>
      <div className="md:py-10  md:px-8 p-5 w-full  outline-2 text-center flex justify-center bg-transparent outline-green-400 rounded-2xl backdrop-blur-xl z-40 ">
        <div className="md:space-y-[clamp(15px,2.5vw,25px)] space-y-3">
          <div className="flex justify-center">
            <button className="flex cursor-pointer hover:scale-110 duration-300 items-center font-semibold py-3 whitespace-nowrap px-[clamp(25px,2.5vw,40px)] rounded-full gap-x-2 bg-[#09CC71] text-white min-w-[250px] ">
              <span className="text-2xl">
                <RiWhatsappFill />
              </span>
              <span className="text-[clamp(16px,2.5vw,10px)] whitespace-nowrap flex">
                Message on WhatsApp
              </span>
            </button>
          </div>
          <p className="text-[clamp(16px,2.5vw,20px)]">
            অথবা, আমাদের সঙ্গে <br /> যোগাযোগ করুন।
          </p>
          <p className="text-[#01a056] cursor-pointer">+8801335462929</p>
          <div className="flex items-center justify-center gap-x-2.5">
            <span className="p-2 bg-[#FB5C121A] text-[#FB5C12] rounded-full cursor-pointer ">
              <SlPhone />
            </span>
            <span className="p-2 bg-[#FB5C121A] text-[#FB5C12] rounded-full cursor-pointer">
              <IoLogoWhatsapp />
            </span>
            <span className="p-2 bg-[#FB5C121A] text-[#FB5C12] rounded-full cursor-pointer">
              <RiDiscordLine />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsApp;
