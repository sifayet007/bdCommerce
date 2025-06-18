// app/feature/layout.tsx
import Link from "next/link";
import CAButton from "../components/CAButton";
import Footer from "../components/Footer";

const FeatureLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-24">
      <div className="text-center">
        <h1 className="text-[clamp(20px,2.5vw,34px)] font-bold">
          আমাদের বিডিকমার্সের <span className="text-green-500">ফিচার সমুহ</span>
        </h1>
        <p className="text-[14px,2.5vw,18px] lg:px-[310px] px-10 mt-[clamp(5px,2.5vw,10px)]">
          বিডিকমার্স একটি শক্তিশালী ই-কমার্স প্ল্যাটফর্ম, যা সহজ পেমেন্ট,
          স্মার্ট অ্যানালিটিক্স, এবং মাল্টি-ভেন্ডর সিস্টেম সরবরাহ করে। এতে
          কাস্টমাইজেবল ডিজাইন, সোশ্যাল মিডিয়া ইন্টিগ্রেশন, এবং পুশ নোটিফিকেশন
          সুবিধা রয়েছে। বিশ্বব্যাপী ব্যবসার জন্য মাল্টি-ল্যাঙ্গুয়েজ সাপোর্ট এবং
          মোবাইল রেসপন্সিভ ডিজাইন সহ এটি একটি পূর্ণাঙ্গ সল্যুশন।
        </p>
      </div>
      <div>
        <CAButton />
      </div>
      <div className="p-4">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default FeatureLayout;
