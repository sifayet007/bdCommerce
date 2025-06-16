import Image from "next/image";
import React from "react";
import scoImage from "../../public/IMG@1x 1.png";

const SEOSection = () => {
  return (
    <div className="flex px-24 gap-x-28  bg-gradient-to-r from-orange-50 to-[#F7F7FB]">
      <div className="py-[77px] pl-[50px]">
        <h1 className="text-5xl font-bold leading-16">
          আমাদের <span className="text-green-500">SEO</span> সেবার
          বৈশিষ্ট্যসমূহ:
        </h1>
        <ul className="list-disc mt-10 space-y-2">
          <li className="">
            আপনার টার্গেট অডিয়েন্সের কাছে সহজে পৌঁছাতে সহায়তা।
          </li>
          <li>ব্র্যান্ড ভিজিবিলিটি ও ট্র্যাফিক বৃদ্ধি।</li>
          <li>কাস্টমাইজড ও সাশ্রয়ী সেবা।</li>
          <li>র‌্যাঙ্কিং বাড়িয়ে ব্যবসার লাভজনকতা নিশ্চিত।</li>
        </ul>
      </div>
      <div>
        <Image
          className="animate-[bounce_7s_ease-in-out_infinite] translate-y-20"
          src={scoImage}
          alt="scoImage"
        />
      </div>
    </div>
  );
};

export default SEOSection;
