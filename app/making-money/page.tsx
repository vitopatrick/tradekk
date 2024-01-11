"use client";

import DontGo from "@/components/modals/DontGo";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MakingMoney = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 3000);
  }, []);

  return (
    <>
      <div>
        {/* container */}
        <div className="w-[90%] md:w-[70%] mx-auto bg-neutral-100 min-h-screen ">
          <div className="font-head font-bold space-y-5 p-5 text-center">
            <h4>
              An urgent message for anyone who’s worried about their portfolio:
            </h4>
            <h4 className="text-4xl text-blue-600">
              Schedule Your 2024 Portfolio Check-Up
            </h4>
            <h4>
              No matter what happens with the headlines, politics, or the
              economy in 2024, we’re here for you. Our Private Client Group can
              provide a personal, one-on-one personal portfolio check-up and
              create a custom strategy that is in-line with your level of risk
              and your specific investment goals.
            </h4>
            <h4>Quit day trading, buying stocks, and gambling on cryptos…</h4>
            <h4>This ONE trade could make you $1,000 (or more) every month,</h4>
          </div>
          {/* video */}
          <div className="p-4 flex items-center justify-center">
            <video width="800px" height="800px" controls>
              <source
                src="https://tradewithkeithkaplan.com/Money-Making%20Strategy%20Right%20Now!/video.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div>
            {/* footer */}{" "}
            <div className="text-center font-body capitalize p-3">
              <p>
                For full details and disclosures, please{" "}
                <Link href="/disclaimer" className="underline text-blue-500">
                  click here.
                </Link>
              </p>
              <p>© 2023 TradeKK. All rights reserved.</p>
              <p>
                <Link href="/" className="underline text-blue-500">
                  Terms of use
                </Link>
                |
                <Link href="/" className="underline text-blue-500">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
          {/* end of container */}
        </div>
      </div>
      <DontGo show={isActive} toggle={setIsActive} />
    </>
  );
};

export default MakingMoney;
