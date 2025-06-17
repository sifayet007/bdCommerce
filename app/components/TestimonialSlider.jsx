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
    <div className="max-w-4xl mx-auto py-10 px-4">
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
            <div className="flex flex-col items-center gap-6">
              {/* Profile avatars row */}
              <div className="flex items-center justify-center gap-4 overflow-x-auto pb-2">
                {testimonials.map((item, i) => (
                  <div
                    key={i}
                    className={`w-20 h-20 rounded-full border-4 ${
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
              <div className="bg-[#FEFFF9] p-10 rounded-2xl text-center shadow-sm max-w-xl w-full relative">
                <div className="flex justify-center text-orange-400 text-3xl space-x-2 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="flex justify-center items-center text-sm text-gray-600 mb-3">
                  <HiOutlineLocationMarker className="mr-1 text-xl" />
                  {t.location}
                </div>
                <hr className=" border-gray-300 my-5" />
                <p className="text-lg font-medium text-gray-800">{t.quote}</p>
                <p className=" font-bold text-black mt-10">- {t.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
