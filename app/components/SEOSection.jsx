import Image from "next/image";
import React from "react";
import scoImage from "../../public/IMG@1x 1.png";

const SEOSection = () => {
  return (
    <div className="md:flex lg:px-24 md:px-10 px-5 lg:gap-x-28 md:gap-x-10  bg-gradient-to-r from-orange-50 to-[#F7F7FB] ">
      <div className="md:py-[77px] md:w-full p-5 pl-[50px]">
        <h1 className="text-[clamp(24px,2.5vw,48px)] font-bold md:leading-16">
          আমাদের <span className="text-green-500">SEO</span> সেবার
          বৈশিষ্ট্যসমূহ:
        </h1>
        <ul className="list-disc mt-[clamp(20px,2.5vw,30px)] space-y-2">
          <li className="">
            আপনার টার্গেট অডিয়েন্সের কাছে সহজে পৌঁছাতে সহায়তা।
          </li>
          <li>ব্র্যান্ড ভিজিবিলিটি ও ট্র্যাফিক বৃদ্ধি।</li>
          <li>কাস্টমাইজড ও সাশ্রয়ী সেবা।</li>
          <li>র‌্যাঙ্কিং বাড়িয়ে ব্যবসার লাভজনকতা নিশ্চিত।</li>
        </ul>
      </div>
      <div className="w-full">
        <Image
          className="animate-[bounce_7s_ease-out_infinite] w-full md:translate-y-20 translate-y-10 "
          src={scoImage}
          alt="scoImage"
        />
      </div>
    </div>
  );
};

export default SEOSection;
