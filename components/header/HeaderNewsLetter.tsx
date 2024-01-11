import { addToDb } from "@/lib/addToDb";
import React, { useState } from "react";

const HeaderNewsLetter = () => {
  const [email, setEmail] = useState("");
  const handleClick = () => {
    addToDb(email);
  };
  return (
    <div className="mx-auto bg-neutral-800 px-5 py-10 text-white my-[4rem]">
      <div className="w-[80%] mx-auto">
        <h4 className="text-center font-head font-bold text-2xl">
          Discover the $5.4 Million A.I. Program That Gives You The Opportunity
          to Predict Earnings With Remarkable Accuracy
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
            Register Now
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

export default HeaderNewsLetter;
