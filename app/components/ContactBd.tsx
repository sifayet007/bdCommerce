import React from "react";

const ContactBd = () => {
  return (
    <div className=" bg-gradient-to-r from-amber-50 to-blue-50">
      <div className="text-center">
        <h4 className="text-orange-500 mb-3 font-semibold">যোগাযোগ</h4>

        <p className="font-semibold">
          আপনার যেকোনো প্রশ্ন বা সমস্যা নিয়ে আমাদের সাথে যোগাযোগ করতে নিচের
          যেকোনো মাধ্যম ব্যবহার করুন। আমরা সবসময় আপনার পাশে আছি, দ্রুত এবং
          কার্যকর সমাধান দিতে!
        </p>
      </div>
      <div className="backdrop-blur-2xl w-[50%] outline-2 outline-white p-8">
        <form action="">
          <div className="flex flex-col gap-y-3 ">
            <label htmlFor="">নাম</label>
            <input
              className="py-2 placeholder:text-sm outline-2 outline-gray-100"
              type="text"
              placeholder="নাম টাইপ করুন "
              name="name"
              id="name"
            />
          </div>
          <div>
            <label htmlFor="">ফোন নম্বর</label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor="">ইমেইল</label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor="">রেফার কোড</label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor=""></label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor="">বার্তা</label>
            <textarea name="" id=""></textarea>
          </div>
          <button>বার্তা পাঠান</button>
        </form>
      </div>
    </div>
  );
};

export default ContactBd;
