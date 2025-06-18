import React from "react";
import highlight from "../../public/Highlight_05.png";
import Image from "next/image";
import highlight11 from "../../public/Highlight_11.png";
import { PiStarFourFill } from "react-icons/pi";
import highlight_5 from "../../public/Highlight_05 (1).png";
import frame from "../../public/Frame 1000014678.png";
import image472 from "../../public/image 472.png";

const CustomerPanel = () => {
  return (
    <div className="md:p-[60] p-5 bg-[#FEFFF9] ">
      <div className="md:flex gap-x-96 space-y-10 items-center">
        <div>
          <h1 className="flex gap-x-2 text-orange-600 font-bold text-[clamp(18px,2.5vw,22px)]">
            <span>
              <PiStarFourFill />
            </span>
            <span>বিডি কমার্স কেন বেছে নেবেন?</span>
          </h1>
          <p className="text-[clamp(20px,2.5vw,24px)] font-bold mt-5">
            বিডি কমার্স আপনার ই-কমার্স ব্যবসার জন্য কীভাবে কাজ করে তা দেখুন
            আমাদের ডেমো এক্সপ্লোর করে।
          </p>
        </div>
        <div className="relative">
          <span className="absolute -top-5 -left-5">
            <Image src={highlight} alt="highlight" />
          </span>
          <p className="text-[clamp(14px,2.5vw,20px)]">
            বিডি কমার্স আপনার ই-কমার্স ব্যবসার জন্য একটি নির্ভরযোগ্য এবং আধুনিক
            প্ল্যাটফর্ম। আমাদের সেবা আপনার ব্যবসার প্রতিটি ধাপকে সহজ, দ্রুত এবং
            কার্যকর করে তোলে
          </p>
          <span className="absolute -right-4 -top-10">
            <Image src={highlight11} alt="highlight11" />
          </span>
        </div>
      </div>
      <div className="md:flex gap-x-5 space-y-8 mt-[55px]">
        <div className="p-[30px] outline-2 outline-[#E6E6E6]  rounded-lg bg-gradient-to-tr from-orange-100 to-green-100 md:block flex justify-between w-full">
          <div className="space-y-5">
            <div className="flex items-center gap-x-5 ">
              <h1 className="text-4xl font-bold text-orange-600">অন্বেষণ</h1>
              <span>
                <Image src={highlight_5} alt="highlight_5" />
              </span>
            </div>
            <p className="text-2xl">
              আমাদের উচ্চ মানের <br />
              ডেমো দেখুন
            </p>
          </div>
          <div className="mt-12  flex justify-center">
            <Image
              src={frame}
              alt="frame"
              className="animate-[spin_10s_linear_infinite]"
            />
          </div>
        </div>
        <div className="outline-2 outline-[#E6E6E6] hover:outline-orange-500 rounded-lg bg-white group w-full">
          <div className="flex gap-x-2 p-3.5">
            <span className="w-3 h-3 bg-[#D9D9D9] rounded-full group-hover:bg-red-500"></span>
            <span className="w-3 h-3 bg-[#D9D9D9] rounded-full group-hover:bg-yellow-500"></span>
            <span className="w-3 h-3 bg-[#D9D9D9] rounded-full group-hover:bg-green-500"></span>
          </div>
          <div className="px-5">
            <Image className="w-full" src={image472} alt="image472" />
          </div>
          <div className="flex justify-between p-5">
            <h1 className="text-lg font-bold">বিডি কমার্স -</h1>
            <button className="outline-2 outline-[#E6E6E6]  px-3.5 py-2 rounded-3xl">
              গ্রাহক প্যানেল
            </button>
          </div>
        </div>
        <div className="outline-2 outline-[#E6E6E6] bg-white rounded-lg hover:outline-green-600 group w-full">
          <div className="flex gap-x-2 p-3.5">
            <span className="w-3 h-3 bg-[#D9D9D9] rounded-full group-hover:bg-red-500"></span>
            <span className="w-3 h-3 bg-[#D9D9D9] rounded-full group-hover:bg-yellow-500"></span>
            <span className="w-3 h-3 bg-[#D9D9D9] rounded-full group-hover:bg-green-500"></span>
          </div>
          <div className="px-5">
            <Image className="w-full" src={image472} alt="image472" />
          </div>
          <div className="flex justify-between p-5">
            <h1 className="text-lg font-bold">বিডি কমার্স -</h1>
            <button className="outline-2 outline-[#E6E6E6]  px-3.5 py-2 rounded-3xl">
              গ্রাহক প্যানেল
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPanel;
