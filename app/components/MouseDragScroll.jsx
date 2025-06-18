"use client";
import React, { useRef, useState } from "react";

const MouseDragScroll = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
      onMouseMove={handleMouseMove}
      className="flex overflow-x-auto whitespace-nowrap gap-x-3 px-4 py-4 snap-x snap-mandatory scroll-smooth touch-auto cursor-grab select-none scrollbar-hide"
    >
      {[
        "সহজ ব্যবস্থাপনা",
        "মোবাইল ফ্রেন্ডলি ডিজাইন",
        "কাস্টমাইজেশন",
        "রিপোর্ট ও এনালিটিক্স",
        "শিপিং ও ডেলিভারি",
        "লাইভ চ্যাট সাপোর্ট",
        "অফলাইন সেলস",
      ].map((item, index) => (
        <button
          key={index}
          className="px-5 py-2 rounded-full bg-white hover:bg-orange-500 hover:text-white text-sm md:text-base font-medium whitespace-nowrap snap-start transition-all duration-300"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default MouseDragScroll;
