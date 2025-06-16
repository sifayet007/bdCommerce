import Image from "next/image";
import React from "react";
import home from "../../public/Home.png";

const BenefitsOfUsing = () => {
  return (
    <div className="bg-[#F7F7FB] p-[60px] ">
      <h1 className="text-orange-500 text-3xl text-center">
        বিডিকমার্স ব্যবহারের সুবিধাসমূহ
      </h1>
      <div className="flex gap-x-2 my-12 ">
        <button className="hover:bg-orange-500 duration-300 bg-white hover:text-white px-4 py-2 rounded-3xl">
          সহজ ব্যবস্থাপনা
        </button>
        <button className="hover:bg-orange-500 bg-white duration-300 hover:text-white px-4 py-2 rounded-3xl">
          মোবাইল ফ্রেন্ডলি ডিজাইন
        </button>
        <button className="hover:bg-orange-500 bg-white duration-300 hover:text-white px-4 py-2 rounded-3xl">
          কাস্টমাইজেশন
        </button>
        <button className="hover:bg-orange-500 bg-white duration-300 hover:text-white px-4 py-2 rounded-3xl">
          রিপোর্ট ও এনালিটিক্স
        </button>
        <button className="hover:bg-orange-500 bg-white duration-300 hover:text-white px-4 py-2 rounded-3xl">
          শিপিং ও ডেলিভারি
        </button>
        <button className="hover:bg-orange-500 bg-white duration-300 hover:text-white px-4 py-2 rounded-3xl">
          লাইভ চ্যাট সাপোর্ট
        </button>
        <button className="hover:bg-orange-500 bg-white duration-300 hover:text-white px-4 py-2 rounded-3xl">
          অফলাইন সেলস
        </button>
      </div>
      <div className="flex gap-x-16 p-12 bg-green-50 outline-2 outline-white rounded-lg">
        <div className=" px-10 flex flex-col justify-center">
          <h3 className="text-3xl font-bold">সহজ ব্যবস্থাপনা</h3>
          <p className="mt-8">
            সহজ ব্যবস্থাপনা বিডিকমার্সের অন্যতম বৈশিষ্ট্য। এটি <br />
            ব্যবহারকারী-বান্ধব ড্যাশবোর্ড সরবরাহ করে, যা প্রযুক্তিগত জ্ঞান ছাড়াই{" "}
            <br />
            সহজে পরিচালনা করা যায়। ইনভেন্টরি ও অর্ডার ম্যানেজমেন্ট অটোমেটেড{" "}
            <br />
            হওয়ায় সময় এবং পরিশ্রম কম লাগে। একাধিক স্টোর পরিচালনার সুবিধা ব্যবসার{" "}
            <br />
            সম্প্রসারণকে সহজ করে তোলে। এটি ব্যবসায়িক কাজকে দ্রুত এবং কার্যকর{" "}
            করে।
          </p>
        </div>
        <div>
          <Image src={home} alt="rectangle23" />
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfUsing;
