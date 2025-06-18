import Image from "next/image";
import React from "react";
// import image1 from "../../public/Device 13PM (1).png";
// import image2 from "../../public/Device 13PM (2).png";
// import image3 from "../../public/Device 13PM (3).png";
// import image4 from "../../public/Device 13PM (4).png";
// import image5 from "../../public/Device 13PM.png";
import mobile from "../../public/mobile.png";

const MobileOptimized = () => {
  return (
    <div className="p-[60] text-center ">
      <h1 className="text-orange-500">মোবাইল অপ্টিমাইজড</h1>
      <h1 className="text-[clamp(24px,2.5vw,30px)] font-semibold md:leading-12">
        নির্বিঘ্ন মোবাইল অভিজ্ঞতা, সমস্ত ডিভাইসের <br /> জন্য অপ্টিমাইজ করা
      </h1>
      <div className=" md:mt-[50px] mt-8 w-full">
        <Image className="w-full" src={mobile} alt="image1" />
      </div>
    </div>
  );
};

export default MobileOptimized;
