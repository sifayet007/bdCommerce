import Image from "next/image";
import React from "react";
import footerLogo from "../../public/footerLogo.png";
import expertSquadLogo from "../../public/expertSquadLogo.png";
import { GoArrowUpRight } from "react-icons/go";
import { SlPhone } from "react-icons/sl";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiDiscordLine } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

import Link from "next/link";

const Footer = () => {
  return (
    <section>
      <div
        className="mt-44 py-9 w-10/12 mx-auto flex  gap-x-[133px] items-center bg-[url(/public/footerbg.png)] "
        style={{
          backgroundImage: "url(/footerbg.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div>
          <div className="space-y-7">
            <Image src={footerLogo} alt="footerLogo" />
            <div
              className="md:flex hidden gap-x-8 *:underline *:text-lg
            "
            >
              <Link className="hover:text-[#FB5C12]" href="/">
                ইকমার্স
              </Link>
              <Link className="hover:text-[#FB5C12]" href="/">
                ফিচার
              </Link>
              <Link className="hover:text-[#FB5C12]" href="/">
                মূল্য
              </Link>
              <Link className="hover:text-[#FB5C12]" href="/">
                টুলস
              </Link>
              <Link className="hover:text-[#FB5C12]" href="/">
                ডেমো
              </Link>
            </div>
            <div>
              <p className="text-lg">
                এক্সপার্ট স্কোয়াড হল উদ্ভাবনী ই-কমার্স সলিউশনের একজন নেতা, যা
                বিডি কমার্স অফার করে, অনলাইন ব্যবসায়িক ক্রিয়াকলাপগুলিকে সহজ
                করার জন্য ডিজাইন করা একটি সর্ব-ইন-ওয়ান প্ল্যাটফর্ম। আমাদের
                লক্ষ্য হল শক্তিশালী, ব্যবহারকারী-বান্ধব সরঞ্জামগুলির সাথে
                ডিজিটাল মার্কেটপ্লেসে ব্যবসাগুলিকে বৃদ্ধি, প্রসেস স্ট্রিমলাইন
                এবং সফল করা।
              </p>
            </div>
            <button className="cursor-pointer flex items-center gap-x-2 py-1 px-3 text-[#09CC71] bg-[#09CC711A] rounded-full">
              <span>
                <Image src={expertSquadLogo} alt="expertSquadLogo" />
              </span>
              <span className="flex items-center">
                <span>Visit Expert Squad.net</span>
                <span>
                  <GoArrowUpRight />
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className="py-10 px-8 w-full  outline-2 text-center flex justify-center bg-transparent outline-green-400 rounded-2xl backdrop-blur-xl z-40 ">
          <div className="space-y-7">
            <div className="flex justify-center">
              <button className="flex cursor-pointer hover:scale-110 duration-300 items-center font-semibold py-3 px-12 rounded-full gap-x-2 bg-[#09CC71] text-white ">
                <span className="text-2xl">
                  <RiWhatsappFill />
                </span>
                <span className="text-lg flex">Message on WhatsApp</span>
              </button>
            </div>
            <p className="text-xl">
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
      <section className="bg-[#FB5C12] w-full">
        <div className=" w-10/12 mx-auto flex justify-between items-center py-7">
          <div>
            <p className="text-white">© 2024 বিডি কমার্স Exertsquad.net</p>
          </div>
          <div className="flex items-center gap-x-2.5">
            <span className="p-2 bg-[#FB5C121A] text-white outline-1 rounded-full hover:rotate-180 duration-300 cursor-pointer">
              <FaFacebookF className="" />
            </span>
            <span className="p-2 bg-[#FB5C121A] text-white outline-1 rounded-full hover:rotate-180 duration-300 cursor-pointer">
              <FaInstagram />
            </span>
            <span className="p-2 bg-[#FB5C121A] text-white outline-1 rounded-full hover:rotate-180 duration-300 cursor-pointer">
              <TiSocialLinkedin />
            </span>
            <span className="p-2 bg-[#FB5C121A] text-white outline-1 rounded-full hover:rotate-180 duration-300 cursor-pointer">
              <IoLogoYoutube />
            </span>
            <span className="p-2 bg-[#FB5C121A] text-white outline-1 rounded-full hover:rotate-180 duration-300 cursor-pointer">
              <FaXTwitter />
            </span>
          </div>
          <div className="flex items-center gap-x-2 *:text-white">
            <span>Privacy Policy </span>
            <span>Refund Policy</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer;
