"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { testimonials } from "../constants";

export default function TestimonialSlider() {
  return (
    <div className="max-w-lg md:max-w-4xl mx-auto md:py-10 px-4 overflow-hidden ">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={40}
        slidesPerView={1}
        loop
        className="relative"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:gap-6">
              {/* Profile avatars row */}
              <div className="flex items-center justify-center md:gap-x-4 gap-x-2.5 overflow-x-auto pb-2">
                {testimonials.map((item, i) => (
                  <div
                    key={i}
                    className={`md:w-20 w-12 md:h-20 h-12 rounded-full border-4 ${
                      i === index
                        ? "border-green-500"
                        : "border-transparent opacity-35"
                    } overflow-hidden transition`}
                  >
                    <img
                      src={item.image.src}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Testimonial Card */}
              <div className="bg-[#FEFFF9] md:p-10 p-5 rounded-2xl text-center shadow-sm md:max-w-xl max-w-lg w-full relative">
                <div className="flex justify-center text-orange-400 md:text-3xl text-xl space-x-2 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="flex justify-center items-center text-sm text-gray-600 mb-3">
                  <HiOutlineLocationMarker className="mr-1 md:text-xl " />
                  {t.location}
                </div>
                <hr className=" border-gray-300 my-5" />
                <p className="text-sm md:text-lg font-medium text-gray-800">
                  {t.quote}
                </p>
                <p className=" font-bold text-black md:mt-10 mt-6">
                  - {t.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
