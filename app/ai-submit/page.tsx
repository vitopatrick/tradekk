import VideoComp from "@/components/VideoComp/VideoComp";
import Link from "next/link";
import React from "react";

const AiPageSubmit = () => {
  return (
    <>
      <div
        className="min-h-screen bg-black"
        style={{
          background: `url('https://dam.investorplace.com/7MUXXAF6/at/xp65knwth9pwccpfjfgzm3hk/bg_image.png')`,
        }}
      >
        {/* container */}
        <div className="w-[90%] mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
          {/* Video */}
          <div className="w-full col-span-2">
            <img
              src="https://dam.investorplace.com/7MUXXAF6/at/xw87vfwk5qh87tthphfj6frt/ai_earnings_predictor_summit_logo_dark.svg"
              alt=""
            />
            <div>
              <VideoComp url="https://firebasestorage.googleapis.com/v0/b/email-list-653cb.appspot.com/o/TradeSmith.mp4?alt=media&token=5dd3e8c5-723d-4b41-b7d0-847e84d1aa32" />
            </div>
          </div>
          {/* write up */}
          <div className="space-y-4">
            {/* card one */}
            <div className="bg-orange-50 p-3">
              <h3 className="font-bold font-head text-3xl text-center">
                Exclusive Deal Extended:
              </h3>
              <p className="font-body text-center text-2xl">
                Purchase Today to Claim Your Copy Of the No. 1 Ranked Stock of
                the Season.
              </p>
            </div>
            {/* card two */}
            <div className="bg-white p-3 font-body space-y-4 text-2xl">
              <p>
                Louis Navellier has been called “The Earnings Whisperer’’ by
                CNBC for his ability to accurately predict companies that are
                about to crush earnings expectations.
              </p>
              <p>
                Landon Swan is a world-renowned fintech entrepreneur and
                earnings expert whose research has been featured on Fox
                Business, CNBC, Barron’s, and Investor’s Business Daily.
              </p>
              <p>
                Today, they’re joining forces to reveal revolutionary A.I.
                research that can essentially give you a “sneak peek” at
                earnings numbers before they’re released.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="bg-black h-[200px] flex items-center justify-center ">
        <div className="text-center font-body text-white space-y-5">
          <p>
            For full details and disclosures,{" "}
            <Link
              href="/disclaimer"
              className="underline text-blue-500 capitalize"
            >
              {" "}
              please click here.
            </Link>{" "}
          </p>
          <p>
            The investment results described in the testimonials on this page
            are not typical; investing in securities carries a high degree of
            risk; you may lose some or all of the investment.
          </p>
          <p>©2024 TradeSmith, LLC. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default AiPageSubmit;
