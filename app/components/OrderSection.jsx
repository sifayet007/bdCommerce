import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const OrderSection = () => {
  return (
    <div className="lg:px-[100px] md:px-5 md:mt-60   ">
      <div className="md:flex lg:justify-between md:justify-between shadow-2xl p-5  lg:relative md:relative space-y-5 w-full">
        {/* card 1? */}
        <div className="lg:p-8 p-4 rounded-2xl md:w-[230px]  lg:w-[425px]">
          <span className="text-white bg-green-500 lg:py-3 py-1 px-5 md:px-2 md:text-sm rounded-3xl ">
            ৩ মাস
          </span>
          <h4 className=" font-bold mt-5">
            <span className="text-2xl font-bold text-orange-500">
              ১২,০০০ টাকা
            </span>
          </h4>
          <p className=" mt-3 text-sm">
            আপনার ব্যবসা শুরু করার প্রথম ধাপ হিসেবে এই প্যাকেজটি উপযুক্ত। এটি
            আপনার ব্যবসার কার্যকারিতা পরীক্ষা এবং প্রাথমিক পর্যায়ে সাফল্যের দিক
            নির্দেশনা দিতে সাহায্য করবে
          </p>
          <h1 className="flex gap-x-2 items-center  font-bold mb-3 mt-3  text-sm">
            <span>
              <FaCheckCircle className="text-green-500" />
            </span>
            <span>আনলিমিটেড ফ্রি বিসনেস ইমেইল</span>
          </h1>
          <hr className="" />
          <div className=" p-5 rounded-xl mt-3 bg-gray-200">
            <p>পেমেন্টের বিবরণ:</p>
            <p className="flex justify-between items-center mt-2 text-sm">
              <span>প্যাকেজের মূল্য/মাসিক :</span>
              <span>১,২০০ টাকা</span>
            </p>
            <p className="flex justify-between items-center mb-3 mt-2 text-sm">
              <span>মেয়াদ :</span>
              <span>৩ মাস</span>
            </p>
            <hr className="" />
            <ul className="flex justify-between items-center mt-3 text-sm">
              <span>সর্বমোট :</span>
              <span className="font-bold">৩,৬০০ টাকা</span>
            </ul>
            <Link href="/contact">
              <button className="py-3 mt-5 text-orange-500 outline-2 outline-orange-500  hover:bg-orange-500  hover:text-white rounded-3xl w-full">
                অর্ডার করুন
              </button>
            </Link>
          </div>
        </div>
        {/* card 2 */}
        <div className="bg-orange-500 lg:p-8 p-4  rounded-2xl md:absolute lg:w-[425px] md:w-[230px] md:left-[250px] lg:left-[448px] lg:-top-36 md:-top-20">
          <span className="text-orange-500 bg-white lg:py-3 py-1 lg:px-5 px-2 md:text-sm rounded-3xl ">
            ১ বছর
          </span>
          <h4 className="text-white font-bold mt-5">
            <span className="text-2xl font-bold">১২,০০০ টাকা</span>
            <span className="line-through text-sm md:text-[8px]">
              ১৪,৪০০ টাকা
            </span>
          </h4>
          <p className="text-white mt-3 text-sm">
            আমাদের ১২ মাসের প্যাকেজটি দীর্ঘমেয়াদি পরিকল্পনা ও ব্যবসার প্রসার
            নিশ্চিত করার জন্য তৈরি। এই প্যাকেজের মাধ্যমে আপনি আপনার ব্র্যান্ডকে
            আন্তর্জাতিক স্তরে পরিচিত করতে পারবেন।
          </p>
          <h1 className="flex gap-x-2 items-center text-white font-bold mb-3 mt-3  text-sm">
            <span>
              <FaCheckCircle />
            </span>
            <span>আনলিমিটেড ফ্রি বিসনেস ইমেইল</span>
          </h1>
          <hr className="text-white" />
          <div className="bg-white p-5 rounded-xl mt-3">
            <p>পেমেন্টের বিবরণ:</p>
            <p className="flex justify-between items-center mt-2 text-sm">
              <span>প্যাকেজের মূল্য/মাসিক :</span>
              <span className="flex items-center gap-x-2">
                <span className="text-orange-500 line-through">১,২০০</span>
                <span>১,১০০ টাকা</span>
              </span>
            </p>
            <p className="flex justify-between items-center mb-3 mt-2 text-sm">
              <span>মেয়াদ :</span>
              <span>৩ মাস</span>
            </p>
            <hr className="" />
            <ul className="flex justify-between items-center mt-3 text-sm">
              <span>সর্বমোট :</span>
              <span className="font-bold">১২,০০০ টাকা</span>
            </ul>
            <Link href="/contact">
              <button className="py-3 mt-5 hover:bg-green-500 text-white  bg-orange-500  hover:text-white rounded-3xl w-full">
                অর্ডার করুন
              </button>
            </Link>
          </div>
        </div>
        {/* card 3? */}
        <div className=" lg:p-8 p-4 rounded-2xl md:w-[230px] lg:w-[425px] ">
          <span className="text-white bg-green-500 lg:py-3 py-1 lg:px-5 px-2 md:text-sm rounded-3xl ">
            ৬ মাস
          </span>
          <h4 className=" font-bold mt-5">
            <span className="text-2xl font-bold text-orange-500">
              ৬,৬০০ টাকা
            </span>
            <span className="line-through text-gray-500 text-sm md:text-[10px]">
              ৭,২০০ টাকা
            </span>
          </h4>
          <p className=" mt-3 text-sm">
            আপনার ব্যবসাকে আরও পেশাদার এবং কার্যকরভাবে পরিচালনার জন্য ৬ মাসের
            প্যাকেজটি সেরা। এটি আপনার ব্যবসার আয় ও জনপ্রিয়তা বাড়াতে কার্যকর।
          </p>
          <h1 className="flex gap-x-2 items-center  font-bold mb-3 mt-3 text-sm">
            <span>
              <FaCheckCircle className="text-green-500" />
            </span>
            <span>আনলিমিটেড ফ্রি বিসনেস ইমেইল</span>
          </h1>
          <hr className="" />
          <div className=" p-5 rounded-xl mt-3 bg-gray-200">
            <p>পেমেন্টের বিবরণ:</p>
            <p className="flex justify-between items-center mt-2 text-sm">
              <span>প্যাকেজের মূল্য/মাসিক :</span>
              <span className="flex items-center gap-x-2">
                <span className="text-orange-500 line-through">১,২০০</span>
                <span>১,১০০ টাকা</span>
              </span>
            </p>
            <p className="flex justify-between items-center mb-3 mt-2 text-sm">
              <span>মেয়াদ :</span>
              <span>৩ মাস</span>
            </p>
            <hr className="" />
            <ul className="flex justify-between items-center mt-3 text-sm">
              <span>সর্বমোট :</span>
              <span className="font-bold">৬,৬০০ টাকা</span>
            </ul>
            <Link href="/contact">
              <button className="py-3 mt-5 text-orange-500 outline-2 outline-orange-500  hover:bg-orange-500  hover:text-white rounded-3xl w-full">
                অর্ডার করুন
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
