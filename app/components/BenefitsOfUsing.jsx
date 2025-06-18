import Image from "next/image";
import React from "react";
import home from "../../public/Home.png";
import MouseDragScroll from "./MouseDragScroll";

const BenefitsOfUsing = () => {
  return (
    <div className="bg-[#F7F7FB] md:p-[60px] p-5  ">
      <h1 className="text-orange-500  text-[clamp(20px,2.5vw,50px)] text-center">
        বিডিকমার্স ব্যবহারের সুবিধাসমূহ
      </h1>
      <div>
        <MouseDragScroll />
      </div>

      <div className="md:flex justify-between space-y-5 md:p-12  bg-green-50 outline-2 outline-white rounded-lg">
        <div className=" px-10 flex flex-col justify-center w-full">
          <h3 className="text-[clamp(20px,2.5vw,40px)] font-bold">
            সহজ ব্যবস্থাপনা
          </h3>
          <p className="mt-8 text-[clamp(14px,2.5vw,18px)]">
            সহজ ব্যবস্থাপনা বিডিকমার্সের অন্যতম বৈশিষ্ট্য। এটি
            ব্যবহারকারী-বান্ধব ড্যাশবোর্ড সরবরাহ করে, যা প্রযুক্তিগত জ্ঞান ছাড়াই{" "}
            সহজে পরিচালনা করা যায়। ইনভেন্টরি ও অর্ডার ম্যানেজমেন্ট অটোমেটেড{" "}
            হওয়ায় সময় এবং পরিশ্রম কম লাগে। একাধিক স্টোর পরিচালনার সুবিধা ব্যবসার{" "}
            সম্প্রসারণকে সহজ করে তোলে। এটি ব্যবসায়িক কাজকে দ্রুত এবং কার্যকর{" "}
            করে।
          </p>
        </div>
        <div className="w-full">
          <Image src={home} alt="rectangle23" />
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfUsing;
