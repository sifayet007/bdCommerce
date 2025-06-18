import React from "react";
import Image from "next/image";
import { adminCards } from "../constants/admin";

const Admin = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-9/12 md:w-10/12 px-5 mx-auto gap-5 ">
      {adminCards.map((admin, index) => (
        <section
          className="outline-2 p-5  outline-gray-200 rounded-2xl hover:shadow-xl duration-300"
          key={index}
        >
          <div className=" bg-gradient-to-b from-[#fcd2bf] from-5 to-white rounded-2xl p-3">
            <div className="flex justify-center rounded-2xl ">
              <Image src={admin.image} alt="admin image" />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-[clamp(16px,2.5vw,18px)] mt-5 mb-3">
                {admin.title}
              </h3>
              <p className="text-[clamp(12px,2.5vw,16px)]">
                {admin.description}
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Admin;
