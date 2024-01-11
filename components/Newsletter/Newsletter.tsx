import { addToDb } from "@/lib/addToDb";
import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const handleClick = () => {
    addToDb(email);
  };
  return (
    <div className="md:w-[70%] w-[90%] mx-auto bg-neutral-800 px-5 py-10 text-white my-[4rem]">
      <div>
        <h4 className="text-center font-head font-bold text-2xl">
          ENTER YOUR EMAIL ADDRESS HERE
        </h4>
        <div className="my-4 flex items-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your favorite email address"
            className="bg-neutral-200 text-black p-4 w-full font-body flex-1"
          />
          <button
            onClick={handleClick}
            className="font-head bg-blue-600 p-3 font-bold flex-2 text-xl"
          >
            Sign me Up
          </button>
        </div>
        <p className="font-body text-center">
          By submitting your email address, you will automatically opt-in to
          receive marketing emails from TradeSmith.
        </p>
        <p className="font-body text-center">
          Contact{" "}
          <span className="font-bold underline">
            support@tradeswithkeithkaplan.com
          </span>{" "}
          for further support.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
