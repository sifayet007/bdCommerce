import Image from "next/image";
import React from "react";
import footerLogo from "../../public/footerLogo.png";
import expertSquadLogo from "../../public/expertSquadLogo.png";
import { GoArrowUpRight } from "react-icons/go";

import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

import Link from "next/link";
import WhatsApp from "./WhatsApp";

const Footer = () => {
  return (
    <section>
      <div
        className="md:mt-20 lg:mt-10 mt-5 md:py-9 sm:py-5 lg:w-10/12 md:px-5 mx-auto space-y-4 flex lg:gap-x-[80px] md:gap-x-[41px] items-center  bg-[url(/public/footerbg.png)] "
        style={{
          backgroundImage: "url(/footerbg.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="md:space-y-7 space-y-5t">
          <div className="md:block flex justify-center">
            <Image className="" src={footerLogo} alt="footerLogo" />
          </div>
          <div className="flex justify-center md:justify-start my-3">
            <div
              className="flex justify-center md:justify-start md:gap-x-8 gap-x-5 *:underline *:text-[clamp(14px,2.5vw,18px)]
            "
            >
              <Link className="hover:text-[#FB5C12]" href="/">
                ইকমার্স
              </Link>
              <Link className="hover:text-[#FB5C12]" href="/">
                ফিচার
              </Link>
              <Link className="hover:text-[#FB5C12]" href="/price">
                মূল্য
              </Link>
              <Link className="hover:text-[#FB5C12]" href="/">
                টুলস
              </Link>
              <Link className="hover:text-[#FB5C12]" href="/">
                ডেমো
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:hidden mb-4">
            <WhatsApp />
          </div>
          <div>
            <p className="text-[clamp(14px,2.5vw,16px] lg:p-0 md:p-0 p-5">
              এক্সপার্ট স্কোয়াড হল উদ্ভাবনী ই-কমার্স সলিউশনের একজন নেতা, যা
              বিডি কমার্স অফার করে, অনলাইন ব্যবসায়িক ক্রিয়াকলাপগুলিকে সহজ করার
              জন্য ডিজাইন করা একটি সর্ব-ইন-ওয়ান প্ল্যাটফর্ম। আমাদের লক্ষ্য হল
              শক্তিশালী, ব্যবহারকারী-বান্ধব সরঞ্জামগুলির সাথে ডিজিটাল
              মার্কেটপ্লেসে ব্যবসাগুলিকে বৃদ্ধি, প্রসেস স্ট্রিমলাইন এবং সফল করা।
            </p>
            <button className=" mt-3 cursor-pointer flex items-center gap-x-2 py-1 px-3 text-[#09CC71] bg-[#09CC711A] rounded-full">
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

        <div className="w-full md:flex hidden">
          <WhatsApp />
        </div>
      </div>

      <section className="bg-[#FB5C12] w-full">
        <div className=" w-10/12 mx-auto md:flex space-y-2 justify-between items-center py-7">
          <div className="flex justify-center md:block">
            <p className="text-white">© 2024 বিডি কমার্স Exertsquad.net</p>
          </div>
          <div className="flex justify-center items-center gap-x-2.5">
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
          <div className="flex justify-center items-center gap-x-2 *:text-white ">
            <span>Privacy Policy </span>
            <span>Refund Policy</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer;
