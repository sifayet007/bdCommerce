import Image from "next/image";
import Link from "next/link";
import bdCommerceLogo from "../../public/Group.png";
import { FiPhone } from "react-icons/fi";
import { MdKeyboardArrowUp } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      <div className="backdrop-blur-md fixed top-0 py-4 w-full shadow-lg z-50">
        <nav className="flex justify-between items-center w-10/12 mx-auto ">
          <div>
            <Image src={bdCommerceLogo} alt="bdCommerce" />
          </div>
          <div className="md:flex hidden gap-x-8  ">
            <Link className="hover:text-[#FB5C12] text-[#FB5C12]" href="/">
              ইকমার্স
            </Link>
            <Link className="text-[#FB5C12]" href="/feature/customer">
              ফিচার
            </Link>
            <Link className="text-[#FB5C12]" href="/price">
              মূল্য
            </Link>
            <div className="group relative inline-block">
              <Link
                href="/"
                className="hover:text-[#FB5C12] text-[#FB5C12] flex items-center gap-2 "
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
                <samp className="text-[#FB5C12]"> টুলস</samp>
                <samp className=" group-hover:rotate-180 duration-300">
                  <MdKeyboardArrowUp />
                </samp>
              </Link>
            </div>
          </div>

          <Link href="/contact">
            <button className="hover:bg-[#FB5C12]  hover:text-white duration-200 cursor-pointer flex items-center gap-x-2 py-1 px-3 rounded-3xl outline-2 hover:outline-[#FB5C12] text-[#FB5C12]">
              <span>
                <FiPhone />
              </span>
              যোগাযোগ
            </button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
