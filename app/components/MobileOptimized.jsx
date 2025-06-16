import Image from "next/image";
import React from "react";
import image1 from "../../public/Device 13PM (1).png";
import image2 from "../../public/Device 13PM (2).png";
import image3 from "../../public/Device 13PM (3).png";
import image4 from "../../public/Device 13PM (4).png";
import image5 from "../../public/Device 13PM.png";

const MobileOptimized = () => {
  return (
    <div className="p-[60] text-center ">
      <h1 className="text-orange-500">মোবাইল অপ্টিমাইজড</h1>
      <h1 className="text-3xl font-semibold leading-12">
        নির্বিঘ্ন মোবাইল অভিজ্ঞতা, সমস্ত ডিভাইসের <br /> জন্য অপ্টিমাইজ করা
      </h1>
      <div className="flex justify-around mt-[50px]">
        <Image src={image1} alt="image1" />
        <Image className="" src={image2} alt="image2" />
        <Image src={image3} alt="image3" />
        <Image src={image4} alt="image4" />
        <Image src={image5} alt="image5" />
      </div>
    </div>
  );
};

export default MobileOptimized;
