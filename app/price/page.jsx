import React from "react";
import OrderSection from "../components/OrderSection";
import Footer from "../components/Footer";

const Pricing = () => {
  return (
    <div className="mt-28">
      <div className="text-center">
        <h4 className="text-orange-500 mb-3 font-semibold">মূল্য নির্ধারণ</h4>

        <p className="font-semibold">
          আপনার ব্যবসার জন্য আদর্শ প্যাকেজটি এখনই বেছে নিন এবং সাথে পাচ্ছেন কম
          দামে বিশ্বমানের সেবা! আপনার সফলতা আমাদের অনুপ্রেরণা। <br /> আপনার
          সফলতা আমাদের উদ্দেশ্য।
        </p>
      </div>
      <section>
        <OrderSection />
      </section>
      <section className="mt-28 ">
        <div className="mx-[100px] p-5 rounded-2xl bg-green-500 flex justify-between items-center">
          <h1 className="text-3xl  text-white">
            লাইফটাইম ইনস্টলেশন নিতে চাইলে আমাদের সাথে যোগাযোগ করুন
          </h1>
          <button className="bg-white hover:bg-orange-500 py-2 px-5 rounded-3xl hover:text-white duration-300">
            যোগাযোগ করুন
          </button>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Pricing;
