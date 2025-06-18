"use client";
import Link from "next/link";
import React, { useState } from "react";

const CAButton = () => {
  const [toggleBgColor, setToggleBgColor] = useState("customer");
  return (
    <div>
      <nav className="flex justify-center gap-4 p-4">
        <Link href="/feature/customer">
          <button
            onClick={() => setToggleBgColor("customer")}
            className={`hover:bg-orange-500 px-5 py-2 rounded-3xl hover:text-white outline-2 outline-gray-100 hover:outline-orange-500 ${
              toggleBgColor === "customer"
                ? "bg-orange-500 text-white"
                : "bg-white"
            }`}
          >
            কাস্টমার প্যানেল
          </button>
        </Link>
        <Link href="/feature/admin">
          <button
            onClick={() => setToggleBgColor("admin")}
            className={`hover:bg-orange-500 px-5 py-2 rounded-3xl hover:text-white outline-2 outline-gray-100 hover:outline-orange-500 ${
              toggleBgColor === "admin"
                ? "bg-orange-500 text-white"
                : "bg-white"
            }`}
          >
            অ্যাডমিন প্যানেল
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default CAButton;
