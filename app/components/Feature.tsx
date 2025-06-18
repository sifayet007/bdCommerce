import React from "react";
import { featureCards } from "../constants/future";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-9/12 mx-auto gap-5">
      {featureCards.map((feature, index) => (
        <section
          className="outline-2 p-5 outline-gray-200 rounded-2xl hover:shadow-xl duration-300"
          key={index}
        >
          <div className=" bg-gradient-to-b from-[#fcd2bf] from-5 to-white rounded-2xl p-3">
            <div className="flex justify-center  rounded-2xl">
              <Image src={feature.image} alt="feature image" />
            </div>
            <div className="text-center">
              <h3 className="font-bold">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Feature;
