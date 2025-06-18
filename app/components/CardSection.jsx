import Image from "next/image";
import React from "react";
import frame1 from "../../public/Frame1.png";
import frame2 from "../../public/Frame2.png";
import frame3 from "../../public/Frame3.png";
import frame4 from "../../public/Frame4.png";

const CardSection = () => {
  return (
    <div className="bg-gradient-to-tr from-orange-50 to-green-50 md:p-[60px] p-5  ">
      <h2 className="text-[clamp(20px,2.5vw,25px)] mb-[clamp(12px,2.5vw,30px)] text-center">
        যে কারণে <span className="text-green-500">বিডি কমার্স-</span> আপনার
        ব্যবসার সেরা সঙ্গী।
      </h2>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-5">
        <div className="text-center pt-[30px] pb-[58px] px-5 outline-2 outline-white bg-green-50 rounded-lg">
          <span className="flex justify-center">
            <Image
              className="bg-green-100  w-14 p-3 h-14 rounded-full"
              src={frame1}
              alt="frame1"
            />
          </span>
          <h1 className="text-[clamp(14px,2.5vw,18px)] font-bold my-5">
            সহজ ও স্মার্ট প্ল্যাটফর্ম
          </h1>
          <p className="text-[clamp(12px,2.5vw,16px)]">
            বিডি কমার্স এমন একটি ব্যবহারবান্ধব ই-কমার্স প্ল্যাটফর্ম যা আপনাকে
            ঝামেলাহীনভাবে ব্যবসা পরিচালনার সুবিধা দেয়।
          </p>
        </div>
        <div className="text-center pt-[30px] pb-[58px] px-5 outline-white outline-2 bg-orange-50 rounded-lg">
          <span className="flex justify-center">
            <Image
              className="bg-orange-100  w-14 p-3 h-14 rounded-full"
              src={frame2}
              alt="frame1"
            />
          </span>
          <h1 className="text-[clamp(14px,2.5vw,18px)] font-bold my-5">
            সহজ ও স্মার্ট প্ল্যাটফর্ম
          </h1>
          <p className="text-[clamp(12px,2.5vw,16px)]">
            বিডি কমার্স এমন একটি ব্যবহারবান্ধব ই-কমার্স প্ল্যাটফর্ম যা আপনাকে
            ঝামেলাহীনভাবে ব্যবসা পরিচালনার সুবিধা দেয়।
          </p>
        </div>
        <div className="text-center pt-[30px] pb-[58px] px-5 outline-2 outline-white bg-[#9f4a0008] rounded-lg">
          <span className="flex justify-center">
            <Image
              className="bg-[#9F4A001A]  w-14 p-3 h-14 rounded-full"
              src={frame3}
              alt="frame1"
            />
          </span>
          <h1 className=" text-[clamp(14px,2.5vw,18px)] font-bold my-5">
            সহজ ও স্মার্ট প্ল্যাটফর্ম
          </h1>
          <p className="text-[clamp(12px,2.5vw,16px)]">
            বিডি কমার্স এমন একটি ব্যবহারবান্ধব ই-কমার্স প্ল্যাটফর্ম যা আপনাকে
            ঝামেলাহীনভাবে ব্যবসা পরিচালনার সুবিধা দেয়।
          </p>
        </div>
        <div className="text-center pt-[30px] pb-[58px] px-5 outline-2 outline-white bg-[#044ea20f] rounded-lg">
          <span className="flex justify-center">
            <Image
              className="bg-[#044EA21A]  w-14 p-3 h-14 rounded-full"
              src={frame4}
              alt="frame1"
            />
          </span>
          <h1 className="text-[clamp(14px,2.5vw,18px)] font-bold my-5">
            সহজ ও স্মার্ট প্ল্যাটফর্ম
          </h1>
          <p className="text-[clamp(12px,2.5vw,16px)]">
            বিডি কমার্স এমন একটি ব্যবহারবান্ধব ই-কমার্স প্ল্যাটফর্ম যা আপনাকে
            ঝামেলাহীনভাবে ব্যবসা পরিচালনার সুবিধা দেয়।
          </p>
        </div>
        <div className="text-center pt-[30px] pb-[58px] px-5 outline-2 outline-white bg-green-50 rounded-lg">
          <span className="flex justify-center">
            <Image
              className="bg-green-100  w-14 p-3 h-14 rounded-full"
              src={frame1}
              alt="frame1"
            />
          </span>
          <h1 className="text-[clamp(14px,2.5vw,18px)] font-bold my-5">
            সহজ ও স্মার্ট প্ল্যাটফর্ম
          </h1>
          <p className="text-[clamp(12px,2.5vw,16px)]">
            বিডি কমার্স এমন একটি ব্যবহারবান্ধব ই-কমার্স প্ল্যাটফর্ম যা আপনাকে
            ঝামেলাহীনভাবে ব্যবসা পরিচালনার সুবিধা দেয়।
          </p>
        </div>
        <div className="text-center pt-[30px] pb-[58px] px-5 outline-white outline-2 bg-orange-50 rounded-lg">
          <span className="flex justify-center">
            <Image
              className="bg-orange-100  w-14 p-3 h-14 rounded-full"
              src={frame2}
              alt="frame1"
            />
          </span>
          <h1 className="text-[clamp(14px,2.5vw,18px)] font-bold my-5">
            সহজ ও স্মার্ট প্ল্যাটফর্ম
          </h1>
          <p className="text-[clamp(12px,2.5vw,16px)]">
            বিডি কমার্স এমন একটি ব্যবহারবান্ধব ই-কমার্স প্ল্যাটফর্ম যা আপনাকে
            ঝামেলাহীনভাবে ব্যবসা পরিচালনার সুবিধা দেয়।
          </p>
        </div>
        <div className="text-center pt-[30px] pb-[58px] px-5 outline-2 outline-white bg-[#9f4a0008] rounded-lg">
          <span className="flex justify-center">
            <Image
              className="bg-[#9F4A001A]  w-14 p-3 h-14 rounded-full"
              src={frame3}
              alt="frame1"
            />
          </span>
          <h1 className="text-[clamp(14px,2.5vw,18px)] font-bold my-5">
            সহজ ও স্মার্ট প্ল্যাটফর্ম
          </h1>
          <p className="text-[clamp(12px,2.5vw,16px)]">
            বিডি কমার্স এমন একটি ব্যবহারবান্ধব ই-কমার্স প্ল্যাটফর্ম যা আপনাকে
            ঝামেলাহীনভাবে ব্যবসা পরিচালনার সুবিধা দেয়।
          </p>
        </div>
        <div className="text-center pt-[30px] pb-[58px] px-5 outline-2 outline-white bg-[#044ea20f] rounded-lg">
          <span className="flex justify-center">
            <Image
              className="bg-[#044EA21A]  w-14 p-3 h-14 rounded-full"
              src={frame4}
              alt="frame1"
            />
          </span>
          <h1 className="text-[clamp(14px,2.5vw,18px)] font-bold my-5">
            সহজ ও স্মার্ট প্ল্যাটফর্ম
          </h1>
          <p className="text-[clamp(12px,2.5vw,16px)]">
            বিডি কমার্স এমন একটি ব্যবহারবান্ধব ই-কমার্স প্ল্যাটফর্ম যা আপনাকে
            ঝামেলাহীনভাবে ব্যবসা পরিচালনার সুবিধা দেয়।
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
