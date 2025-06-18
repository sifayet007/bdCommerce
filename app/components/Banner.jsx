import Image from "next/image";
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
// import image1 from "../../public/Rectangle 17.png";
// import image2 from "../../public/Rectangle 18.png";
// import image3 from "../../public/Rectangle 5120.png";
// import image4 from "../../public/Rectangle 17 (1).png";
// import image5 from "../../public/Rectangle 23.png";
// import image6 from "../../public/Rectangle 20.png";
// import image7 from "../../public/Rectangle 21.png";
// import image8 from "../../public/image.png";
// import image9 from "../../public/Rectangle 24.png";
import image10 from "../../public/Group 1000008622.png";

const Banner = () => {
  return (
    <div className="md:pt-32 pt-20 bg-gradient-to-r from-[#0d1b16] to-[#2d0c00] text-white">
      <div className=" px-5 flex flex-col text- center items-center text-center md:space-y-10 space-y-5">
        <h1 className="text-[clamp(20px,2.5vw,50px)] font-bold md:leading-20">
          আপনার ব্যবসা সহজ এবং দ্রুত পরিচালনা <br /> করুন
          <span className="text-orange-500 cursor-pointer">বিডি কমার্স</span>
          এর সাথে।
        </h1>
        <p className="text-[clamp(12px,2.5vw,18px)] ">
          ব্যবসা পরিচালিত হবে স্মার্ট সফটওয়্যারের মাধ্যমে যা অত্যন্ত সহজ, দ্রুত
          ও ঝামেলাহীন, ব্যবসায় সফলতা অর্জন করুন বিডি কমার্সের সাথে।
        </p>
        <button className="flex cursor-pointer hover:scale-110 duration-300 items-center font-semibold md:py-3 py-2 md:px-12 px-8 rounded-full gap-x-2 bg-[#09CC71] text-white ">
          <span className="md:text-2xl text-lg">
            <RiWhatsappFill />
          </span>
          <span className="md:text-lg text-base flex">Message on WhatsApp</span>
        </button>
      </div>
      {/* banner section */}
      <div className="flex items-center justify-center md:gap-5 gap-2 w-full">
        <Image src={image10} alt="image10" />
      </div>
    </div>
  );
};

export default Banner;
