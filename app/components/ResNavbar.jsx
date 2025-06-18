"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import bdCommerceLogo from "../../public/Group.png";
import { FiPhone } from "react-icons/fi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const ResNavbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        className={` fixed top-0 py-4 w-full shadow-lg backdrop-blur-2xl z-50 ${
          show && "backdrop-blur-md  h-full"
        }`}
      >
        <nav className="flex justify-between items-center px-5 mx-auto relative ">
          <div onClick={() => setShow(!show)} className="cursor-pointer">
            <IoMenu className="text-orange-500 w-8 h-8" />
          </div>
          <div
            className={`fixed top-0 left-0 h-full w-1/2 z-50 transform transition-transform duration-500 ease-in-out  ${
              show ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="bg-white h-[680px] w-full p-5 rounded-br-2xl rounded-tr-2xl">
              <div className="flex justify-between">
                <h1 className="text-xl">মেনু</h1>
                <button onClick={() => setShow(!show)}>
                  <RxCross2 className="cursor-pointer h-10 w-10" />
                </button>
              </div>
              <hr className="text-gray-300 my-5" />
              <div className="flex flex-col space-y-2 text-xl ">
                <Link className="hover:text-[#FB5C12] " href="/">
                  ইকমার্স
                </Link>
                <Link className="hover:text-[#FB5C12]" href="/feature">
                  ফিচার
                </Link>
                <Link className="hover:text-[#FB5C12]" href="/price">
                  মূল্য
                </Link>
                <div className="group relative inline-block">
                  <Link
                    href="/"
                    className="hover:text-[#FB5C12] flex items-center gap-2 "
                  >
                    <samp>ডেমো</samp>
                    <samp className=" group-hover:rotate-180 duration-300">
                      <MdKeyboardArrowUp />
                    </samp>
                  </Link>
                  <div className="group-hover:block hidden absolute w-fit bg-white">
                    <div>
                      <Link href="/"> কাস্টমার প্যানেল</Link>

                      <Link href="/">অ্যাডমিন প্যানেল</Link>
                    </div>
                  </div>
                </div>
                <div className="group relative inline-block">
                  <Link
                    href="/"
                    className=" flex items-center gap-2 hover:text-[#FB5C12] "
                  >
                    <samp className="hover:text-[#FB5C12]"> টুলস</samp>
                    <samp className=" group-hover:rotate-180 duration-300">
                      <MdKeyboardArrowUp />
                    </samp>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Image src={bdCommerceLogo} alt="bdCommerce" />
          </div>

          <Link href="/contact">
            <button className="hover:bg-[#FB5C12]  hover:text-white duration-200 cursor-pointer flex items-center w-12 h-12 justify-center rounded-full outline-2 hover:outline-[#FB5C12] text-[#FB5C12]">
              <FiPhone />
            </button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default ResNavbar;
