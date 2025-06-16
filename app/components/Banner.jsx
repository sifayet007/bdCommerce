import Image from "next/image";
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import image1 from "../../public/Rectangle 17.png";
import image2 from "../../public/Rectangle 18.png";
import image3 from "../../public/Rectangle 5120.png";
import image4 from "../../public/Rectangle 17 (1).png";
import image5 from "../../public/Rectangle 23.png";
import image6 from "../../public/Rectangle 20.png";
import image7 from "../../public/Rectangle 21.png";
import image8 from "../../public/image.png";
import image9 from "../../public/Rectangle 24.png";

const Banner = () => {
  return (
    <div className="pt-32 bg-gradient-to-r from-[#0d1b16] to-[#2d0c00] text-white">
      <div className="flex flex-col text- center items-center text-center space-y-10">
        <h1 className="text-5xl font-bold leading-20">
          আপনার ব্যবসা সহজ এবং দ্রুত পরিচালনা <br /> করুন
          <span className="text-orange-500 text-6xl cursor-pointer">
            {" "}
            বিডি কমার্স
          </span>{" "}
          এর সাথে।
        </h1>
        <p className="text-[clamp(12px, 2.5vw, 18px)]">
          ব্যবসা পরিচালিত হবে স্মার্ট সফটওয়্যারের মাধ্যমে যা অত্যন্ত সহজ, দ্রুত
          ও ঝামেলাহীন, ব্যবসায় সফলতা অর্জন করুন বিডি কমার্সের সাথে।
        </p>
        <button className="flex cursor-pointer hover:scale-110 duration-300 items-center font-semibold py-3 px-12 rounded-full gap-x-2 bg-[#09CC71] text-white ">
          <span className="text-2xl">
            <RiWhatsappFill />
          </span>
          <span className="text-lg flex">Message on WhatsApp</span>
        </button>
      </div>
      {/* banner section */}
      <div className="flex items-center justify-center gap-5">
        <div className=" flex flex-col gap-y-5">
          <div className="flex items-end gap-x-5">
            <Image src={image1} alt="image1" />
            <Image className="h-56 " src={image2} alt="image2" />
          </div>
          <div className="flex gap-x-5">
            <Image src={image3} alt="image3" />
            <Image className="h-48" src={image4} alt="image4" />
          </div>
        </div>
        <div>
          <Image src={image5} alt="image5" />
        </div>
        <div className=" flex flex-col gap-y-5">
          <div className="flex items-end gap-x-5">
            <Image className="h-56" src={image6} alt="image6" />
            <Image src={image7} alt="image7" />
          </div>
          <div className="flex gap-x-5">
            <Image className="h-48 " src={image8} alt="image8" />
            <Image src={image9} alt="image9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
